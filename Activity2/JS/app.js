import{info} from "./info.js"
import{img, imgOne, imgTwo, imgThree} from "./img.js"
import{card, pOne, pTwo, pThree} from "./card.js"

const data ={
    title       : "Inside Our Projects: IT Portfolio Highlights",
    para        : "Welcome to our website! Explore our innovative projects and solutions showcasing our expertise in the world of technology. From software development to cybersecurity, our portfolio highlights our commitment to excellence and creativity in IT.",
    contactBtn  : "Contact Me",
    myImage     : "girl1.png"
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