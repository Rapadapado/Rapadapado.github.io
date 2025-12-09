 document.querySelectorAll('.Project_Pictures img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.Popup_Image').style.display = 'block';
        document.querySelector('.Popup_image img').src = image.getAttribute('src');
    }
 });

 document.querySelector('.Popup_Image span').onclick = () =>{
    document.querySelector('.Popup_Image').style.display = 'block';
 }

let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.navBar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('X')
    navbar.classList.toggle('active');
};

menuIcon.classList.remove('active')

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let diff = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= diff && top < (diff + height)){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(nav)
            })
        }
    })
}