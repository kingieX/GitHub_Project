// Smooth scroll to anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust scroll position for fixed navigation bar
                behavior: 'smooth'
            });
        }
    });
});

// Animation on role
document.addEventListener('DOMContentLoaded', function() {
  const roles = ["WEB DEVELOPER", "UI/UX DESIGNER", "FRONT-END DEVELOPER"];
  let currentRoleIndex = 0;
  const roleElement = document.querySelector('.role');

  function typeWriter(text, index, callback) {
      if (index < text.length) {
          roleElement.innerHTML = text.substring(0, index + 1);
          setTimeout(() => {
              typeWriter(text, index + 1, callback);
          }, 100);
      } else {
          setTimeout(callback, 2000); // Wait before starting to delete
      }
  }

  function deleteWriter(text, callback) {
      if (text.length > 0) {
          roleElement.innerHTML = text.substring(0, text.length - 1);
          setTimeout(() => {
              deleteWriter(text.substring(0, text.length - 1), callback);
          }, 50);
      } else {
          callback();
      }
  }

  function startAnimation() {
      typeWriter(roles[currentRoleIndex], 0, () => {
          deleteWriter(roles[currentRoleIndex], () => {
              currentRoleIndex = (currentRoleIndex + 1) % roles.length;
              startAnimation();
          });
      });
  }

  startAnimation();
});


// skills
document.addEventListener('DOMContentLoaded', function() {
  const skillsSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-bar');

  function checkVisibility() {
      const rect = skillsSection.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

      if (rect.top <= windowHeight && rect.bottom >= 0) {
          skillsSection.classList.add('visible');
          skillBars.forEach(bar => {
              const level = bar.getAttribute('data-level');
              bar.style.width = level;
          });
          window.removeEventListener('scroll', checkVisibility); // Stop listening to scroll after animation
      }
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check in case the section is already in view
});


// observerfunction

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});


const hiddenClassElements = document.querySelectorAll('.hidden');
hiddenClassElements.forEach((el) => observer.observe(el));

// functio for sending mail
(function() {
    emailjs.init('6bm-07bPVDeCONVUf'); // Replace 'YOUR_USER_ID' with your EmailJS user ID
 })();

 document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this; //to set the reset

    emailjs.sendForm('service_jsoc31l', 'template_9bigfoo', this)
        .then(function() {
            alert('Email sent successfully!');
            form.reset(); // Reset form fields after successful submission
        }, function(error) {
            alert('Failed to send email. Please try again later.');
        });
});