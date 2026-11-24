// Matomo / analytics trackers are started by consent.js after opt-in.

(function () {
  var KNOWN_LOCALES = [
    "en",
    "fr",
    "es",
    "it",
    "de",
    "ja",
    "nl",
    "nn",
    "pt",
    "ar",
  ];
  var DEFAULT_LOCALE = "en";

  function detectPageLocale() {
    var segment = window.location.pathname.split("/")[1] || "";
    if (KNOWN_LOCALES.indexOf(segment) !== -1) {
      return segment;
    }
    return DEFAULT_LOCALE;
  }

  function resultLocaleFromHref(href) {
    try {
      var path = new URL(href, window.location.origin).pathname;
      var segment = path.split("/")[1] || "";
      if (KNOWN_LOCALES.indexOf(segment) !== -1) {
        return segment;
      }
      return DEFAULT_LOCALE;
    } catch (e) {
      return DEFAULT_LOCALE;
    }
  }

  function updateResultCount(list) {
    var resultRoot = list.closest
      ? list.closest(".md-search-result")
      : null;
    var meta = resultRoot
      ? resultRoot.querySelector(".md-search-result__meta")
      : null;
    if (!meta || !meta.textContent || !/\d/.test(meta.textContent)) {
      return;
    }
    meta.textContent = meta.textContent.replace(
      /\d+/,
      String(list.children.length)
    );
  }

  function filterSearchResults(list) {
    var pageLocale = detectPageLocale();
    var items = Array.prototype.slice.call(list.children);
    var removed = 0;

    items.forEach(function (li) {
      var anchor = li.querySelector("a[href]");
      if (!anchor) {
        return;
      }
      if (resultLocaleFromHref(anchor.href) !== pageLocale) {
        li.remove();
        removed += 1;
      }
    });

    if (removed) {
      updateResultCount(list);
    }
  }

  function observeSearchList(list) {
    if (!list || list.dataset.localeFilterBound === "1") {
      return;
    }
    list.dataset.localeFilterBound = "1";
    new MutationObserver(function () {
      filterSearchResults(list);
    }).observe(list, { childList: true });
  }

  function bindSearchFilters(root) {
    (root || document)
      .querySelectorAll(".md-search-result__list")
      .forEach(observeSearchList);
  }

  // Language flag icon
  var pageLocale = detectPageLocale();
  var languageElement = document.querySelector(".md-select svg");
  if (languageElement) {
    languageElement.outerHTML =
      '<img src="/assets/images/flags/' +
      pageLocale +
      '.jpg" width="20" height="20">';
  }

  // MkDocs Material: one shared search index for all i18n locales.
  // Keep only hits for the active language (see mkdocs-static-i18n docs).
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      bindSearchFilters(document);
    });
  } else {
    bindSearchFilters(document);
  }

  // Home relocates .md-search; re-bind if a new result list appears.
  new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) {
          return;
        }
        if (node.matches && node.matches(".md-search-result__list")) {
          observeSearchList(node);
        } else if (node.querySelectorAll) {
          bindSearchFilters(node);
        }
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
