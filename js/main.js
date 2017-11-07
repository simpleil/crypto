document.addEventListener('DOMContentLoaded', function(){
	var icon = document.getElementById('iconMenu');
	var menu = document.getElementById('menu');
	var item = document.getElementsByClassName('item');
	icon.addEventListener('click', function(e){
		e.preventDefault();
		if (!(menu.classList.contains('active'))) {
    		menu.classList.add('active');
    		icon.innerHTML = "&times;";
		} else {
			menu.classList.remove('active');
			icon.innerHTML = "&#9776;"
		}
	});
	function hideMenu() {
		menu.classList.remove('active');
		icon.innerHTML = "&#9776;"
	};
	for (var i = 0 ; i < item.length; i++) {
	   item[i].addEventListener('click', hideMenu, false);
	}
});