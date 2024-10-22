/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('[data-nav]');

//console.log(sections[1].getAttribute('data-nav'))

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// this is the ul variable 
const list = document.querySelector('#navbar__list');

document.addEventListener('DOMContentLoaded', function () {
    if (sections) {
        for (let i = 0; i < sections.length; i++) {
            const itemForList = document.createElement('li');
            itemForList.textContent = sections[i].getAttribute('data-nav');;
            itemForList.classList.add('menu__link')
            list.appendChild(itemForList);
        }
    } else {
        console.error('error the element not found')
    }
})

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

