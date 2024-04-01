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

