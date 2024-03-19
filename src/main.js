$(jQuery).ready(function () {
  if ($(".collection-swiper").length > 0) {
    new Swiper(".collection-swiper", {
      slidesPerView: 3,
      spaceBetween: 0,
      preventInteractionOnTransition: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });
  }
  if ($(".feature-category-slides").length > 0) {
    new Swiper(".feature-category-slides", {
      slidesPerView: 1,
      spaceBetween: 0,
      preventInteractionOnTransition: false,
      navigation: {
        nextEl: ".feature-category-next",
        prevEl: ".feature-category-prev",
      },
    });
  }
  if ($("#room-space-tabs").length > 0) {
    // Ẩn tất cả nội dung tab ngoại trừ tab đầu tiên
    $(".tab-content").not(":first").hide(); // Ẩn tất cả các nội dung tab, ngoại trừ tab đầu tiên

    // Xử lý sự kiện click trên các tab
    $("#room-space-tabs [data-id]").on("click", function (e) {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

      var tabId = $(this).data("id"); // Lấy giá trị của thuộc tính data-id

      // Ẩn tất cả các nội dung của tab
      $(".tab-content").hide();

      // Hiển thị nội dung của tab tương ứng
      $('.tab-content[data-tab-id="' + tabId + '"]').fadeIn(); // Sử dụng hiệu ứng fadeIn()

      // Loại bỏ lớp active từ tất cả các tab
      $("#room-space-tabs [data-id]").removeClass("active");

      // Thêm lớp active cho tab hiện tại
      $(this).addClass("active");
    });
  }

  // Room Space slide
  if ($(".room-space-slide").length > 0) {
    new Swiper(".room-space-slide", {
      slidesPerView: "auto",
      spaceBetween: 25,
      autoplay: {
        delay: 3000,
      },
      loop: true,
      pagination: {
        clickable: true,
      },
    });
  }
  if ($(".room-space-slide-2").length > 0) {
    new Swiper(".room-space-slide-2", {
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });
  }
  if ($(".best-selling-slide").length > 0) {
    new Swiper(".best-selling-slide", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
    new Swiper(".best-selling-slide-2", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
  }
  if ($(".partners-swiper").length > 0) {
    new Swiper(".partners-swiper", {
      slidesPerView: "auto",
      spaceBetween: 25,
      autoplay: {
        delay: 5000,
      },
      loop: true,
      pagination: {
        clickable: true,
      },
      //   hiện thị số ảnh trong slide theo màn hình
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 50,
        },
      },
    });
  }

  if ($(".trending-slides").length > 0) {
    new Swiper(".trending-slides", {
      slidesPerView: 1,
      loop: true,
    });
  }
  if ($(".project-slides").length > 0) {
    new Swiper(".project-slides", {
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }
  if ($(".related-articles-slides").length > 0) {
    new Swiper(".related-articles-slides", {
      slidesPerView: "auto",
      spaceBetween: 25,
      //   autoplay: {
      //     delay: 3000,
      //   },
      loop: true,
      pagination: {
        clickable: true,
      },
      //   hiện thị số ảnh trong slide theo màn hình
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 50,
        },
      },
    });
  }
  if ($(".project-details-slides").length > 0) {
    new Swiper(".project-details-slides", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});
$(document).ready(function () {
  const $openFilter = $("#open-products-filter");
  const $listOption = $("#list-option");
  const $editListProducts = $("#list-product");

  $openFilter.on("click", function (e) {
    e.stopPropagation();
    $listOption.toggleClass("lg:!flex ");
    if (!$listOption.hasClass("lg:!flex")) {
      $editListProducts.removeClass("lg:!grid-cols-3");
    } else {
      $editListProducts.addClass("lg:!grid-cols-3");
    }
  });
});

$(document).ready(function () {
  $(".faq-button").click(function () {
    const content = $(this).next();
    const image_plus = $(this).find(".image_plus");
    const currentSrc = image_plus.attr("src");
    if (currentSrc == "./images/icons/minus.png ") {
      image_plus.attr("src", "./images/icons/plus 2.png");
    } else {
      image_plus.attr("src", "./images/icons/minus.png ");
    }
    $(this).attr(
      "aria-expanded",
      $(this).attr("aria-expanded") === "false" ? "true" : "false"
    );
    content.css(
      "max-height",
      $(this).attr("aria-expanded") === "true"
        ? content[0].scrollHeight + "px"
        : "0"
    );
  });
});

// // ở màn hình mobile thì thêm class để mở modal
$(document).ready(function () {
  adjustBottomElementPosition();
  $(window).resize(function () {
    adjustBottomElementPosition();
  });
  function adjustBottomElementPosition() {
    if ($(window).width() < 768) {
      $("#open-products-filter").addClass("modal-open-btn");
    } else {
      $("#open-products-filter").removeClass("modal-open-btn");
    }
  }
});

$(document).ready(function () {
  $(".modal-open-btn").click(function () {
    console.log("first");
    $("#fullscreen-modal").removeClass("hidden");
    $("body").addClass("overflow-hidden"); // Ngăn chặn việc lướt màn hình
  });

  $("#modal-close-btn").click(function () {
    $("#fullscreen-modal").addClass("hidden");
    $("body").removeClass("overflow-hidden"); // Bật lại việc lướt màn hình
  });
});

$(document).ready(function () {
  function decrement(e) {
    const btn = $(e.target)
      .parent()
      .parent()
      .find('button[data-action="decrement"]');
    const target = btn.next();
    let value = Number(target.val());
    value--;
    target.val(value);
  }

  function increment(e) {
    const btn = $(e.target)
      .parent()
      .parent()
      .find('button[data-action="decrement"]');
    const target = btn.next();
    let value = Number(target.val());
    value++;
    target.val(value);
  }

  $('button[data-action="decrement"]').click(decrement);

  $('button[data-action="increment"]').click(increment);
});
