const typingText = document.querySelector('.text-line');
const cvBtn = document.querySelectorAll('.cv-btn');
const linkedinBtn = document.querySelector('.linkedinBtn');
const project = document.querySelectorAll('.projectHover');
const navToggler = document.querySelector('.nav-bar-toggler');
const nav = document.querySelector('.navBar');
const clientRole = "I'm a Data Scientist.";
let index = 0;
const speed = 100;

navToggler.addEventListener('click',function(){
    nav.classList.toggle('active');
})

for (let i = 0; i < project.length; i++) {
    project[i].addEventListener('click', (e) => {
        if (i === 0) {
            window.open('https://github.com/lobnahegazyy/House-Pricing', '_blank');
        } else if (i === 1) {
            window.open('https://github.com/lobnahegazyy/Age-insurance-LR', '_blank');
        } else if (i === 2) {
            window.open('https://github.com/lobnahegazyy/Spotify-Analysis', '_blank');
        } 
    });
}


linkedinBtn.addEventListener('click', function () {
    let tempAnchor = document.createElement('a');
    tempAnchor.setAttribute('target', '_blank');
    tempAnchor.setAttribute('href', 'https://www.linkedin.com/in/lobnahegazy/');
    tempAnchor.click();
});

for (let i = 0; i < cvBtn.length; i++) {
    cvBtn[i].addEventListener('click', () => {
        window.open('https://drive.google.com/file/d/1XfSKiwedY3V5mmfx7MVu-nGLWOLfdksU/view', '_blank');
    });
}


function type() {
    if (index < clientRole.length) {
        var temp = clientRole.substring(0, index) + clientRole.charAt(index) + '|';
        typingText.innerHTML = temp;
        index++;
        setTimeout(type, speed);
    } else {
        setTimeout(remove, speed * 3);
    }
}

function remove() {
    if (index >= 0) {
        var temp = clientRole.substring(0, index) + '|';
        typingText.innerHTML = temp;
        index--;
        setTimeout(remove, speed);
    } else {
        setTimeout(type, speed * 3);
    }
}

window.onload = () => type();
