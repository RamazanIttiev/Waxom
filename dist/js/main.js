const slider = tns({
  container: ".promo__slider",
  items: 1,
  slideBy: "page",
  nav: true,
  controls: false,
  responsive: {
    320: {
      items: 1,
      nav: false,
    },

    576: {
      items: 1,
      nav: true
    }
  }
});

document.querySelector(".prev").onclick = function () {
  slider.goTo("prev");
};

document.querySelector(".next").onclick = function () {
  slider.goTo("next");
};


// !!!!!!!!!!!!! TABS !!!!!!!!!!!!!!!

$(function () {
  $("div.projects__tabs").on(
    "click",
    "button:not(.projects__tabs-item_active)",
    function () {
      $(this)
        .addClass("projects__tabs-item_active")
        .siblings()
        .removeClass("projects__tabs-item_active")
        .closest("div.container")
        .find("div.card-wpr")
        .removeClass("card-wpr_active")
        .eq($(this).index())
        .addClass("card-wpr_active");
    }
  );

  // !!!!!!!!!!!!! MENU !!!!!!!!!!!!!!!


  $(".header__humburger").on(
    "click",
    function () {
      $(this)
        .toggleClass("header__humburger_active")
        .closest("nav.header__nav")
        .find("ul.header__list")
        .toggleClass("header__list_active");
    }
  );
})