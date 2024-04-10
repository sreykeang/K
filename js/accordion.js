const header_navi = [
	{
		name: "タイを知る",
		class_name: "about"
	},
	{
		name: "エリア情報",
		class_name: "area_info"
	},
	{
		name: "観光スポット",
		class_name: "travel_spot"
	},
	{
		name: "グルメ",
		class_name: "food"
	},
	{
		name: "ホテル",
		class_name: "hotel"
	},
	{
		name: "楽しむ",
		class_name: "enjoy"
	},
	{
		name: "旅のテーマ",
		class_name: "theme_of_travel"
	}
]

$('.header-button').on('click', function() {
	const title = $(this).children(".title").text();
	const title_excluded_spaces = title.trim();

	for(let i = 0; i < header_navi.length; i++){
		if(header_navi[i].name == title_excluded_spaces){
			const accordion_name = ".accordion-" + header_navi[i].class_name;
			if($(accordion_name).hasClass("open")){
					$(accordion_name).removeClass("open");
					$(".accordion-area").slideUp("300");
			} else {
				$(".accordion-area").css("display", "none");
				$(".accordion-area").removeClass("open");
				$(accordion_name).addClass("open");
				$(accordion_name).slideDown("300");
			}
		}
	}
})