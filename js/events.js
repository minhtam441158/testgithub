$(function () {
  // search
  var searchOpen = document.querySelector(".search-btn");
  var searchClose = document.querySelector(".search-close");
  $(searchOpen).click(function () {
    $(".input-control").fadeIn(1000);
    $(".header-info").hide();
    $(this).hide();
    $(searchClose).show();
  });
  $(searchClose).click(function (e) {
    $(".header-info").fadeIn(1000);
    $(".input-control").hide();
    $(this).hide();
    $(searchOpen).show();
  });
  // Search END

  // menu
  $(".menu-open").click(function (e) {
    $(".navbar").slideDown(200);
    $(this).hide();
    $(".menu-close").show();
  });
  $(".menu-close").click(function (e) {
    $(".navbar").slideUp(200);
    $(this).hide();
    $(".menu-open").show();
  });
  // Menu fixed
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#menu").addClass("sticky");
    } else {
      $("#menu").removeClass("sticky");
    }
  });
  // Menu End

  // Active menu
  $(".navbar-nav li").click(function (e) {
    $(".navbar-nav li").removeClass("active").siblings();
    $(this).addClass("active");
  });
  // Active menu END=============================

  // Slider1
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // Slider1 End

  // Slider1
  $(".owl-carousel2").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    freeDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      960: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Slider1 End
  // Heart Like

  // const heart1 = document.getElementById('heart1');
  // heart1.addEventListener('click', function() {
  //     heart1.classList.toggle('red');
  // });

  // const heart2 = document.getElementById('heart2');
  // heart2.addEventListener('click', function() {
  //     heart2.classList.toggle('red');
  // });

  // const heart3 = document.getElementById('heart3');
  // heart3.addEventListener('click', function() {
  //     heart3.classList.toggle('red');
  // });

  // const heart4 = document.getElementById('heart4');
  // heart4.addEventListener('click', function() {
  //     heart4.classList.toggle('red');
  // });

  // Heart Like END
});

// Slider slick
$(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  });
  // Slider click END =============================
});

// datepicker
$(function () {
  $("#datepicker")
    .datepicker({
      autoclose: true,
      todayHighlight: true,
    })
    .datepicker("update", new Date());
});
// datepicker END =========================================

$(function () {
  // Check form
  $(".register-form").submit(function () {
    var fullName = $("[name=fullname]").val();
    var email = $("[name=email]").val();
    var phone = $("[name=phone]").val();

    if (fullName.trim().length < 6) {
      $(".error").html("* Vui lòng nhập đầy đủ họ tên !!! ");
      return false;
    }

    var tel = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (!tel.test(phone)) {
      $(".error").html("* Số điện thoại không hợp lệ !!!");
      return false;
    }
    return true;
  });
});
// Check form END =======================================

$(function () {
  // Back to Top
  var btn = $("#btn-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  // Back to Top END ==================================================================

  // like
  $ (function () {
    $(".like").click(function (e) {
      $(this).toggleClass("red");
    });
  });
});

