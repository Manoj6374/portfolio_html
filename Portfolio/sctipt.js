const cursor = document.getElementById('cursor');
const cursorBorder = document.getElementById('cursor-border');

let cursorX = 0,
  cursorY = 0,
  borderX = 0,
  borderY = 0;
let deviceType = '';
//check if it is a touch device
const isTouchDevice = () => {
  try {
    document.createEvent('TouchEvent');
    deviceType = 'touch';
    return true;
  } catch (e) {
    deviceType = 'mouse';
    return false;
  }
};
//move
const move = (e) => {
  cursorX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  cursorY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;
};

document.addEventListener('mousemove', (e) => {
  move(e);
});
document.addEventListener('touchmove', (e) => {
  move(e);
});
document.addEventListener('touchend', (e) => {
  e.preventDefault();
});

//animate border
const borderAnimation = () => {
  const gapValue = 5;
  borderX += (cursorX - borderX) / gapValue;
  borderY += (cursorY - borderY) / gapValue;
  cursorBorder.style.left = `${borderX}px`;
  cursorBorder.style.top = `${borderY}px`;
  requestAnimationFrame(borderAnimation);
};

requestAnimationFrame(borderAnimation);

document.addEventListener("DOMContentLoaded", function() {
    // Get references to elements
    const sideNav = document.getElementById('side-nav');
    const cancelBtn = document.getElementById('cancel');
    const openBtn = document.getElementById('open');
  
    // Function to open side navigation
    function openNav() {
      sideNav.classList.add('open');
    }
  
    // Function to close side navigation
    function closeNav() {
      sideNav.classList.remove('open');
    }
  
    // Event listener for open button
    openBtn.addEventListener('click', openNav);
  
    // Event listener for close button
    cancelBtn.addEventListener('click', closeNav);
  });
  
// var sidenav = document.getElementById("side-nav")
// var cancelbtn = document.getElementById("cancel");

// cancelbtn.addEventListener('click', function () {
//     sidenav.style.left = '-700px';
// })

// function show() {
//     sidenav.style.left = 0;
// }

function download() {
    window.open("ManojResume.pdf", '_blank')
}



function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

// Get references to link elements
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");
const link5 = document.querySelector(".link5");
const link6 = document.querySelector(".link6");
const getstart = document.querySelector(".get");

// Add event listeners to links
link1.addEventListener('click', () => {
    scrollToElement('.skill-container');
});

link2.addEventListener('click', () => {
    scrollToElement('.container-pro');
});

link3.addEventListener('click', () => {
    scrollToElement('.contact-container');
});

link4.addEventListener('click', () => {
    scrollToElement('.skills');
});

link5.addEventListener('click', () => {
    scrollToElement('.header');
});

link6.addEventListener('click', () => {
    scrollToElement('.contact-container');
});

getstart.addEventListener('click', () => {
    scrollToElement('.contact-container');
});


// document.getElementById('contact-form').addEventListener('submit',function(event){
//     event.preventDefault();
//     var data=new FormData(event.target);
//     fetch("https://formspree.io/f/xyyrqopk",{
//         method:"POST",
//         body:data,
//     }).then(response=>{
//         if(response.ok){
//             alert('Success');
//         }
//         else{
//             alert("Error");
//         }
//     });
//     document.getElementById('contact-form').reset();
// });
