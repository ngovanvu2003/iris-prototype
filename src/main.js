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
            autoplay: {
                delay: 3000,
            },
            loop: true,
            pagination: {
                clickable: true,
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
                    spaceBetween: 30,
                },
            },
        });
    }
});
