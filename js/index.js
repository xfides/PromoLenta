/*\\\дожидаемся прогрузки DOM дерева\\\дожидаемся прогрузки DOM дерева\\\*/
document.addEventListener("DOMContentLoaded", ready);
/*\\\дожидаемся прогрузки DOM дерева\\\дожидаемся прогрузки DOM дерева\\\*/


/*\\\весь скриптовыый код здесь\\\весь скриптовыый код здесь\\\*/
function ready() {

  // объявление переменных и функций -*- объявление переменных и функций -*-
  // ширина экрана, необходимая для синхронизации с CSS3 MEDIA Queries
  var windowWidth = window.innerWidth;

  // переменные отображающие структуру header
  var wrapAllHeader = document.querySelector(".wrapAllHeader");
  var headerContacts = document.querySelector(".headerContacts");
  var headerLogo = document.querySelector(".headerLogo");
  var search = document.querySelector(".search");
  var headerNav = document.querySelector(".headerNav");
  var breadcrumbs = document.querySelector(".breadcrumbs");

  // функция, перестраивающая header в зависимости от ширины экрана
  function rebuldHeader() {

    var NextByHeaderContacts = document.querySelector(".headerContacts+*");
    var NextByHeaderLogo = document.querySelector(".headerLogo+*");
    var NextBySearch = document.querySelector(".search+*");
    var NextByHeaderNav = document.querySelector(".headerNav+*");

    if (windowWidth <= 320) {
      if (
        (NextByHeaderContacts === headerLogo) &&
        (NextByHeaderLogo === search) &&
        (NextBySearch === headerNav)
      ) {
        console.log("header's order is right");
        return;
      } else {
        console.log("header's order is wrong");
        wrapAllHeader.insertBefore(headerNav, breadcrumbs);
        wrapAllHeader.insertBefore(search, headerNav);
        wrapAllHeader.insertBefore(headerLogo, search);
      }
    }

    if ((windowWidth >= 320) && (windowWidth <= 480)) {
      if (
        (NextByHeaderContacts === headerLogo) &&
        (NextByHeaderLogo === headerNav) &&
        (NextByHeaderNav === search)
      ) {
        console.log("header's order is right");
        return;
      } else {
        console.log("header's order is wrong");
        wrapAllHeader.insertBefore(search, breadcrumbs);
        wrapAllHeader.insertBefore(headerNav, search);
        wrapAllHeader.insertBefore(headerLogo, headerNav);
      }
    }

    if ((windowWidth >= 480) && (windowWidth <= 720)) {
      if (
        (NextByHeaderContacts === headerLogo) &&
        (NextByHeaderLogo === search) &&
        (NextBySearch === headerNav)
      ) {
        console.log("header's order is right");
        return;
      } else {
        console.log("header's order is wrong");
        wrapAllHeader.insertBefore(headerNav, breadcrumbs);
        wrapAllHeader.insertBefore(search, headerNav);
        wrapAllHeader.insertBefore(headerLogo, search);
      }
    }

    if ((windowWidth >= 720) && (windowWidth <= 960)) {
      if (
        (NextByHeaderContacts === search) &&
        (NextBySearch === headerLogo) &&
        (NextByHeaderLogo === headerNav)
      ) {
        console.log("header's order is right");
        return;
      } else {
        console.log("header's order is wrong");
        wrapAllHeader.insertBefore(headerNav, breadcrumbs);
        wrapAllHeader.insertBefore(headerLogo, headerNav);
        wrapAllHeader.insertBefore(search, headerLogo);
      }
    }

    if (windowWidth >= 960) {
      if (
        (NextByHeaderContacts === search) &&
        (NextBySearch === headerLogo) &&
        (NextByHeaderLogo === headerNav)
      ) {
        console.log("header's order is right");
        return;
      } else {
        console.log("header's order is wrong");
        wrapAllHeader.insertBefore(headerNav, breadcrumbs);
        wrapAllHeader.insertBefore(headerLogo, headerNav);
        wrapAllHeader.insertBefore(search, headerLogo);
      }
    }
  }

  // функция, перестраивающая content в зависимости от ширины экрана
  function rebuildContent() {

    var leftColumn = document.querySelector(".leftColumn");
    var rightColumn = document.querySelector(".rightColumn");
    var wrapContent = document.querySelector(".wrapContent");
    var goods = document.querySelector(".goods");
    var writeRequest = document.querySelector(".writeRequest");
    var pattern = document.querySelector(".pattern");
    var banner = document.querySelector(".banner");
    var contentNav = document.querySelector(".contentNav");
    var info = document.querySelector(".info");
    var payOnline = document.querySelector(".payOnline");
    function toBuildLeftColumn() {
      var BitsOfWholeLeftColumn = document.createDocumentFragment();
      BitsOfWholeLeftColumn.appendChild(contentNav);
      BitsOfWholeLeftColumn.appendChild(pattern);
      BitsOfWholeLeftColumn.appendChild(writeRequest);
      BitsOfWholeLeftColumn.appendChild(banner);
      BitsOfWholeLeftColumn.appendChild(info);
      leftColumn.appendChild(BitsOfWholeLeftColumn);
    }

    if (windowWidth <= 720) {
      console.log(leftColumn.children.length);
      if (leftColumn.children.length === 0) {
      	return;
      } else {
        var BitsOfContent = document.createDocumentFragment();
        console.log("not empty");
        BitsOfContent.appendChild(goods);
        BitsOfContent.appendChild(writeRequest);
        BitsOfContent.appendChild(pattern);
        BitsOfContent.appendChild(banner);
        BitsOfContent.appendChild(contentNav);
        BitsOfContent.appendChild(info);
        BitsOfContent.appendChild(payOnline);
        wrapContent.appendChild(BitsOfContent);
      }
    }

    if ((windowWidth >= 720) && (windowWidth <= 960)) {
      if (leftColumn.children.length === 0) {
        toBuildLeftColumn();
        return;
      } else if (rightColumn.children.length !== 0) {
        toBuildLeftColumn();
        return;
      } else {
        return;
      }
    }

    if (windowWidth >= 960) {
      if (rightColumn.children.length !== 0){
        return;
      } else {
        var BitsOfLeftColumn = document.createDocumentFragment();
        BitsOfLeftColumn.appendChild(contentNav);
        BitsOfLeftColumn.appendChild(pattern);
        leftColumn.appendChild(BitsOfLeftColumn);
        var BitsOfRightColumn = document.createDocumentFragment();
        BitsOfRightColumn.appendChild(writeRequest);
        BitsOfRightColumn.appendChild(banner);
        BitsOfRightColumn.appendChild(info);
        rightColumn.appendChild(BitsOfRightColumn);
      }
    }
  }

  // функция, запускающая перестройку
  function toRebuildHtml() {
    windowWidth = window.innerWidth;
    rebuldHeader();
    rebuildContent();
  }

  // функция-декоратор для торможения исходной функции
  function throttle(func, ms) {

    var isThrottled = false,
      savedArgs,
      savedThis;

    function wrapper() {

      if (isThrottled) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments);

      isThrottled = true;

      setTimeout(function () {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  }

  // объявление переменных и функций -*- объявление переменных и функций -*-





  // выполнение кода -*-выполнение кода -*-выполнение кода -*-
  toRebuildHtml();
  var toSlowRebuild = throttle(toRebuildHtml, 100);
  $(window).resize(toSlowRebuild);
  // выполнение кода -*-выполнение кода -*-выполнение кода -*-

}
/*\\\весь скриптовыый код здесь\\\весь скриптовыый код здесь\\\*/
