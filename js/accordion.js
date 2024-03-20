// //アコーディオンをクリックした時の動作
// $('.title').on('click', function() {//タイトル要素をクリックしたら
// 	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
// 	$(findElm).slideToggle();//アコーディオンの上下動作
    
// 	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
// 		$(this).removeClass('close');//クラス名を除去し
// 	}else{//それ以外は
// 		$(this).addClass('close');//クラス名closeを付与
// 	}
// });

// nameは実際のテキストに応じて編集
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
	$(".accordion-area").slideUp(500);

	const title = $(this).children(".title").text();
	const title_excluded_spaces = title.trim();

	// const flag_open = $(".accordion-area").hasClass("open")
	// if(flag_open){
	// 	$(".accordion-area").removeClass("open");
	// }

	for(let i = 0; i < header_navi.length; i++){
		if(header_navi[i].name == title_excluded_spaces){
			const accordion_name = ".accordion-" + header_navi[i].class_name;
			if($(accordion_name).hasClass("open")){
					$(accordion_name).removeClass("open");
			} else {
				$(".accordion-area").removeClass("open");
				$(accordion_name).addClass("open");
				$(accordion_name).slideDown(500);
			}
		}
	}
})


$('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}