// const themeButton = document.querySelector('.change-theme')
// const body = document.querySelector('body')



// themeButton.addEventListener('click', () => {

// body.classList.toggle('dark-theme')

// })


const themeButton = document.querySelector('.change-theme');
const body = document.body;

// Function to set the theme
const setTheme = (theme) => {
  body.classList.remove('dark-theme');
  body.classList.remove('light-theme');
  body.classList.add(theme);
  localStorage.setItem('theme', theme);
};

// Check if a theme is stored in localStorage
const storedTheme = localStorage.getItem('theme');

// Set the theme based on the stored value
if (storedTheme) {
  setTheme(storedTheme);
}

themeButton.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    setTheme('light-theme');
  } else {
    setTheme('dark-theme');
  }
});



const header = document.querySelector('.header');
const scrollThreshold = 90; // Adjust this value to control when the color change starts

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const ddIcon = document.querySelector('.bx-menu');
const dropdown = document.querySelector('.dropdownlist-wrapper');

ddIcon.addEventListener("click", () => {
  dropdown.classList.toggle("displaynone");
});

