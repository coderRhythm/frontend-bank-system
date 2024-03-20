'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// // console.log(document.documentElement) //selecting the entire page
// // console.log(document.head)
// // console.log(document.body)


// // const header = document.querySelector('.header');
// // const allSections = document.querySelectorAll(".section");

// // console.log(allSections);

// // document.getElementById('section--1');

// // const allButtons = document.getElementsByTagName('button')
// // const message  = document.createElement('div')
// // message.classList.add('cookie-message');
// // message.textContent = "we use cookies for improve fucntionality and analytics"
// // message.innerHTML = "we use cookies for improve fucntionality and analytics.<button class='btn btn--close-cookie'>Got it!</button>"

// // // header.prepend(message)
// // header.append(message)
// // // we can after also 
// // header.after(message)

// // //now delete the message when we click on "got it!" button
// // const del = document.querySelector('.btn--close-cookie').addEventListener('click',function(){
// //     // message.remove();
// //     message.parentElement.removeChild(message)
// // })

// // //styles  --> this styles directly are inline styles 
// // message.style.backgroundColor = "#37383d";
// // message.style.width='120%';

// // // console.log(message.style.height);  //this is not inline style so this is not print
// // // console.log(message.style.backgroundColor);

// // // console.log(getComputedStyle(message).color)

// // message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 +'px';

// // document.documentElement.style.setProperty("--color-primary",'orangered')

// // //Attributes
// // const logo = document.querySelector('.nav__logo')
// // console.log(logo.alt)

// // // console.log(logo.getAttribute('designer'))
// // logo.alt  = "Beutiful logo image";


// // //setting the attribute 
// // logo.setAttribute('company','bankist') 


// // //getting the actual path of the src
// // console.log(logo.src) //gives the actual link
// // console.log(logo.getAttribute('src')) //gives like img/logo.png 

// // const link  = document.querySelector('.nav__link--btn');
// // console.log(link.href)
// // console.log(link.getAttribute('href'));


// // //Data attribute 
// // console.log(logo.getAttribute('designer'))
// // console.log(logo.dataset.versionNumber)

// // //Classes
// // logo.classList.add('c','j')
// // logo.classList.remove('e','f')
// // logo.classList.toggle('t')
// // logo.classList.contains('cont')


// // // //Don't use
// // // logo.className = "jonas"




// // // Now we going towards the smooth scrolling 
// //  const btnScrollto = document.querySelector('.btn--scroll-to')
// //  const section1 = document.querySelector('#section--1')

// //  btnScrollto.addEventListener('click',function(e)
// //  {
// //     const s1coords = section1.getBoundingClientRect();
// //     // console.log(s1coords);

// //     // console.log(e.target.getBoundingClientRect());
// //     // console.log('height/width viewport',document.documentElement.clientHeight, document.documentElement.clientWidth);
    
// //     //scrolling 
// //     // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);

// //     // window.scrollTo({
// //     //   left: s1coords.left+window.pageXOffset,
// //     //   top: s1coords.top+window.pageYOffset,
// //     //   behavior: 'smooth',
// //     // });

// //     section1.scrollIntoView({behavior: 'smooth'})

// //  })


// // const h1 = document.querySelector('h1')
// // // h1.addEventListener('mouseenter',function(e)
// // // {
// // //     alert("addEventListener! great");
// // // }) 

// // const h1mouse = function(e)
// // {
// //     alert("addEventListener! great");
    
// //     h1.removeEventListener('onmouseenter',h1mouse)
// // }
// // h1.onmouseenter = h1mouse;


// //creating the random color 
// const randomInt = (min,max)=> Math.floor(Math.random() *(max-min+1)+min);

// const randomColor = ()=> `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// // document.querySelector('.nav__link').addEventListener('click',function(e)
// // {
// //     console.log('LINK')
// // });

// document.querySelector('.nav__link').addEventListener('click',function(e)
// {
//     this.style.backgroundColor =  randomColor()
//     console.log('LINK: ',e.target, e.currentTarget)
//     console.log(e.currentTarget === this)

//     //stopping the propagation of event 
//     e.stopPropagation();
// })

// document.querySelector('.nav__links').addEventListener('click',function(e)
// {
    
//     this.style.backgroundColor =  randomColor() 
//     console.log('LINK: ',e.target,e.currentTarget)
//     console.log(e.currentTarget === this)
//     e.stopPropagation();

// })

// //in the above code , when we click on the first event like feuture in the navbar then the 2nd part of the code also trigger basically it is bubbling of the events 


// document.querySelector('.nav').addEventListener('click',function(e)
// {
//     this.style.backgroundColor =  randomColor()
//     console.log('LINK: ',e.target,e.currentTarget) 
//     console.log(e.currentTarget === this)
//     e.stopPropagation();

// })



//  const btnScrollto = document.querySelector('.btn--scroll-to')
//  const section1 = document.querySelector('#section--1')

//  btnScrollto.addEventListener('click',function(e)
//  {
//     const s1coords = section1.getBoundingClientRect();
//     // console.log(s1coords);

//     // console.log(e.target.getBoundingClientRect());
//     // console.log('height/width viewport',document.documentElement.clientHeight, document.documentElement.clientWidth);
    
//     //scrolling 
//     // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);

//     // window.scrollTo({
//     //   left: s1coords.left+window.pageXOffset,
//     //   top: s1coords.top+window.pageYOffset,
//     //   behavior: 'smooth',
//     // });

