/**
 * Ask BroodMinder — home hero chat + floating widget.
 * UI: en / fr / es (URL locale); other locales → English UI.
 * Answers: LLM follows the language of the user's question.
 */
(function () {
  "use strict";

  // Set at MkDocs build via ENABLE_DOC_ASSISTANT (injected in head.html / main.html).
  // Default OFF when unset — never invent Ask UI over the classic search bar.
  // When ON, show Ask immediately; API failures surface as an in-chat error message.
  var API_BASE = String(window.DOC_ASSISTANT_API || "").replace(/\/$/, "");
  var ENABLED = (function () {
    if (window.DOC_ASSISTANT_ENABLED == null || window.DOC_ASSISTANT_ENABLED === "") {
      return false;
    }
    var raw = String(window.DOC_ASSISTANT_ENABLED).trim().toLowerCase();
    return !(raw === "0" || raw === "false" || raw === "no" || raw === "off");
  })();

  var HISTORY_MAX_TURNS = 6;
  var HISTORY_MAX_CHARS = 1500;
  var STORAGE_KEY = "broodminder-doc-chat-v1";
  var THREADS_KEY = "broodminder-doc-chat-threads-v1";
  var CONSENT_KEY = "broodminder-doc-chat-consent";
  var SESSION_KEY = "broodminder-doc-chat-session";
  var MAX_THREADS = 8;
  // Assistant persistence consent comes from consent.js (BroodMinderConsent).

  var UI_STRINGS = {
    en: {
      title: "Ask BroodMinder",
      newChat: "New",
      newChatTitle: "Conversations",
      send: "Send",
      close: "Close",
      openLabel: "Open Ask BroodMinder",
      placeholder: "Ask BroodMinder…",
      welcome:
        "Hi! Ask me anything about the BroodMinder documentation. This assistant is in beta — a human is always available if you need one.",
      beta: "Beta",
      humanSupport:
        "Our priority is to help you as much as possible — a human expert is always available for your questions",
      slogan: "Remember... Every Hive Counts",
      sources: "Sources",
      thinking: "Thinking…",
      refused: "No matching documentation found.",
      searchPrefix: "Search: ",
      conversations: "Conversations",
      chatLabel: "Chat",
      startNew: "Start new conversation",
      back: "Back",
      unavailable: "Service temporarily unavailable.",
      unreachable: "Service temporarily unavailable.",
    },
    fr: {
      title: "Ask BroodMinder",
      newChat: "Nouveau",
      newChatTitle: "Conversations",
      send: "Envoyer",
      close: "Fermer",
      openLabel: "Ouvrir Ask BroodMinder",
      placeholder: "Demander à BroodMinder…",
      welcome:
        "Bonjour ! Posez-moi une question sur la documentation BroodMinder. Assistant en bêta — un humain reste toujours disponible si besoin.",
      beta: "Bêta",
      humanSupport:
        "Notre priorité reste de vous aider au mieux — un expert humain est toujours disponible pour vos questions",
      slogan: "Chaque ruche compte",
      sources: "Sources",
      thinking: "Réflexion…",
      refused: "Aucune documentation correspondante.",
      searchPrefix: "Recherche : ",
      conversations: "Conversations",
      chatLabel: "Discussion",
      startNew: "Nouvelle conversation",
      back: "Retour",
      unavailable: "Service momentanément indisponible.",
      unreachable: "Service momentanément indisponible.",
    },
    es: {
      title: "Ask BroodMinder",
      newChat: "Nuevo",
      newChatTitle: "Conversaciones",
      send: "Enviar",
      close: "Cerrar",
      openLabel: "Abrir Ask BroodMinder",
      placeholder: "Preguntar a BroodMinder…",
      welcome:
        "¡Hola! Pregúntame sobre la documentación de BroodMinder. Asistente en beta — siempre hay un humano disponible si lo necesitas.",
      beta: "Beta",
      humanSupport:
        "Nuestra prioridad es ayudarte lo mejor posible — un experto humano siempre está disponible para tus preguntas",
      slogan: "Cada colmena cuenta",
      sources: "Fuentes",
      thinking: "Pensando…",
      refused: "No se encontró documentación correspondiente.",
      searchPrefix: "Búsqueda: ",
      conversations: "Conversaciones",
      chatLabel: "Chat",
      startNew: "Nueva conversación",
      back: "Volver",
      unavailable: "Servicio temporalmente no disponible.",
      unreachable: "Servicio temporalmente no disponible.",
    },
  };

  var SUPPORT_EMAIL = "support@broodminder.com";

  function trustFooterHtml() {
    return (
      '<span class="ask-trust-human">' +
      escapeHtml(t("humanSupport")) +
      ' — <a href="mailto:' +
      SUPPORT_EMAIL +
      '">' +
      SUPPORT_EMAIL +
      "</a></span>" +
      '<span class="ask-trust-slogan">' +
      escapeHtml(t("slogan")) +
      "</span>"
    );
  }

  function applyTrustChrome(root) {
    if (!root) {
      return;
    }
    var betaEls = root.querySelectorAll("[data-ask-beta]");
    for (var i = 0; i < betaEls.length; i++) {
      betaEls[i].textContent = t("beta");
    }
    var trustEls = root.querySelectorAll("[data-ask-trust]");
    for (var j = 0; j < trustEls.length; j++) {
      trustEls[j].innerHTML = trustFooterHtml();
    }
  }

  function detectLang() {
    // Supports /fr/… (mkdocs serve) and /doc/fr/… (Apache under a prefix)
    var known = {
      en: 1,
      fr: 1,
      es: 1,
      it: 1,
      de: 1,
      ja: 1,
      nl: 1,
      nn: 1,
      pt: 1,
      ar: 1,
    };
    var parts = window.location.pathname.split("/");
    for (var i = 0; i < parts.length; i++) {
      if (known[parts[i]]) {
        return parts[i];
      }
    }
    return "en";
  }

  /** UI locale: only en / fr / es; everything else → en */
  function uiLang() {
    var lang = detectLang();
    if (lang === "fr" || lang === "es") {
      return lang;
    }
    return "en";
  }

  function t(key) {
    var pack = UI_STRINGS[uiLang()] || UI_STRINGS.en;
    return pack[key] || UI_STRINGS.en[key] || key;
  }

  function randomUUID() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (symbol) {
      var random = (Math.random() * 16) | 0;
      var value = symbol === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  }

  /** Assistant ID / summary persistence — driven by site-wide consent banner. */
  function assistantConsentAccepted() {
    if (window.BroodMinderConsent && typeof window.BroodMinderConsent.allows === "function") {
      return window.BroodMinderConsent.allows("assistant") === true;
    }
    try {
      return localStorage.getItem(CONSENT_KEY) === "accepted";
    } catch (err) {
      return false;
    }
  }

  function sessionId() {
    if (!assistantConsentAccepted()) {
      return "";
    }
    try {
      var existing = localStorage.getItem(SESSION_KEY);
      if (existing) {
        return existing;
      }
      var created = randomUUID();
      localStorage.setItem(SESSION_KEY, created);
      return created;
    } catch (err) {
      return "";
    }
  }

  function ensureConversationId(thread) {
    if (!thread) {
      return "";
    }
    if (!thread.conversationId) {
      thread.conversationId = randomUUID();
    }
    return thread.conversationId;
  }

  function askPayload(question, docLang, history, thread) {
    var body = {
      question: question,
      lang: docLang,
      history: history,
    };
    if (!assistantConsentAccepted()) {
      return body;
    }
    var sid = sessionId();
    var cid = ensureConversationId(thread);
    if (!sid || !cid) {
      return body;
    }
    body.session_id = sid;
    body.conversation_id = cid;
    return body;
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatBotText(text) {
    var html = escapeHtml(text);
    html = html.replace(/(https?:\/\/[^\s<]+)/g, function (url) {
      var clean = url.replace(/[.,;:)\]}]+$/g, "");
      var trail = url.slice(clean.length);
      return (
        '<a class="doc-chat-inline-link" href="' +
        clean +
        '" target="_blank" rel="noopener noreferrer">' +
        clean +
        "</a>" +
        trail
      );
    });
    html = html.replace(
      /\b([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g,
      function (email) {
        return (
          '<a class="doc-chat-inline-link" href="mailto:' +
          email +
          '">' +
          email +
          "</a>"
        );
      }
    );
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return html;
  }

  function clipHistory(history) {
    var clipped = history.slice(-HISTORY_MAX_TURNS);
    while (clipped.length && historyChars(clipped) > HISTORY_MAX_CHARS) {
      clipped.shift();
    }
    return clipped;
  }

  function historyChars(history) {
    var total = 0;
    for (var i = 0; i < history.length; i++) {
      total += (history[i].content || "").length;
    }
    return total;
  }

  function linkifySources(sources) {
    if (!sources || !sources.length) {
      return "";
    }
    var items = sources
      .slice(0, 3)
      .map(function (src) {
        var label = escapeHtml(src.breadcrumb || src.file || src.url);
        var href = escapeHtml(src.url || "#");
        return (
          '<a class="doc-chat-source-link" href="' + href + '">' + label + "</a>"
        );
      })
      .join("");
    return (
      '<div class="doc-chat-sources"><strong>' +
      escapeHtml(t("sources")) +
      "</strong>" +
      items +
      "</div>"
    );
  }

  function loadStoredState() {
    try {
      var raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function clearStoredState() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      /* ignore */
    }
  }

  function bindChat(opts) {
    var messages = opts.messages;
    var form = opts.form;
    var input = opts.input;
    var sendBtn = opts.sendBtn;
    var statusEl = opts.statusEl;
    var newBtn = opts.newBtn;
    var busy = false;
    var history = [];
    var transcript = [];
    var docLang = detectLang();
    var conversation = { conversationId: randomUUID() };

    function persistState(forceOpen) {
      try {
        var isOpen =
          typeof forceOpen === "boolean"
            ? forceOpen
            : opts.getIsOpen
              ? opts.getIsOpen()
              : true;
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            history: history,
            transcript: transcript,
            status: statusEl.textContent || "",
            isOpen: isOpen,
          })
        );
      } catch (err) {
        /* ignore */
      }
    }

    function scrollMessagesToEnd() {
      messages.scrollTop = messages.scrollHeight;
      requestAnimationFrame(function () {
        messages.scrollTop = messages.scrollHeight;
        setTimeout(function () {
          messages.scrollTop = messages.scrollHeight;
        }, 50);
      });
    }

    function setStatus(text) {
      statusEl.textContent = text || "";
      persistState();
    }

    function appendMessage(role, html, record) {
      var el = document.createElement("div");
      el.className = "doc-chat-msg doc-chat-msg--" + role;
      el.innerHTML = html;
      messages.appendChild(el);
      scrollMessagesToEnd();
      if (record) {
        transcript.push(record);
        persistState();
      }
    }

    function renderTranscript() {
      messages.innerHTML = "";
      if (!transcript.length) {
        appendMessage("bot", escapeHtml(t("welcome")));
        return;
      }
      transcript.forEach(function (item) {
        if (item.role === "user") {
          appendMessage("user", escapeHtml(item.content));
        } else if (item.role === "bot") {
          appendMessage(
            "bot",
            formatBotText(item.content) + linkifySources(item.sources || [])
          );
        } else if (item.role === "error") {
          appendMessage("error", escapeHtml(item.content));
        }
      });
      scrollMessagesToEnd();
    }

    function showWelcome() {
      transcript = [];
      messages.innerHTML = "";
      appendMessage("bot", escapeHtml(t("welcome")));
    }

    function resetChat() {
      history = [];
      transcript = [];
      conversation = { conversationId: randomUUID() };
      clearStoredState();
      showWelcome();
      setStatus("");
      input.focus();
    }

    function pushHistory(role, content) {
      history.push({ role: role, content: content });
      history = clipHistory(history);
      persistState();
    }

    var stored = loadStoredState();
    if (stored && (stored.history || stored.transcript)) {
      history = clipHistory(stored.history || []);
      transcript = Array.isArray(stored.transcript) ? stored.transcript : [];
      renderTranscript();
      statusEl.textContent = stored.status || "";
      if (opts.setIsOpenVisual) {
        var shouldOpen =
          opts.defaultOpenOnRestore || stored.isOpen === true;
        opts.setIsOpenVisual(shouldOpen);
        if (shouldOpen) {
          scrollMessagesToEnd();
        }
      } else {
        scrollMessagesToEnd();
      }
    } else {
      showWelcome();
      if (opts.setIsOpenVisual && opts.defaultOpenOnRestore) {
        opts.setIsOpenVisual(true);
      }
    }

    if (newBtn) {
      newBtn.addEventListener("click", resetChat);
    }

    messages.addEventListener("click", function (event) {
      var link = event.target.closest("a.doc-chat-source-link");
      if (!link) {
        return;
      }
      persistState(true);
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        form.requestSubmit();
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (busy) {
        return;
      }
      var question = (input.value || "").trim();
      if (!question) {
        return;
      }

      appendMessage("user", escapeHtml(question), {
        role: "user",
        content: question,
      });
      input.value = "";
      busy = true;
      sendBtn.disabled = true;
      setStatus(t("thinking"));

      var historyToSend = clipHistory(history.slice());

      fetch(API_BASE.replace(/\/$/, "") + "/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          askPayload(question, docLang, historyToSend, conversation)
        ),
      })
        .then(function (response) {
          return response.json().then(function (data) {
            return { ok: response.ok, data: data };
          });
        })
        .then(function (result) {
          if (!result.ok || result.data.error) {
            var errText = result.data.error || t("unavailable");
            appendMessage("error", escapeHtml(errText), {
              role: "error",
              content: errText,
            });
            return;
          }
          var answerText = result.data.answer || "";
          var sources = result.data.sources || [];
          appendMessage(
            "bot",
            formatBotText(answerText) + linkifySources(sources),
            { role: "bot", content: answerText, sources: sources }
          );

          pushHistory("user", question);
          pushHistory("assistant", answerText);

          if (result.data.refused) {
            setStatus(t("refused"));
          } else if (result.data.rewritten_query) {
            setStatus(t("searchPrefix") + result.data.rewritten_query);
          } else {
            setStatus("");
          }
        })
        .catch(function () {
          var errText = t("unreachable");
          appendMessage("error", escapeHtml(errText), {
            role: "error",
            content: errText,
          });
          setStatus("");
        })
        .finally(function () {
          busy = false;
          sendBtn.disabled = false;
          input.focus();
        });
    });

    return {
      persistState: persistState,
      scrollMessagesToEnd: scrollMessagesToEnd,
    };
  }

  function newThreadId() {
    return "t" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  }

  function nextThreadNumber(threads) {
    var max = 0;
    for (var i = 0; i < (threads || []).length; i++) {
      var n = threads[i].number;
      if (typeof n === "number" && n > max) {
        max = n;
      }
    }
    return max + 1;
  }

  /** Numéro stable 1…N par fil (ne suit pas le tri « récent »). */
  function ensureThreadNumbers(state) {
    if (!state || !Array.isArray(state.threads)) {
      return state;
    }
    var max = 0;
    state.threads.forEach(function (th) {
      if (typeof th.number === "number" && th.number > max) {
        max = th.number;
      }
    });
    state.threads.forEach(function (th) {
      if (typeof th.number !== "number" || th.number < 1) {
        max += 1;
        th.number = max;
      }
    });
    return state;
  }

  function threadsByNumber(threads) {
    return (threads || []).slice().sort(function (a, b) {
      var na = typeof a.number === "number" ? a.number : 0;
      var nb = typeof b.number === "number" ? b.number : 0;
      if (na !== nb) {
        return na - nb;
      }
      return (a.updatedAt || 0) - (b.updatedAt || 0);
    });
  }

  function loadThreadsState() {
    try {
      var raw = sessionStorage.getItem(THREADS_KEY);
      if (!raw) {
        return null;
      }
      return ensureThreadNumbers(JSON.parse(raw));
    } catch (err) {
      return null;
    }
  }

  function saveThreadsState(state) {
    try {
      sessionStorage.setItem(THREADS_KEY, JSON.stringify(state));
    } catch (err) {
      /* ignore */
    }
  }

  function threadTitleFromTranscript(transcript) {
    for (var i = 0; i < transcript.length; i++) {
      if (transcript[i].role === "user" && transcript[i].content) {
        var text = String(transcript[i].content).trim();
        return text.length > 28 ? text.slice(0, 28) + "…" : text;
      }
    }
    return t("chatLabel");
  }

  /**
   * EN home already has the hero markup. FR/ES/… still ship the legacy
   * white search bar — upgrade the DOM so Ask BroodMinder works on all locales.
   */
  function ensureHomeChatMarkup() {
    if (document.getElementById("ask-broodminder-home")) {
      return true;
    }
    var container = document.querySelector(".search-container");
    if (!container) {
      return false;
    }
    var legacy = container.querySelector("#search-form, .search-bar");
    var mount = document.createElement("div");
    mount.id = "ask-broodminder-home";
    mount.className = "ask-home";
    mount.innerHTML =
      '<div class="ask-home-stage">' +
      '<div class="ask-home-toolbar">' +
      '<div class="ask-home-brand">' +
      '<p class="ask-home-eyebrow" id="ask-home-title"></p>' +
      '<span class="ask-beta" data-ask-beta></span>' +
      "</div>" +
      '<button type="button" id="ask-home-new" class="ask-home-new"></button>' +
      "</div>" +
      '<div class="ask-home-glass">' +
      '<div id="ask-home-messages" class="ask-home-messages is-empty" aria-live="polite"></div>' +
      '<div id="ask-home-status" class="ask-home-status"></div>' +
      '<form id="ask-home-form" class="ask-home-composer">' +
      '<textarea id="ask-home-input" rows="1" required></textarea>' +
      '<button type="submit" id="ask-home-send" class="ask-home-send">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.4 20.6 21 12 3.4 3.4 3 10.3 14 12 3 13.7z"/></svg>' +
      "</button>" +
      "</form>" +
      '<p class="ask-trust" data-ask-trust></p>' +
      "</div>" +
      '<div id="ask-home-threads" class="ask-home-threads"></div>' +
      "</div>";
    if (legacy) {
      container.insertBefore(mount, legacy);
      legacy.remove();
    } else {
      container.insertBefore(mount, container.firstChild);
    }
    return true;
  }

  function ensureHomeTrustNodes(home) {
    if (!home) {
      return;
    }
    var titleEl = document.getElementById("ask-home-title");
    if (titleEl && !home.querySelector("[data-ask-beta]")) {
      var brand = titleEl.closest(".ask-home-brand");
      if (!brand) {
        brand = document.createElement("div");
        brand.className = "ask-home-brand";
        titleEl.parentNode.insertBefore(brand, titleEl);
        brand.appendChild(titleEl);
      }
      var beta = document.createElement("span");
      beta.className = "ask-beta";
      beta.setAttribute("data-ask-beta", "");
      brand.appendChild(beta);
    }
    var glass = home.querySelector(".ask-home-glass");
    if (glass && !home.querySelector("[data-ask-trust]")) {
      var trust = document.createElement("p");
      trust.className = "ask-trust";
      trust.setAttribute("data-ask-trust", "");
      glass.appendChild(trust);
    }
  }

  function initHomeChat() {
    if (!ensureHomeChatMarkup()) {
      return false;
    }
    var home = document.getElementById("ask-broodminder-home");
    if (!home) {
      return false;
    }

    ensureHomeTrustNodes(home);

    var titleEl = document.getElementById("ask-home-title");
    var newBtn = document.getElementById("ask-home-new");
    var messages = document.getElementById("ask-home-messages");
    var form = document.getElementById("ask-home-form");
    var input = document.getElementById("ask-home-input");
    var sendBtn = document.getElementById("ask-home-send");
    var statusEl = document.getElementById("ask-home-status");
    var threadsEl = document.getElementById("ask-home-threads");
    var docLang = detectLang();
    var busy = false;

    applyTrustChrome(home);

    if (titleEl) {
      titleEl.textContent = t("title");
    }
    if (newBtn) {
      newBtn.textContent = t("newChat");
      newBtn.title = t("newChatTitle");
    }
    if (input) {
      input.placeholder = t("placeholder");
    }
    if (sendBtn) {
      sendBtn.setAttribute("aria-label", t("send"));
    }
    if (threadsEl) {
      threadsEl.setAttribute("aria-label", t("conversations"));
    }

    var state = loadThreadsState();
    if (!state || !Array.isArray(state.threads) || !state.threads.length) {
      var firstId = newThreadId();
      state = {
        activeId: firstId,
        threads: [
          {
            id: firstId,
            number: 1,
            conversationId: randomUUID(),
            title: t("chatLabel"),
            history: [],
            transcript: [],
            status: "",
            updatedAt: Date.now(),
          },
        ],
      };
    }
    ensureThreadNumbers(state);

    function activeThread() {
      for (var i = 0; i < state.threads.length; i++) {
        if (state.threads[i].id === state.activeId) {
          return state.threads[i];
        }
      }
      return state.threads[0];
    }

    function persist(opts) {
      var touchActivity = !opts || opts.touchActivity !== false;
      var thread = activeThread();
      if (thread) {
        if (touchActivity) {
          thread.updatedAt = Date.now();
        }
        if (thread.transcript && thread.transcript.length) {
          thread.title = threadTitleFromTranscript(thread.transcript);
        }
      }
      saveThreadsState(state);
      // Keep single-chat key in sync for doc pages after source click
      try {
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            history: thread ? thread.history : [],
            transcript: thread ? thread.transcript : [],
            status: thread ? thread.status : "",
            isOpen: true,
          })
        );
      } catch (err) {
        /* ignore */
      }
    }

    function scrollMessagesToEnd() {
      messages.scrollTop = messages.scrollHeight;
      requestAnimationFrame(function () {
        messages.scrollTop = messages.scrollHeight;
      });
    }

    /** Show the start of a long bot answer (not only the bottom). */
    function revealMessage(el) {
      if (!el) {
        scrollMessagesToEnd();
        return;
      }
      requestAnimationFrame(function () {
        var top = el.offsetTop - 8;
        messages.scrollTop = Math.max(0, top);
      });
    }

    function setStatus(text) {
      var thread = activeThread();
      statusEl.textContent = text || "";
      if (thread) {
        thread.status = text || "";
      }
      persist();
    }

    function appendMessage(role, html, record, opts) {
      var el = document.createElement("div");
      el.className = "doc-chat-msg doc-chat-msg--" + role;
      if (role === "welcome") {
        el.className += " doc-chat-msg--bot";
      }
      el.innerHTML = html;
      messages.appendChild(el);
      if (opts && opts.revealStart) {
        revealMessage(el);
      } else {
        scrollMessagesToEnd();
      }
      if (record) {
        var thread = activeThread();
        thread.transcript.push(record);
        messages.classList.remove("is-empty");
        persist();
        renderThreadBubbles();
      }
      return el;
    }

    function renderTranscript() {
      var thread = activeThread();
      var transcript = thread.transcript || [];
      messages.innerHTML = "";
      // Always bind status to the active conversation only
      statusEl.textContent = thread.status || "";
      if (!transcript.length) {
        messages.classList.add("is-empty");
        appendMessage("welcome", escapeHtml(t("welcome")));
        return;
      }
      messages.classList.remove("is-empty");
      transcript.forEach(function (item) {
        if (item.role === "user") {
          appendMessage("user", escapeHtml(item.content));
        } else if (item.role === "bot") {
          appendMessage(
            "bot",
            formatBotText(item.content) + linkifySources(item.sources || [])
          );
        } else if (item.role === "error") {
          appendMessage("error", escapeHtml(item.content));
        }
      });
      scrollMessagesToEnd();
    }

    function renderThreadBubbles() {
      if (!threadsEl) {
        return;
      }
      threadsEl.innerHTML = "";
      var threads = threadsByNumber(state.threads);
      threads.forEach(function (thread) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className =
          "ask-home-thread" +
          (thread.id === state.activeId ? " is-active" : "");
        btn.title = thread.title || t("chatLabel");

        var label = document.createElement("span");
        label.className = "ask-home-thread-label";
        label.textContent = thread.title || t("chatLabel");

        var dot = document.createElement("span");
        dot.className = "ask-home-thread-dot";
        dot.textContent = String(thread.number || "");

        btn.appendChild(label);
        btn.appendChild(dot);
        btn.addEventListener("click", function () {
          if (thread.id === state.activeId) {
            return;
          }
          state.activeId = thread.id;
          persist({ touchActivity: false });
          renderTranscript();
          renderThreadBubbles();
          input.focus();
        });
        threadsEl.appendChild(btn);
      });
    }

    function startNewConversation() {
      var current = activeThread();
      // Drop empty current thread to avoid clutter
      if (
        current &&
        (!current.transcript || !current.transcript.length) &&
        state.threads.length > 1
      ) {
        state.threads = state.threads.filter(function (th) {
          return th.id !== current.id;
        });
      }

      var id = newThreadId();
      state.threads.unshift({
        id: id,
        number: nextThreadNumber(state.threads),
        conversationId: randomUUID(),
        title: t("chatLabel"),
        history: [],
        transcript: [],
        status: "",
        updatedAt: Date.now(),
      });
      if (state.threads.length > MAX_THREADS) {
        state.threads = state.threads.slice(0, MAX_THREADS);
      }
      state.activeId = id;
      statusEl.textContent = "";
      persist();
      renderTranscript();
      renderThreadBubbles();
      input.focus();
    }

    newBtn.addEventListener("click", startNewConversation);

    messages.addEventListener("click", function (event) {
      var link = event.target.closest("a.doc-chat-source-link");
      if (!link) {
        return;
      }
      persist();
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        form.requestSubmit();
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (busy) {
        return;
      }
      var question = (input.value || "").trim();
      if (!question) {
        return;
      }

      var thread = activeThread();
      appendMessage("user", escapeHtml(question), {
        role: "user",
        content: question,
      });
      input.value = "";
      busy = true;
      sendBtn.disabled = true;
      setStatus(t("thinking"));

      var historyToSend = clipHistory((thread.history || []).slice());
      var payload = askPayload(question, docLang, historyToSend, thread);
      if (payload.session_id) {
        persist();
      }

      fetch(API_BASE.replace(/\/$/, "") + "/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          return response.json().then(function (data) {
            return { ok: response.ok, data: data };
          });
        })
        .then(function (result) {
          thread = activeThread();
          if (!result.ok || result.data.error) {
            var errText = result.data.error || t("unavailable");
            appendMessage("error", escapeHtml(errText), {
              role: "error",
              content: errText,
            });
            return;
          }
          var answerText = result.data.answer || "";
          var sources = result.data.sources || [];
          appendMessage(
            "bot",
            formatBotText(answerText) + linkifySources(sources),
            { role: "bot", content: answerText, sources: sources },
            { revealStart: true }
          );

          thread.history = clipHistory(
            (thread.history || [])
              .concat([
                { role: "user", content: question },
                { role: "assistant", content: answerText },
              ])
          );
          persist();
          renderThreadBubbles();

          if (result.data.refused) {
            setStatus(t("refused"));
          } else if (result.data.rewritten_query) {
            setStatus(t("searchPrefix") + result.data.rewritten_query);
          } else {
            setStatus("");
          }
        })
        .catch(function () {
          var errText = t("unreachable");
          appendMessage("error", escapeHtml(errText), {
            role: "error",
            content: errText,
          });
          setStatus("");
        })
        .finally(function () {
          busy = false;
          sendBtn.disabled = false;
          input.focus();
        });
    });

    renderTranscript();
    renderThreadBubbles();
    return true;
  }

  function initFloatingChat() {
    if (document.getElementById("doc-chat-root")) {
      return;
    }

    var root = document.createElement("div");
    root.id = "doc-chat-root";
    root.innerHTML =
      '<button type="button" id="doc-chat-toggle" aria-label="' +
      escapeHtml(t("openLabel")) +
      '" title="' +
      escapeHtml(t("title")) +
      '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2zm3 5v2h10V9H7zm0 4v2h7v-2H7z"/></svg>' +
      "</button>" +
      '<div id="doc-chat-panel" role="dialog" aria-label="' +
      escapeHtml(t("title")) +
      '">' +
      '<div id="doc-chat-header">' +
      '<div class="doc-chat-brand">' +
      "<h2>" +
      escapeHtml(t("title")) +
      "</h2>" +
      '<span class="ask-beta ask-beta--on-green" data-ask-beta></span>' +
      "</div>" +
      '<div id="doc-chat-threads" aria-label="' +
      escapeHtml(t("conversations")) +
      '"></div>' +
      '<div id="doc-chat-header-actions">' +
      '<button type="button" id="doc-chat-new" title="' +
      escapeHtml(t("newChatTitle")) +
      '">' +
      escapeHtml(t("newChat")) +
      "</button>" +
      '<button type="button" id="doc-chat-close" aria-label="' +
      escapeHtml(t("close")) +
      '">×</button>' +
      "</div>" +
      "</div>" +
      '<div id="doc-chat-messages"></div>' +
      '<div id="doc-chat-status"></div>' +
      '<form id="doc-chat-form">' +
      '<textarea id="doc-chat-input" rows="1" placeholder="' +
      escapeHtml(t("placeholder")) +
      '" required></textarea>' +
      '<button type="submit" id="doc-chat-send">' +
      escapeHtml(t("send")) +
      "</button>" +
      "</form>" +
      '<p class="ask-trust ask-trust--panel" data-ask-trust></p>' +
      '<div id="doc-chat-overlay" aria-hidden="true">' +
      '<div id="doc-chat-overlay-header">' +
      "<h3>" +
      escapeHtml(t("conversations")) +
      "</h3>" +
      '<button type="button" id="doc-chat-overlay-back">' +
      escapeHtml(t("back")) +
      "</button>" +
      "</div>" +
      '<div id="doc-chat-overlay-list"></div>' +
      '<button type="button" id="doc-chat-overlay-new">' +
      escapeHtml(t("startNew")) +
      "</button>" +
      "</div>" +
      "</div>";

    document.body.appendChild(root);
    applyTrustChrome(root);

    var toggle = document.getElementById("doc-chat-toggle");
    var closeBtn = document.getElementById("doc-chat-close");
    var newBtn = document.getElementById("doc-chat-new");
    var messages = document.getElementById("doc-chat-messages");
    var form = document.getElementById("doc-chat-form");
    var input = document.getElementById("doc-chat-input");
    var sendBtn = document.getElementById("doc-chat-send");
    var statusEl = document.getElementById("doc-chat-status");
    var overlay = document.getElementById("doc-chat-overlay");
    var overlayList = document.getElementById("doc-chat-overlay-list");
    var overlayBack = document.getElementById("doc-chat-overlay-back");
    var overlayNew = document.getElementById("doc-chat-overlay-new");
    var threadsEl = document.getElementById("doc-chat-threads");
    var docLang = detectLang();
    var busy = false;

    var state = loadThreadsState();
    if (!state || !Array.isArray(state.threads) || !state.threads.length) {
      // Migrate single-chat session if present
      var legacy = loadStoredState();
      var firstId = newThreadId();
      var seed = {
        id: firstId,
        number: 1,
        conversationId: randomUUID(),
        title: t("chatLabel"),
        history: [],
        transcript: [],
        status: "",
        updatedAt: Date.now(),
      };
      if (legacy && (legacy.history || legacy.transcript)) {
        seed.history = legacy.history || [];
        seed.transcript = legacy.transcript || [];
        seed.status = legacy.status || "";
        seed.title = threadTitleFromTranscript(seed.transcript);
      }
      state = { activeId: firstId, threads: [seed] };
    }
    ensureThreadNumbers(state);

    function activeThread() {
      for (var i = 0; i < state.threads.length; i++) {
        if (state.threads[i].id === state.activeId) {
          return state.threads[i];
        }
      }
      return state.threads[0];
    }

    function persist(opts) {
      var touchActivity = !opts || opts.touchActivity !== false;
      var thread = activeThread();
      if (thread) {
        if (touchActivity) {
          thread.updatedAt = Date.now();
        }
        if (thread.transcript && thread.transcript.length) {
          thread.title = threadTitleFromTranscript(thread.transcript);
        }
      }
      saveThreadsState(state);
      try {
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            history: thread ? thread.history : [],
            transcript: thread ? thread.transcript : [],
            status: thread ? thread.status : "",
            isOpen: root.classList.contains("is-open"),
          })
        );
      } catch (err) {
        /* ignore */
      }
    }

    function setOpen(isOpen) {
      root.classList.toggle("is-open", isOpen);
      if (!isOpen) {
        root.classList.remove("is-threads");
        overlay.setAttribute("aria-hidden", "true");
      }
      persist();
      if (isOpen) {
        input.focus();
      }
    }

    function setThreadsOpen(isThreads) {
      root.classList.toggle("is-threads", isThreads);
      overlay.setAttribute("aria-hidden", isThreads ? "false" : "true");
      if (isThreads) {
        renderOverlayList();
      }
    }

    function scrollMessagesToEnd() {
      messages.scrollTop = messages.scrollHeight;
      requestAnimationFrame(function () {
        messages.scrollTop = messages.scrollHeight;
      });
    }

    function setStatus(text) {
      var thread = activeThread();
      statusEl.textContent = text || "";
      if (thread) {
        thread.status = text || "";
      }
      persist();
    }

    function appendMessage(role, html, record) {
      var el = document.createElement("div");
      el.className = "doc-chat-msg doc-chat-msg--" + role;
      el.innerHTML = html;
      messages.appendChild(el);
      scrollMessagesToEnd();
      if (record) {
        activeThread().transcript.push(record);
        persist();
      }
    }

    function renderTranscript() {
      var thread = activeThread();
      var transcript = thread.transcript || [];
      messages.innerHTML = "";
      if (!transcript.length) {
        appendMessage("bot", escapeHtml(t("welcome")));
        statusEl.textContent = "";
        return;
      }
      transcript.forEach(function (item) {
        if (item.role === "user") {
          appendMessage("user", escapeHtml(item.content));
        } else if (item.role === "bot") {
          appendMessage(
            "bot",
            formatBotText(item.content) + linkifySources(item.sources || [])
          );
        } else if (item.role === "error") {
          appendMessage("error", escapeHtml(item.content));
        }
      });
      statusEl.textContent = thread.status || "";
      scrollMessagesToEnd();
    }

    function renderOverlayList() {
      overlayList.innerHTML = "";
      var threads = threadsByNumber(state.threads);
      threads.forEach(function (thread) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className =
          "doc-chat-thread-item" +
          (thread.id === state.activeId ? " is-active" : "");
        btn.innerHTML =
          '<span class="doc-chat-thread-index">' +
          (thread.number || "") +
          '</span><span class="doc-chat-thread-title">' +
          escapeHtml(thread.title || t("chatLabel")) +
          "</span>";
        btn.addEventListener("click", function () {
          state.activeId = thread.id;
          persist({ touchActivity: false });
          renderTranscript();
          renderThreadBubbles();
          setThreadsOpen(false);
          input.focus();
        });
        overlayList.appendChild(btn);
      });
    }

    function renderThreadBubbles() {
      if (!threadsEl) {
        return;
      }
      threadsEl.innerHTML = "";
      var byNumber = threadsByNumber(state.threads);
      var stacked = byNumber.length > 3;
      // En pile : actif devant (position), numéro affiché reste stable
      var threads = stacked
        ? byNumber.slice().sort(function (a, b) {
            if (a.id === state.activeId) {
              return -1;
            }
            if (b.id === state.activeId) {
              return 1;
            }
            return (a.number || 0) - (b.number || 0);
          })
        : byNumber;
      threadsEl.classList.toggle("is-stacked", stacked);
      threadsEl.style.setProperty("--thread-count", String(threads.length));
      threads.forEach(function (thread, index) {
        var isActive = thread.id === state.activeId;
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className =
          "doc-chat-fab-thread" + (isActive ? " is-active" : "");
        btn.style.zIndex = String(threads.length - index);
        btn.title = thread.title || t("chatLabel");
        btn.setAttribute("data-index", String(index));

        var label = document.createElement("span");
        label.className = "doc-chat-fab-thread-label";
        label.textContent = thread.title || t("chatLabel");

        var dot = document.createElement("span");
        dot.className = "doc-chat-fab-thread-dot";
        dot.textContent = String(thread.number || "");

        btn.appendChild(dot);
        btn.appendChild(label);
        btn.addEventListener("click", function () {
          if (thread.id === state.activeId) {
            return;
          }
          state.activeId = thread.id;
          persist({ touchActivity: false });
          renderTranscript();
          renderThreadBubbles();
          setThreadsOpen(false);
          input.focus();
        });
        threadsEl.appendChild(btn);
      });
    }

    function startNewConversation() {
      var current = activeThread();
      if (
        current &&
        (!current.transcript || !current.transcript.length) &&
        state.threads.length > 1
      ) {
        state.threads = state.threads.filter(function (th) {
          return th.id !== current.id;
        });
      }
      var id = newThreadId();
      state.threads.unshift({
        id: id,
        number: nextThreadNumber(state.threads),
        conversationId: randomUUID(),
        title: t("chatLabel"),
        history: [],
        transcript: [],
        status: "",
        updatedAt: Date.now(),
      });
      if (state.threads.length > MAX_THREADS) {
        state.threads = state.threads.slice(0, MAX_THREADS);
      }
      state.activeId = id;
      statusEl.textContent = "";
      persist();
      renderTranscript();
      renderThreadBubbles();
      setThreadsOpen(false);
      input.focus();
    }

    toggle.addEventListener("click", function () {
      setOpen(!root.classList.contains("is-open"));
      if (root.classList.contains("is-open")) {
        renderThreadBubbles();
        scrollMessagesToEnd();
      }
    });
    closeBtn.addEventListener("click", function () {
      setOpen(false);
    });
    newBtn.addEventListener("click", function () {
      setThreadsOpen(true);
    });
    overlayBack.addEventListener("click", function () {
      setThreadsOpen(false);
    });
    overlayNew.addEventListener("click", startNewConversation);

    messages.addEventListener("click", function (event) {
      var link = event.target.closest("a.doc-chat-source-link");
      if (!link) {
        return;
      }
      persist();
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        form.requestSubmit();
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (busy) {
        return;
      }
      var question = (input.value || "").trim();
      if (!question) {
        return;
      }

      var thread = activeThread();
      appendMessage("user", escapeHtml(question), {
        role: "user",
        content: question,
      });
      input.value = "";
      busy = true;
      sendBtn.disabled = true;
      setStatus(t("thinking"));

      var historyToSend = clipHistory((thread.history || []).slice());
      var payload = askPayload(question, docLang, historyToSend, thread);
      if (payload.session_id) {
        persist();
      }

      fetch(API_BASE.replace(/\/$/, "") + "/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          return response.json().then(function (data) {
            return { ok: response.ok, data: data };
          });
        })
        .then(function (result) {
          thread = activeThread();
          if (!result.ok || result.data.error) {
            var errText = result.data.error || t("unavailable");
            appendMessage("error", escapeHtml(errText), {
              role: "error",
              content: errText,
            });
            return;
          }
          var answerText = result.data.answer || "";
          var sources = result.data.sources || [];
          appendMessage(
            "bot",
            formatBotText(answerText) + linkifySources(sources),
            { role: "bot", content: answerText, sources: sources }
          );

          thread.history = clipHistory(
            (thread.history || []).concat([
              { role: "user", content: question },
              { role: "assistant", content: answerText },
            ])
          );
          persist();
          renderThreadBubbles();

          if (result.data.refused) {
            setStatus(t("refused"));
          } else if (result.data.rewritten_query) {
            setStatus(t("searchPrefix") + result.data.rewritten_query);
          } else {
            setStatus("");
          }
        })
        .catch(function () {
          var errText = t("unreachable");
          appendMessage("error", escapeHtml(errText), {
            role: "error",
            content: errText,
          });
          setStatus("");
        })
        .finally(function () {
          busy = false;
          sendBtn.disabled = false;
          input.focus();
        });
    });

    var stored = loadStoredState();
    renderTranscript();
    renderThreadBubbles();
    if (stored && stored.isOpen) {
      setOpen(true);
      scrollMessagesToEnd();
    }
  }

  function relocateMaterialSearch() {
    var placeholder = document.querySelector("#search-form");
    var search = document.querySelector(".md-search");
    if (!placeholder || !search) {
      return;
    }
    var positionTop = placeholder.offsetTop;
    var positionLeft = placeholder.offsetLeft;
    var width = placeholder.clientWidth;
    search.style.cssText =
      "position: absolute !important; top: " +
      positionTop +
      "px !important; left: " +
      positionLeft +
      "px !important; width: " +
      width +
      "px !important; display: block !important;";
  }

  function restoreClassicSearch() {
    document.documentElement.classList.remove("ask-live");
    var home = document.getElementById("ask-broodminder-home");
    if (home) {
      home.remove();
    }
    var root = document.getElementById("doc-chat-root");
    if (root) {
      root.remove();
    }
    var container = document.querySelector(".search-container");
    if (!container) {
      return;
    }
    if (!document.getElementById("search-form")) {
      var input = document.createElement("input");
      input.type = "text";
      input.className = "search-bar";
      input.id = "search-form";
      var mobile = document.getElementById("mobileScreen");
      if (mobile) {
        container.insertBefore(input, mobile);
      } else {
        container.insertBefore(input, container.firstChild);
      }
    }
    relocateMaterialSearch();
    window.addEventListener("resize", relocateMaterialSearch);
  }

  function markAskLive() {
    document.documentElement.classList.add("ask-live");
    var home = document.getElementById("ask-broodminder-home");
    if (home) {
      home.hidden = false;
    }
  }

  function init() {
    if (!ENABLED) {
      // Back to master home search when Ask BroodMinder is off
      restoreClassicSearch();
      return;
    }
    // ENABLE_DOC_ASSISTANT alone decides visibility; API errors show in-chat.
    markAskLive();
    if (initHomeChat()) {
      return;
    }
    initFloatingChat();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
