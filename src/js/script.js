/* eslint-disable no-undef */
const slider = tns({
	container: ".carousel__slider",
	items: 1,
	slideBy: "page",
	autoplay: false,
	controls: false,
	navPosition: "bottom",
	mouseDrag: true,
	nav: true,
	responsive: {
		1200: {
			nav: false
		}
	}
});

document.querySelector(".prev").onclick = function () {
	slider.goTo("prev");
};
document.querySelector(".next").onclick = function () {
	slider.goTo("next");
};

$(".input-10").toArray().forEach(function (field) {
	new Cleave(field, {
		numericOnly: true,
		phoneRegionCode: "{country}",
		blocks: [0, 3, 0, 3, 4],
		delimiters: ["(", ")", " ", "-"]
	});
});

(function ($) {
	$(() => {
		$("ul.catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
			$(this)
				.addClass("catalog__tab_active").siblings().removeClass("catalog__tab_active")
				.closest("div.container")
				.find("div.catalog__content")
				.removeClass("catalog__content_active")
				.eq($(this).index())
				.addClass("catalog__content_active");
		});
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on("click", (e) => {
				e.preventDefault();
				$(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
				$(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
			});
		});
	}

	toggleSlide(".catalog-item__link");
	toggleSlide(".catalog-item__back");

	// Modal

	$("[data-modal=consultation]").on("click", function () {
		$(".overlay, #consultation").fadeIn("slow");
	});
	$(".modal__close").on("click", function () {
		$(".overlay, #consultation, #thanks, #order").fadeOut("slow");
	});
	$(".button_mini").each(function (i) {
		$(this).on("click", function () {
			$("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
			$(".overlay, #order").fadeIn("slow");
		});
	});

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Имя должно быть не короче {0} символов!")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен адрес почты"
				}
			}
		});
	}

	validateForms("#consultation-form");
	validateForms("#consultation form");
	validateForms("#order form");


}(jQuery));
