import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events()
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;


//linea 12
// cuando dices: this.togglethemenu, js cree que estas hablando
// de this como "this menuIcon", apunta al elemento del DOM
// lo que tu quieres es this, pero como la clase Mobile menu
// para eso sirve el bind(this), devuelve la propiedad this a la clase