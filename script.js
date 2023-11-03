document.getElementById("nav-toggle").addEventListener("click", function() {
    var navList = document.querySelector(".nav-list");
    navList.classList.toggle("active");
});

$(document).ready(function () {
	$(".slick-carousel").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		autoplay: false,
        centerMode: true,
        focusOnSelect: true,
	});
	$(".prev-btn").click(function () {
		$(".slick-carousel").slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$(".slick-carousel").slick("slickNext");
	});
	$(".prev-btn").addClass("slick-disabled");
});



