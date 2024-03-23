import{info} from "./info.js"
import{img} from "./image.js"

const mainData = {
    title1: "Shih Tzu Puppies",
    title2: "Have Yours Now!",
    para1: "Shih Tzu puppies are known for their amiable and affectionate nature. They thrive in human company and make wonderful companions for both children and adults.",
    para2:"Our puppies are just waiting to become part of your family and fill your home with joy!",
    image: "shih tzu2.jpg",
    aboutBtn: "About Us",
    contactBtn:"Contact",
    viewBtn: "View Puppies"
}

const {title1, title2, para1, para2, aboutBtn, contactBtn, viewBtn, image} = mainData

let container = document.getElementById("container")
container.append(info(title1, title2, para1, para2, aboutBtn, viewBtn, contactBtn))
container.append(img(image))