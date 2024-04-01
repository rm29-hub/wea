import{info} from "./info.js"
import{img, imgOne, imgTwo, imgThree} from "./img.js"
import{card, pOne, pTwo, pThree} from "./card.js"

const data ={
    title       : "Inside Our Portfolio: IT Projects Highlights",
    para        : "Welcome to our website! Explore our innovative projects and solutions showcasing our expertise in the world of technology. From software development to cybersecurity, our portfolio highlights our commitment to excellence and creativity in IT.",
    contactBtn  : "Contact Me",
    myImage     : "mybg.png"
}
const sTwoTitle = {
    titleTwo: "PROJECT COMPLETED"
}
const pOneData ={
    imageOne: "Project.jpg",
    paraOne: "Discover the world of Mechanical and Process Engineering with our dynamic program. Gain hands-on experience and theoretical knowledge essential for addressing real-world challenges and driving innovation in diverse industries.",
    btn1:    "Learn More",
}
const pTwoData={
    imageTwo: "projectTwo.jpg",
    paraTwo: "Off Terrain Adventure Robot with Action Camera Mount is the perfect option for beginners to start their robotics journey.This Robot effortlessly maneuvers rough terrains and ensure swift navigation and easy maneuverability.",
    btn2:    "Learn More",
}
const pThreeData={
    imageThree: "projectThree.jpg",
    paraThree: "Geek+ AGV P500R: The ultimate solution for industrial automation. This AGV robot seamlessly integrates with both industrial robots and cobots, streamlining operations with precision and efficiency.",
    btn3:    "Learn More"
}


const {title, para, contactBtn, myImage} = data
const {titleTwo}= sTwoTitle
const {imageOne, paraOne, btn1 }= pOneData
const {imageTwo, paraTwo, btn2 }= pTwoData
const {imageThree, paraThree, btn3 }= pThreeData


let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")
let projectOne = document.getElementById("projectOne")
let projectTwo = document.getElementById("projectTwo")
let projectThree = document.getElementById("projectThree")

sectionOne.append(info(title, para, contactBtn))
sectionOne.append(img(myImage))


sectionTwo.append(card(titleTwo))
projectOne.append(imgOne(imageOne))
projectOne.append(pOne(paraOne, btn1))
projectTwo.append(imgTwo(imageTwo))
projectTwo.append(pTwo(paraTwo, btn2))
projectThree.append(imgThree(imageThree))
projectThree.append(pThree(paraThree, btn3))

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

document.getElementById("iconTop").addEventListener("click", function(event) {
    event.preventDefault();
    // Scroll smoothly to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

