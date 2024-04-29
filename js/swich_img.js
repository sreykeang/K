 $(".sub_image").click(function(){
    const src = $ (this).attr("src")
    $("#main_image").attr("src", src)
 })