//     section1.scrollIntoView({behavior: 'smooth'})

//  })


//Page navigation 
//without event delegation

// document.querySelectorAll('.nav__link').forEach(function(el)
// {
//    el.addEventListener('click',function(e)
//    {
//       e.preventDefault();
//       //implimenting the smooth scrolling 
//       const id = this.getAttribute('href')
//       console.log(id);
//       //apply the smooth scrolling formula to the different sections
//       document.querySelector(id).scrollIntoView({behavior: 'smooth'})


//       console.log('LINK');
//    })
// })


//below code is efficient way for smooth scrolling
// document.querySelector('nav__links').addEventListener('click',function(e)
// {
//    console.log(e.target);
   
//    //Matching strategy
//    if(e.target.classList.contains('.nav__link'))
//    {
//       const id = e.target.getAttribute('href')
//       console.log(id);
//       //apply the smooth scrolling formula to the different sections
//       document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//    }
// })


// //DOM TRAVERSING 
// const h1 = document.querySelector('h1');

// //Going downwards : child 
// console.log(h1.querySelectorAll('.highlight'))

// console.log(h1.childNodes)
// console.log(h1.children)

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = "orangered";


// //Going upworks
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)'


// doing sideways: Siblings 
// console.log(h1.previousElementSibling); //gives null because no child before the h1
// console.log(h1.nextElementSibling)  //gives the h4 because it is the next child


// console.log(h1.previousSibling)
// console.log(h1.nextSibling)


// console.log(h1.parentElement.children)
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

// tabs.forEach(t=>t.addEventListener('click',()=>{
//    console.log('TAB')
// }))

tabsContainer.addEventListener('click',function(e){
      const clicked = e.target.closest('.operations__tab');
      // console.log(clicked);
      if(!clicked) return;
      if(clicked)
      {
         tabs.forEach(t=> t.classList.remove('operations__tab--active'))
         tabsContent.forEach(c=> c.classList.remove('operations__content--active'))
         clicked.classList.add('operations__tab--active')
         // console.log(clicked.classList)
         document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');



      }


})


//Menu fade animation 
const nav = document.querySelector('.nav')
nav.addEventListener('mouseover',function(e)
{
   if(e.target.classList.contains('nav__link'))
   {
      const link = e.target;
      const siblings  = link.closest('.nav').querySelectorAll('.nav__link')
      const logo = link.closest('.nav').querySelector('img')  

      siblings.forEach(el=>{
         if(el !== link)  el.style.opacity = 0.5;
      })

      logo.style.opacity = 0.8;

   }
})

nav.addEventListener('mouseout',function(e)
{
   if(e.target.classList.contains('nav__link'))
   {
      const link = e.target;
      const siblings  = link.closest('.nav').querySelectorAll('.nav__link')
      const logo = link.closest('.nav').querySelector('img')  

      siblings.forEach(el=>{
         if(el !== link)  el.style.opacity = 1;
      })

      logo.style.opacity = 1;
      
   }
})


//Sticky navigation 
// window.addEventListener('scroll',function()
// {
//    console.log(window.scrollY);

// })


// above code is not efficient so we use 'intersection of server API'
// const obsCallback=  function(entries, observer)
// {
//    entries.forEach(entry=>{
//       console.log(entry);
//    })

// };

// const obsOptions = {
//    root: null,
//    threshold: [0.1,0.2]
// }
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const n = document.querySelector('.nav');
const header = document.querySelector('.header');

const stickyNav = function(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) n.classList.add('sticky');
  else n.classList.remove('sticky');
};

const headerobserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-90px'
});

headerobserver.observe(header);


// Revealed sections 
const allSections = document.querySelectorAll('.section')
const revealSection = function(entries,observer)
{ 
   const [entry] = entries;
   console.log(entry)
   if(!entry.isIntersecting) return;

   entry.target.classList.remove('section--hidden')
   observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection,{
   root: null,
   threshold: 0.15
}) 

allSections.forEach(function(section)
{
   sectionObserver.observe(section);
   section.classList.add('section--hidden')
})


///////////////////////////////////////
// Modal window

// ... (your existing code)

// JavaScript for the slider
let currentSlide = 0;
let slides; // Declare slides as a global variable

// Function to show the current slide
function showSlide(index) {
  const dots = document.querySelectorAll('.dot');

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Deactivate all dots
  dots.forEach((dot) => {
    dot.classList.remove('dot--active');
  });

  // Show the selected slide
  slides[index].style.display = 'block';

  // Activate the corresponding dot
  dots[index].classList.add('dot--active');
}

// Function to navigate to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Function to navigate to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Event listeners for prev and next buttons
document.querySelector('.slider__btn--left').addEventListener('click', prevSlide);
document.querySelector('.slider__btn--right').addEventListener('click', nextSlide);

// Initialize the slider
document.addEventListener('DOMContentLoaded', function () {
  slides = document.querySelectorAll('.slide'); // Assign slides after DOMContentLoaded
  createDots();
});

// Function to create dots for each slide
function createDots() {
  const dotsContainer = document.getElementById('dots-container');

  slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.onclick = () => showSlide(index);
    dotsContainer.appendChild(dot);
  });

  // Show the initial slide after creating dots
  showSlide(currentSlide);
}

// ... (your existing code)
