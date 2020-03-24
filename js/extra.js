let nodemcu = nodemcu || {};
(function () {
  'use strict';
  let languageCodeToNameMap = {EN: 'English', DE: 'Deutsch'};
  let defaultLanguageCode = 'EN';

  $(document).ready(function () {
    hideNavigationForAllButSelectedLanguage();
  });

  function hideNavigationForAllButSelectedLanguage() {
    // URL is like http://host/EN/build/ -> extract 'EN'
    let selectedLanguageCode = window.location.pathname.substr(1, 2);
    if (!selectedLanguageCode) {
      selectedLanguageCode = defaultLanguageCode;
    }
    let selectedLanguageName = languageCodeToNameMap[selectedLanguageCode];
    $('.subnav li span').not(':contains(' + selectedLanguageName + ')').each(function (index) {
      $(this).parent().parent().hide();
    });
  }
}());
