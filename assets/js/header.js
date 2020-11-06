const menuToggle = document.getElementById('hamburger'),
      navMenu = document.getElementById('navigation_menu')

var menuActive = false
menuToggle.addEventListener('click', toggle_menu)


function toggle_menu() {
	if(menuActive) {
		this.classList.remove('active')
		menuActive = false
        menuToggle.classList.remove('active')
        navMenu.classList.remove('active')
	} else {
		this.classList.add('active')
		menuActive = true
        menuToggle.classList.add('active')
        navMenu.classList.add('active')
	}
}