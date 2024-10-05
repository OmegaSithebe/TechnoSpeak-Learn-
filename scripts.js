document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Form Validation for Contact Form
    const contactForm = document.querySelector('form[action="submit_contact.php"]');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const subject = document.querySelector('#subject').value.trim();
            const message = document.querySelector('#message').value.trim();

            if (!name || !email || !subject || !message) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    // Form Validation for Login Form
    const loginForm = document.querySelector('form[action="submit_login.php"]');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            const email = document.querySelector('#email').value.trim();
            const password = document.querySelector('#password').value.trim();

            if (!email || !password) {
                event.preventDefault();
                alert('Please fill in both email and password.');
            }
        });
    }
});

// Toggle Active Class for Mobile Menu (CSS)
const navToggleCSS = `
    @media (max-width: 768px) {
        .nav-toggle {
            display: block;
            cursor: pointer;
        }

        nav ul {
            display: none;
            flex-direction: column;
        }

        nav ul.active {
            display: flex;
        }
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = navToggleCSS;
document.head.appendChild(styleSheet);


/*==========================================smooth scrolling for navigation links=========================================*/

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/*============================================================================================================================*/

// Dynamically Load Courses (Example)
const courseGrid = document.querySelector('.course-grid');
if (courseGrid) {
    const courses = [
        { title: 'Social Media Basics', description: 'Learn the fundamentals of social media marketing.', image: 'course1.jpg' },
        // Add more course objects here
    ];

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course';
        courseElement.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <a href="#" class="course-link">Learn More</a>
        `;
        courseGrid.appendChild(courseElement);
    });
}

/*======================================================================================================================*/

// Show Loading Spinner on Form Submission
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', () => {
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
    });
});



















