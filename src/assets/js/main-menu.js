$(function() {
	function mainMenu() {
		var menuHandle = $("#main-menu-handle");
		var menuList = $("#main-menu ul");
		menuHandle.click(function(e) {
			e.preventDefault();
			$(this).toggleClass("icon-close");
			menuList.toggleClass("visible");
		}); // click();
	} // mainMenu();
	mainMenu();
});