//
// Body fade in
//
function readyx() {
  let body = document.querySelector("body");
  body.style.opacity = "1";
}
document.addEventListener("DOMContentLoaded", readyx);

//
// Navbar hamburger toggle
//
function slideToggle(el) {
  let elem = document.getElementById(el);
  elem.classList.toggle("open");
}

//
// Team carousel code
//
$(document).ready(function () {
  $("#team-carousel").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          initialSlide: 2.1,
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          initialSlide: 1.1,
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 0.65,
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1.5,
        },
      },
    ],
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

//
// Presets comparison code
//
$(window).on("load", function () {
  $("#preset_container1").twentytwenty();
  $("#preset_container2").twentytwenty();
  $("#preset_container3").twentytwenty();
  $("#preset_container4").twentytwenty();
  $("#preset_container5").twentytwenty();

  $("#preset_container2").hide();
  $("#preset_container3").hide();
  $("#preset_container4").hide();
  $("#preset_container5").hide();
});


$("#preset1").click(function () {

  $("#preset1").removeClass("preset-select--active", 100);
  $("#preset2").removeClass("preset-select--active", 100);
  $("#preset3").removeClass("preset-select--active", 100);
  $("#preset4").removeClass("preset-select--active", 100);
  $("#preset5").removeClass("preset-select--active", 100);
  $(this).addClass("preset-select--active", 100);

  $("#preset_container2").hide();
  $("#preset_container3").hide();
  $("#preset_container4").hide();
  $("#preset_container5").hide();
  $("#preset_container1").show();
});


$("#preset2").click(function () {
  $("#preset1").removeClass("preset-select--active", 100);
  $("#preset2").removeClass("preset-select--active", 100);
  $("#preset3").removeClass("preset-select--active", 100);
  $("#preset4").removeClass("preset-select--active", 100);
  $("#preset5").removeClass("preset-select--active", 100);
  $(this).addClass("preset-select--active", 100);

  $("#preset_container1").hide();
  $("#preset_container3").hide();
  $("#preset_container4").hide();
  $("#preset_container5").hide();
  $("#preset_container2").show();
});


$("#preset3").click(function () {
  $("#preset1").removeClass("preset-select--active", 100);
  $("#preset2").removeClass("preset-select--active", 100);
  $("#preset3").removeClass("preset-select--active", 100);
  $("#preset4").removeClass("preset-select--active", 100);
  $("#preset5").removeClass("preset-select--active", 100);
  $(this).addClass("preset-select--active", 100);

  $("#preset_container1").hide();
  $("#preset_container2").hide();
  $("#preset_container4").hide();
  $("#preset_container5").hide();
  $("#preset_container3").show();
});


$("#preset4").click(function () {
  $("#preset1").removeClass("preset-select--active", 100);
  $("#preset2").removeClass("preset-select--active", 100);
  $("#preset3").removeClass("preset-select--active", 100);
  $("#preset4").removeClass("preset-select--active", 100);
  $("#preset5").removeClass("preset-select--active", 100);
  $(this).addClass("preset-select--active", 100);

  $("#preset_container1").hide();
  $("#preset_container2").hide();
  $("#preset_container3").hide();
  $("#preset_container5").hide();
  $("#preset_container4").show();
});


$("#preset5").click(function () {
  $("#preset1").removeClass("preset-select--active", 100);
  $("#preset2").removeClass("preset-select--active", 100);
  $("#preset3").removeClass("preset-select--active", 100);
  $("#preset4").removeClass("preset-select--active", 100);
  $("#preset5").removeClass("preset-select--active", 100);
  $(this).addClass("preset-select--active", 100);

  $("#preset_container1").hide();
  $("#preset_container2").hide();
  $("#preset_container3").hide();
  $("#preset_container4").hide();
  $("#preset_container5").show();
});

//
// FAQ accordion code
//
$("#faq__accordion").on(
  "hide.bs.collapse show.bs.collapse",
  (e) => {
    $(e.target)
      .prev()
      .find("div:last-child")
      .toggleClass("btn__indication--closed btn__indication--opened");
    $("btn__indication--closed").replaceWith("-");
    $("btn__indication--opened").replaceWith("-");
  }
);

$("#faq__accordion").on("shown.bs.collapse", (e) => {
  $("html, body").animate(
    {
      scrollTop: $(e.target).prev().offset().top,
    },
    400
  );
});

//
// Newsletter code
//
var fmFCFllpy5bwkxx = function (e) {
  if (e.data.type === "resize") {
    document.getElementById(
      "fm-fc-f-llpy5bwkxx"
    ).style.minHeight = e.data.size + "px";
  }
};
window.addEventListener
  ? addEventListener("message", fmFCFllpy5bwkxx, !1)
  : attachEvent("onmessage", fmFCFllpy5bwkxx);