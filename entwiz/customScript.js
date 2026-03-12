window.addEventListener("DOMContentLoaded", function (event) {
  let titleText = $('.tabName .href').first().text().trim().replace(/\s+/g, '');
  let tabLinks = $('.tab_wrap .tab a');
  if (titleText && tabLinks.length > 0) {
    tabLinks.parent().removeClass('on');
    tabLinks.each(function () {
      console.log($(this).text().trim().replace(/\s+/g, ''), titleText)
      if ($(this).text().trim().replace(/\s+/g, '') === titleText) {
        $(this).parent().addClass('on');
        return false;
      }
    });
  }
});