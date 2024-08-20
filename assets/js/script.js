'use strict';

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * MOBILE NAVBAR TOGGLE
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
 navbar.classList.toggle("active");
 overlay.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);

/**selection de mes classes
 * creation d'une fonction = toggleNav
 * application active sur mes mes elements selections 
 * addevent 
 */




/**
 * active header when  window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerActive);

// Get elements from DOM

const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.images img');

// Add a click event to all buttons 

for(let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', filterImg); 
}

// set active button onclick 

function setActiveBtn(e) {
    //remove active class from all buttons
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });
// add active class to clicked button 
e.target.classList.add('btn-clicked'); 
}

//filter images 

function filterImg(e) {
    // run the active button function 
    setActiveBtn(e); 

//loop through all images  

imgs.forEach(img => {
    //expand all images 
    img.classList.remove('img-shrink'); 
    img.classList.add('img-expand'); 

    //get data from data attributes 
    //get image type data 

    const imgType = parseInt(img.dataset.img);

    //get button type data 

    const btnType = parseInt(e.target.dataset.btn);

    /* if the image type and the type of the clicked button  are not the same */

    if(imgType !== btnType) { 
        // hide the image 
        img.classList.remove('img-expand'); 
        img.classList.add('img-shrink');
    }
}); 
}  

// set click event for the 'all' button 
btns[0].addEventListener('click', (e) => {
// run the active button function 
setActiveBtn(e); 
// loop through all images 
imgs.forEach(img => {
    //expand all images 
    img.classList.remove('img-shrink'); 
    img.classList.add('img-expanded'); 
});
}); 

 
