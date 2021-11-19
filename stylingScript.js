// ***** select DOM items *******

// moblie navbar
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// home split sec 1
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.home-sec-1-container');

// faq
const toggles = document.querySelectorAll('.faq-toggle');



//***** */ set initial state ********
// nav menu
let showMenu = false;



// ******** event listeners **********
// menu
menuBtn.addEventListener("click", toggleMenu);

// home sec 1 split screen
if (left !== null) {
  left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
  left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

}

if (right !== null) {
  right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
  right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
}




// ****** functions **********
// moblie nav 
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}



// ************* contact email form ************

const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText 
        .split('')
        .map((letter, idx) => `<span  style="transition-delay: ${idx * 50}ms;">${letter}</span>`)
        .join('')
});


// **************** FAQ ***************************
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
      toggle.parentNode.classList.toggle('active')
  })
});


// ********************** store sec 2 *************
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.getElementById(`${this.id}-content`);
  console.log(this.id);
	// Add show class
	tabContentItem.classList.add('show');

}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});


// **************** home slider ***************
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const imgs = document.getElementById('imgs');

if (imgs !== null) {
  const img = document.querySelectorAll('#imgs img')

let idx = 0;

let interval = setInterval(run, 3000)

function run() {
    idx++ 
    changeImage();
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 600}px)`
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 10000)
}

if (nextBtn !== null && prevBtn !== null) {
  nextBtn.addEventListener('click', () => {
    idx++
    changeImage();
    resetInterval()
});

prevBtn.addEventListener('click', () => {
    idx--
    changeImage();
    resetInterval()
});
}

}
