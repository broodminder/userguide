// Change language
var languageElement = document.querySelector('.md-select svg');
var lang = window.location.pathname.split('/')[1];
if (lang == '' || lang.length > 2) {
    lang = 'en';
}

// Update icon
languageElement.outerHTML = '<img src="/assets/images/flags/' + lang + '.jpg" width="20" height="20">'