var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
var u="//feed.mybroodminder.com/matomo/";
_paq.push(['setTrackerUrl', u+'matomo.php']);
_paq.push(['setSiteId', '4']);
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();


// Change language
var languageElement = document.querySelector('.md-select svg');
var lang = window.location.pathname.split('/')[1];
if (lang == '' || lang.length > 2) {
    lang = 'en';
}

// Update icon
languageElement.outerHTML = '<img src="/assets/images/flags/' + lang + '.jpg" width="20" height="20">'