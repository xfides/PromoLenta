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

    // -*- перестройка контактов header-*- перестройка контактов header -*-
    if (windowWidth <= 482) {
      var NextByRealContacts = document.querySelector(".realContacts+*");
      var realContacts = document.querySelector(".realContacts");
      var inetContacts = document.querySelector(".inetContacts");

      //console.log(NextByRealContacts);
      //console.log(realContacts);
      //console.log(inetContacts);

      if (
        (NextByRealContacts === inetContacts)
      ) {
        //console.log("order 480 right");
      } else {
        //console.log("order 480 wrong");
        headerContacts.insertBefore(realContacts, inetContacts);
      }
    } else {

      var NextByRealContacts = document.querySelector(".realContacts+*");
      var realContacts = document.querySelector(".realContacts");
      var inetContacts = document.querySelector(".inetContacts");

      if (
        (NextByRealContacts === inetContacts)
      ) {
        console.log("order >=480 wrong");
        headerContacts.insertBefore(inetContacts, realContacts);
      } else {
        console.log("order >=480 right");
      }

      $(".headerNav__list").removeAttr("style");
    }
    // -*- перестройка контактов header-*- перестройка контактов header -*-

    if (windowWidth <= 322) {
      if (
        (NextByHeaderContacts === headerLogo) &&
        (NextByHeaderLogo === search) &&
        (NextBySearch === headerNav)
      ) {
        //console.log("header's order is right");
        return;
      } else {
        //console.log("header's order is wrong");
        wrapAllHeader.insertBefore(headerNav, breadcrumbs);
        wrapAllHeader.insertBefore(search, headerNav);
        wrapAllHeader.insertBefore(headerLogo, search);
      }
    }

    if ((windowWidth >= 322) && (windowWidth <= 482)) {
      if (
        (NextByHeaderContacts === headerLogo) &&
        (NextByHeaderLogo === headerNav) &&
        (NextByHeaderNav === search)
      ) {
        //console.log("header's order is right");
        return;
      } else {
        // console.log("header's order is wrong");
        wrapAllHeader.insertBefore(search, breadcrumbs);
        wrapAllHeader.insertBefore(headerNav, search);
        wrapAllHeader.insertBefore(headerLogo, headerNav);
      }
    }

    if ((windowWidth >= 482) && (windowWidth <= 722)) {
      if (
        (NextByHeaderContacts === headerLogo) &&
        (NextByHeaderLogo === search) &&
        (NextBySearch === headerNav)
      ) {
        //console.log("header's order is right");
        return;
      } else {
        //console.log("header's order is wrong");
        wrapAllHeader.insertBefore(headerNav, breadcrumbs);
        wrapAllHeader.insertBefore(search, headerNav);
        wrapAllHeader.insertBefore(headerLogo, search);
      }
    }

    if ((windowWidth >= 722) && (windowWidth <= 962)) {
      if (
        (NextByHeaderContacts === search) &&
        (NextBySearch === headerLogo) &&
        (NextByHeaderLogo === headerNav)
      ) {
        //console.log("header's order is right");
        return;
      } else {
        //console.log("header's order is wrong");
        wrapAllHeader.insertBefore(headerNav, breadcrumbs);
        wrapAllHeader.insertBefore(headerLogo, headerNav);
        wrapAllHeader.insertBefore(search, headerLogo);
      }
    }

    if (windowWidth >= 962) {
      if (
        (NextByHeaderContacts === search) &&
        (NextBySearch === headerLogo) &&
        (NextByHeaderLogo === headerNav)
      ) {
        //console.log("header's order is right");
        return;
      } else {
        //console.log("header's order is wrong");
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

    if (windowWidth <= 722) {
      //console.log(leftColumn.children.length);
      if (leftColumn.children.length === 0) {
        return;
      } else {
        var BitsOfContent = document.createDocumentFragment();
        //console.log("not empty");
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

    if ((windowWidth >= 722) && (windowWidth <= 962)) {
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

    if (windowWidth >= 962) {
      if (rightColumn.children.length !== 0) {
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


  //  -*-accordion-*-accordion-*-accordion-*-accordion-*-

  function openFirstPanel() {
    $('.accordion__item:first-child>.accordion__describe')
      .addClass('active').slideDown();
    $('.accordion__item:first-child').find("h3").addClass("upArrow");
  }

  (function ($) {
    var allPanels = $('.accordion__describe').hide();
    var contentNavTitles = $(".contentNav__title");
    openFirstPanel();

    $('.contentNav__title').click(function () {
      $this = $(this);
      $target = $this.next();

      if ($target.hasClass('active')) {
        $target.removeClass('active').slideUp();
        $this.removeClass("upArrow");
      } else {
        allPanels.removeClass('active').slideUp();
        contentNavTitles.removeClass("upArrow");
        $target.addClass('active').slideDown();
        $this.addClass("upArrow");
      }

      return false;
    });

  })(jQuery);

  //  -*-accordion-*-accordion-*-accordion-*-accordion-*-

  /*--------Кнопка прокрутить вверх------------*/

// сама кнопка с документом
  var html = document.documentElement;
  var body = document.body;
  var btnUp = document.querySelector(".btnUp");
// сама кнопка

// функция скролла вверх
  function toScrollTop() {
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
  };
// функция скролла вверх

// показ кнопки прокрутить вверх
  $(window).scroll(function () {
    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop;
    if (scrollTop > 500) {
      btnUp.style.display = "block";
    } else {
      btnUp.style.display = "none";
    }
  });
// показ кнопки прокрутить вверх

// выполнить действие проскролить вверх
  $(btnUp).click(toScrollTop);
// выполнить действие проскролить вверх

  /*--------Кнопка прокрутить вверх------------*/

  /*\\\Сворачивание и разворачивание верхнего меню в моб версии\\\*/
  var headerNavBtn = $(".headerNav__btn");
  var headerNavList = $(".headerNav__list");

  headerNavBtn.click(function () {
    headerNavList.slideToggle();
    return;
  });
  /*\\\Сворачивание и разворачивание верхнего меню в моб версии\\\*/

  /*\\\сворачивание инфомрационных блоков в контекте\\\*/
  /*
    var infoBlocks = $(".info__title");

    infoBlocks.click(function () {
      $(this).next().slideToggle();
    });
  */

  /*\\\сворачивание инфомрационных блоков в контекте\\\*/


  /*\\\слайдер\\\слайдер\\\слайдер\\\слайдер\\\слайдер\\\*/

  $('.lentaSlider').slick({
    appendArrows: $('.lentaSlider'),
    accessibility: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 7000,
    draggable: true,
    arrows: true,
    useCSS: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    waitForAnimate: true,
    responsive: [
      {
        breakpoint: 482,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 322,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  });


  /*\\\слайдер\\\слайдер\\\слайдер\\\слайдер\\\слайдер\\\*/

  /*\\\подсветка столбцов таблицы\\\подсветка столбцов таблицы\\\*/

    $(".setTable__table td:not(.left_col,.top_row,.right_col)").on("mouseenter mouseleave", function () {
      if ($(this).parents(".lighting tr").attr("class") != "up_row") {
        var td_index = $(this).index();
        $(this).parents("tr").toggleClass("lighting_col");
        $(this).parents(".lighting").find("tr:not(.up_row)").each(function () {
          $("td:eq(" + td_index + ")", this).toggleClass("lighting_col");
        });
        $(this).toggleClass("lighting_cell");
      }
    });

  /*\\\подсветка столбцов таблицы\\\подсветка столбцов таблицы\\\*/

}
/*\\\весь скриптовыый код здесь\\\весь скриптовыый код здесь\\\*/
