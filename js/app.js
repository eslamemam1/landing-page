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
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


const sections = document.querySelectorAll('[data-nav]');
//console.log(sections[1].getAttribute('data-nav').replaceAll(' ',''))
//console.log(sections[1].getAttribute('data-nav'))

function mackActive(){
    for (const section of sections) {
        const viwe = section.getBoundingClientRect();
        if(viwe.top <= '150' && viwe.bottom >= '150'){
            //console.log(viwe)
            //console.log(section.getAttribute('data-nav'))
            section.classList.add('your-active-class')
        }else(
            section.classList.remove('your-active-class')
        )
    }
}

document.addEventListener('scroll' , mackActive) ;

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
            // list items
            const itemForList = document.createElement('li');
            // anchor
            const anchorLink = document.createElement('a');
            // value for data attribut 
            const value = sections[i].getAttribute('data-nav');
            anchorLink.setAttribute('href' , `#section${i + 1 }`) //value.replaceAll(' ','')
            itemForList.textContent = value;
            // add class menu
            itemForList.classList.add('menu__link')
            // append the list items tag in the anchor link
            anchorLink.appendChild(itemForList);
            // append the list items tag in the menu
            list.appendChild(anchorLink);
            // add event 
            anchorLink.addEventListener('click', function (e) {
                console.log(e.target)
                //.classList.add('your-active-class')
                
            })
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

