// Dropdown functionality
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseenter', () => {
  dropdown.querySelector('.dropdown-content').style.display = 'block';
});
dropdown.addEventListener('mouseleave', () => {
  dropdown.querySelector('.dropdown-content').style.display = 'none';
});

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you, ' + name + '! Your message has been sent.');
  contactForm.reset();
});

// Email Validation Function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Smooth Scrolling
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


