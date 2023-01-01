// Create variables of the elements that I will use

const servicesSection = document.getElementById("Services");
const aboutSection = document.getElementById("About-Page");
const productSection = document.getElementById("py-5");
const contactSection = document.getElementById("Contact-Page");

//Define the functions that will allow smooth scrolling to desired section on click of a button
// TO-DO: Review Drumkit Project (Github) to refactor this code to use a Switch Statement

function landingPageFunction(){
    servicesSection.scrollIntoView({behavior: "smooth", block: "start", inline: "start"}); 
};

function aboutPageFunction(){
    aboutSection.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};

function productPageFunction(){
    productSection.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};

function contactPageFunction(){
    contactSection.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
};