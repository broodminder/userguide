// Matomo / analytics trackers are started by consent.js after opt-in.

// Change language flag icon
var languageElement = document.querySelector(".md-select svg");
var lang = window.location.pathname.split("/")[1];
if (lang == "" || lang.length > 2) {
  lang = "en";
}

if (languageElement) {
  languageElement.outerHTML =
    '<img src="/assets/images/flags/' + lang + '.jpg" width="20" height="20">';
}
