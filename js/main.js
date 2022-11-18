"use strict";window.addEventListener('load',function(){var menuCollapse=document.getElementById('navbarMenuCollapse');menuCollapse.addEventListener('shown.bs.collapse',function(){document.body.classList.add('menu-visible');});menuCollapse.addEventListener('hidden.bs.collapse',function(){document.body.classList.remove('menu-visible');});var bsCollapse=new bootstrap.Collapse(menuCollapse,{toggle:false});[].forEach.call(document.querySelectorAll('#navbarMenuCollapse a:not(.dropdown-toggle)'),function(el){el.addEventListener('click',function(event){bsCollapse.hide();});});var prevScrollpos=window.pageYOffset;var pageHeader=document.querySelector('.navbar-top');window.addEventListener("scroll",function(){var currScrollpos=window.pageYOffset;if(currScrollpos>prevScrollpos&&currScrollpos>64){if(!pageHeader.classList.contains('hide-header')){pageHeader.classList.add('hide-header');};}else{pageHeader.classList.remove('hide-header');}
prevScrollpos=window.pageYOffset;if(window.pageYOffset>4){if(!document.body.classList.contains('scrolled')){document.body.classList.add('scrolled');}}else{document.body.classList.remove('scrolled');}});let vh=window.innerHeight*0.01;document.documentElement.style.setProperty('--vh',`${vh}px`);window.addEventListener("resize",function(){let vh=window.innerHeight*0.01;document.documentElement.style.setProperty('--vh',`${vh}px`);})
let swiperSliderSimpleA=new Swiper('.slider-simple-a.swiper-container',{navigation:{nextEl:'.swiper-container.slider-simple-a .slider-next',prevEl:'.swiper-container.slider-simple-a .slider-prev',},pagination:{el:'.swiper-pagination',clickable:true,},loop:true,grabCursor:true,autoplay:{delay:5000,},spaceBetween:160,slidesPerView:'auto',centeredSlides:true,speed:600,});let swiperSliderGalleryA=new Swiper('.slider-gallery-a.swiper-container',{navigation:{nextEl:'.swiper-container.slider-gallery-a .slider-next',prevEl:'.swiper-container.slider-gallery-a .slider-prev',},pagination:{el:'.swiper-pagination',clickable:true,},loop:true,grabCursor:true,autoplay:{delay:5000,},spaceBetween:0,slidesPerView:'auto',centeredSlides:true,speed:0,effect:'fade',});let swiperSliderSimpleB=new Swiper('.slider-simple-b.swiper-container',{pagination:{el:'.swiper-pagination',clickable:true,},loop:true,grabCursor:true,autoplay:{delay:5000,},effect:'fade',});try{var scrollSlider=new ScrollSlider('.scroll-simple-a',{scale1:0.1});scrollSlider.init();}
catch(error){console.log('scroll-slider not available')}
try{var sectionScroller=new SectionScroll('.sections-scroll ',{sectionClass:'section',navDotContainer:'.nav-dot-menu',changeOnSectionColor:'.change-on-section-color, .nav-dot-menu .nav-link'});sectionScroller.init();}
catch(error){console.log('sections-scroll not available')}
try{var rellax=new Rellax('.rellax');}catch(error){console.log('rellax-js not available')}
try{var scrollAnim=new ScrollAnim('.scroll-anim');scrollAnim.init();}
catch(error){console.log('scroll-anim not available')}
var parallaxElements=document.querySelectorAll('[data-prl]');parallaxElements.forEach(function(parallaxElement,index){parallaxElement.style['will-change']=`transform`
if(_isVisible(parallaxElement)){_computeParallaxPosition(parallaxElement)}
window.addEventListener('scroll',function(e){if(_isVisible(parallaxElement)){_computeParallaxPosition(parallaxElement)}});});function _computeParallaxPosition(element){let rtop=element.getBoundingClientRect().top
let rbottom=element.getBoundingClientRect().bottom
let y=rtop+Math.abs(rbottom-rtop)/2
let vh=window.innerHeight
let distance=(y-vh/2)/(vh/2)
let speedY=parseFloat(element.getAttribute('data-prl-speed-y'))||0
let speedX=parseFloat(element.getAttribute('data-prl-speed-x'))||0
let scaleCoeff=parseFloat(element.getAttribute('data-prl-scale'))||0
let refWidth=0.25*window.innerWidth
let refHeight=0.25*vh
let sMax=1;let scaleValue=0.5*sMax*distance*scaleCoeff+1
let translateX=speedX?`translateX(${distance*speedX*refWidth}px)`:''
let translateY=speedY?`translateY(${distance*speedY*refHeight}px)`:''
let scale=scaleCoeff?`scale(${scaleValue })`:''
element.style.transform=`${translateY} ${translateX}  ${scale}`}
function _isVisible(element){let ltop=element.getBoundingClientRect().top
let lbottom=element.getBoundingClientRect().bottom
let topVisible=false
let bottomVisible=false
let wh=window.innerHeight;let padding=wh/3
if(ltop<wh+padding&&ltop+padding>0){topVisible=true}
if(lbottom<wh+padding&&lbottom+padding>0){bottomVisible=true}
return topVisible||bottomVisible}
var pageLoader=document.querySelector('#page-loader');if(pageLoader){pageLoader.classList.add('p-hidden');}
document.body.classList.add('page-loaded');});