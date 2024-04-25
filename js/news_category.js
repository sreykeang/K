$('.category').on('click', function() {
	const category_class = $(this).attr('class');
  const check_active = category_class.includes('category-active');
  
  if(!check_active){
    
    $('.category').removeClass('category-active')
    const category_class_array = category_class.split(' ')
    const choose_class = category_class_array[1]
    $('.' + choose_class).addClass('category-active')
  }
})