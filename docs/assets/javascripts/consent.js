/**
 * BroodMinder consent banner — Analytics (Matomo / GA) + Assistant.
 * Refuse / Customize / Accept all. Trackers load only after opt-in.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "broodminder-consent-v1";
  var LEGACY_CHAT_KEY = "broodminder-doc-chat-consent";
  var MATOMO_URL = "//feed.mybroodminder.com/matomo/";
  var MATOMO_SITE_ID = "4";
  var GA_ID = "UA-125989472-3";

  var STRINGS = {
    en: {
      title: "Your privacy choices",
      intro:
        "We use optional tools to measure documentation traffic and improve Ask BroodMinder. Essential site features always work.",
      analyticsLabel: "Analytics",
      analyticsHelp: "Matomo (and Google Analytics on the home page) — pages viewed, country, device. No ads.",
      assistantLabel: "Ask BroodMinder assistant",
      assistantHelp:
        "An anonymous browser ID and a short conversation summary to improve the assistant.",
      refuse: "Refuse all",
      customize: "Customize",
      acceptAll: "Accept all",
      save: "Save choices",
      back: "Back",
      settings: "Privacy settings",
    },
    fr: {
      title: "Vos choix de confidentialité",
      intro:
        "Nous utilisons des outils optionnels pour mesurer l'audience de la documentation et améliorer Ask BroodMinder. Les fonctions essentielles du site fonctionnent toujours.",
      analyticsLabel: "Mesure d'audience",
      analyticsHelp:
        "Matomo (et Google Analytics sur la page d'accueil) — pages vues, pays, appareil. Pas de publicité.",
      assistantLabel: "Assistant Ask BroodMinder",
      assistantHelp:
        "Un identifiant anonyme dans ce navigateur et un court résumé de conversation pour améliorer l'assistant.",
      refuse: "Tout refuser",
      customize: "Personnaliser",
      acceptAll: "Tout accepter",
      save: "Enregistrer",
      back: "Retour",
      settings: "Paramètres de confidentialité",
    },
    es: {
      title: "Tus opciones de privacidad",
      intro:
        "Usamos herramientas opcionales para medir el tráfico de la documentación y mejorar Ask BroodMinder. Las funciones esenciales del sitio siempre funcionan.",
      analyticsLabel: "Analítica",
      analyticsHelp:
        "Matomo (y Google Analytics en la página de inicio) — páginas vistas, país, dispositivo. Sin publicidad.",
      assistantLabel: "Asistente Ask BroodMinder",
      assistantHelp:
        "Un identificador anónimo en este navegador y un breve resumen de la conversación para mejorar el asistente.",
      refuse: "Rechazar todo",
      customize: "Personalizar",
      acceptAll: "Aceptar todo",
      save: "Guardar",
      back: "Volver",
      settings: "Ajustes de privacidad",
    },
  };

  var prefs = null;
  var matomoStarted = false;
  var gaStarted = false;
  var root = null;
  var panelMode = "main";

  function detectUiLang() {
    var known = { en: 1, fr: 1, es: 1 };
    var parts = window.location.pathname.split("/");
    for (var i = 0; i < parts.length; i++) {
      if (parts[i] === "fr" || parts[i] === "es") {
        return parts[i];
      }
      if (known[parts[i]]) {
        return "en";
      }
    }
    return "en";
  }

  function t(key) {
    var lang = detectUiLang();
    var pack = STRINGS[lang] || STRINGS.en;
    return pack[key] || STRINGS.en[key] || key;
  }

  function readStored() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return null;
      }
      var data = JSON.parse(raw);
      if (!data || typeof data !== "object") {
        return null;
      }
      return {
        analytics: !!data.analytics,
        assistant: !!data.assistant,
      };
    } catch (err) {
      return null;
    }
  }

  function writeStored(next) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          v: 1,
          analytics: !!next.analytics,
          assistant: !!next.assistant,
          updatedAt: Date.now(),
        })
      );
      try {
        localStorage.setItem(
          LEGACY_CHAT_KEY,
          next.assistant ? "accepted" : "refused"
        );
      } catch (legacyErr) {
        /* ignore */
      }
    } catch (err) {
      /* ignore */
    }
  }

  function emitChange() {
    try {
      window.dispatchEvent(
        new CustomEvent("broodminder-consent-change", {
          detail: {
            analytics: !!(prefs && prefs.analytics),
            assistant: !!(prefs && prefs.assistant),
          },
        })
      );
    } catch (err) {
      /* ignore */
    }
  }

  function startMatomo() {
    if (matomoStarted) {
      return;
    }
    matomoStarted = true;
    var _paq = (window._paq = window._paq || []);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    _paq.push(["setTrackerUrl", MATOMO_URL + "matomo.php"]);
    _paq.push(["setSiteId", MATOMO_SITE_ID]);
    var d = document;
    var g = d.createElement("script");
    var s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = MATOMO_URL + "matomo.js";
    if (s && s.parentNode) {
      s.parentNode.insertBefore(g, s);
    } else {
      d.head.appendChild(g);
    }
  }

  function startGa() {
    if (gaStarted) {
      return;
    }
    gaStarted = true;
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== "function") {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    var g = document.createElement("script");
    g.async = true;
    g.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(g);
  }

  function applyTrackers() {
    if (prefs && prefs.analytics) {
      startMatomo();
      startGa();
      if (window._paq) {
        window._paq.push(["forgetUserOptOut"]);
      }
      return;
    }
    if (matomoStarted && window._paq) {
      window._paq.push(["optUserOut"]);
    }
  }

  function setPrefs(next, options) {
    prefs = {
      analytics: !!next.analytics,
      assistant: !!next.assistant,
    };
    writeStored(prefs);
    applyTrackers();
    emitChange();
    if (!options || options.render !== false) {
      render();
    }
  }

  function allows(purpose) {
    if (!prefs) {
      return false;
    }
    return !!prefs[purpose];
  }

  function hasDecided() {
    return prefs !== null;
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function ensureRoot() {
    if (root && document.body.contains(root)) {
      return root;
    }
    root = document.createElement("div");
    root.id = "bm-consent-root";
    document.body.appendChild(root);
    root.addEventListener("click", onRootClick);
    return root;
  }

  function onRootClick(event) {
    var btn = event.target.closest("[data-bm-consent]");
    if (!btn || !root.contains(btn)) {
      return;
    }
    var action = btn.getAttribute("data-bm-consent");
    if (action === "refuse") {
      setPrefs({ analytics: false, assistant: false });
      panelMode = "main";
      return;
    }
    if (action === "accept-all") {
      setPrefs({ analytics: true, assistant: true });
      panelMode = "main";
      return;
    }
    if (action === "customize") {
      panelMode = "customize";
      render();
      return;
    }
    if (action === "back") {
      panelMode = "main";
      render();
      return;
    }
    if (action === "save") {
      var analyticsEl = root.querySelector("#bm-consent-analytics");
      var assistantEl = root.querySelector("#bm-consent-assistant");
      setPrefs({
        analytics: !!(analyticsEl && analyticsEl.checked),
        assistant: !!(assistantEl && assistantEl.checked),
      });
      panelMode = "main";
      return;
    }
    if (action === "open") {
      panelMode = "customize";
      render({ forceOpen: true });
    }
  }

  function render(options) {
    var host = ensureRoot();
    var forceOpen = options && options.forceOpen;
    var decided = hasDecided();

    if (decided && !forceOpen && panelMode !== "customize") {
      host.innerHTML =
        '<button type="button" class="bm-consent-reopen" data-bm-consent="open" aria-label="' +
        escapeHtml(t("settings")) +
        '">' +
        escapeHtml(t("settings")) +
        "</button>";
      host.className = "bm-consent-root bm-consent-root--settled";
      return;
    }

    host.className = "bm-consent-root bm-consent-root--open";
    var analyticsChecked = prefs ? prefs.analytics : false;
    var assistantChecked = prefs ? prefs.assistant : false;

    if (panelMode === "customize" || forceOpen) {
      host.innerHTML =
        '<div class="bm-consent-card" role="dialog" aria-modal="true" aria-labelledby="bm-consent-title">' +
        '<h2 id="bm-consent-title" class="bm-consent-title">' +
        escapeHtml(t("title")) +
        "</h2>" +
        '<p class="bm-consent-intro">' +
        escapeHtml(t("intro")) +
        "</p>" +
        '<div class="bm-consent-options">' +
        '<label class="bm-consent-option">' +
        '<input type="checkbox" id="bm-consent-analytics"' +
        (analyticsChecked ? " checked" : "") +
        " />" +
        "<span>" +
        "<strong>" +
        escapeHtml(t("analyticsLabel")) +
        "</strong>" +
        '<small>' +
        escapeHtml(t("analyticsHelp")) +
        "</small>" +
        "</span>" +
        "</label>" +
        '<label class="bm-consent-option">' +
        '<input type="checkbox" id="bm-consent-assistant"' +
        (assistantChecked ? " checked" : "") +
        " />" +
        "<span>" +
        "<strong>" +
        escapeHtml(t("assistantLabel")) +
        "</strong>" +
        '<small>' +
        escapeHtml(t("assistantHelp")) +
        "</small>" +
        "</span>" +
        "</label>" +
        "</div>" +
        '<div class="bm-consent-actions">' +
        '<button type="button" class="bm-consent-btn bm-consent-btn--ghost" data-bm-consent="back">' +
        escapeHtml(t("back")) +
        "</button>" +
        '<button type="button" class="bm-consent-btn bm-consent-btn--primary" data-bm-consent="save">' +
        escapeHtml(t("save")) +
        "</button>" +
        "</div>" +
        "</div>";
      return;
    }

    host.innerHTML =
      '<div class="bm-consent-card" role="dialog" aria-modal="true" aria-labelledby="bm-consent-title">' +
      '<h2 id="bm-consent-title" class="bm-consent-title">' +
      escapeHtml(t("title")) +
      "</h2>" +
      '<p class="bm-consent-intro">' +
      escapeHtml(t("intro")) +
      "</p>" +
      '<div class="bm-consent-actions bm-consent-actions--main">' +
      '<button type="button" class="bm-consent-btn bm-consent-btn--ghost" data-bm-consent="refuse">' +
      escapeHtml(t("refuse")) +
      "</button>" +
      '<button type="button" class="bm-consent-btn bm-consent-btn--secondary" data-bm-consent="customize">' +
      escapeHtml(t("customize")) +
      "</button>" +
      '<button type="button" class="bm-consent-btn bm-consent-btn--primary" data-bm-consent="accept-all">' +
      escapeHtml(t("acceptAll")) +
      "</button>" +
      "</div>" +
      "</div>";
  }

  function openSettings() {
    panelMode = "customize";
    render({ forceOpen: true });
  }

  prefs = readStored();
  window.BroodMinderConsent = {
    allows: allows,
    hasDecided: hasDecided,
    openSettings: openSettings,
    getPrefs: function () {
      return prefs
        ? { analytics: prefs.analytics, assistant: prefs.assistant }
        : null;
    },
  };

  function boot() {
    applyTrackers();
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
