// FAQ

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question = item.querySelector(".question");

question.addEventListener("click", () => {

item.classList.toggle("active");

});

});

// Navbar Shadow

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.boxShadow =
"0 4px 15px rgba(0,0,0,.15)";
}else{
header.style.boxShadow =
"0 2px 10px rgba(0,0,0,.08)";
}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({
behavior:"smooth"
});

});

});