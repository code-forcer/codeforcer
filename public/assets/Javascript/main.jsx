// Wait for the DOM content to fully load
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
  
    if (loader) {
      // Simulate loading delay for demonstration
      setTimeout(() => {
        loader.classList.add('disappear');
      }, 2000); // Adjust delay as needed
    }
  });
  
  // Window onload event handler
  window.onload = function() {
    // Navbar sticky and scroll-up button logic
    window.addEventListener("scroll", () => {
      let navbar = document.querySelector(".navbar");
      let scrollUpBtn = document.querySelector('.scroll-up-btn');
  
      if (navbar && scrollUpBtn) {
        if (window.scrollY > 30) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
  
        if (window.scrollY > 500) {
          scrollUpBtn.classList.add('show');
        } else {
          scrollUpBtn.classList.remove('show');
        }
      }
    });
  
    // Scroll to top button functionality
    let scrollUpBtn = document.querySelector('.scroll-up-btn');
    let html = document.querySelector('html');
  
    if (scrollUpBtn && html) {
      scrollUpBtn.addEventListener('click', () => {
        html.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    }
  
    // Mobile navigation button effect
    let nav = document.querySelector(".navbar ul");
    let btn = document.querySelector(".menu-btn");
    let closeNav = document.querySelectorAll(".closeNav");
    let bar1 = document.querySelector(".bar1");
    let bar2 = document.querySelector(".bar2");
    let bar3 = document.querySelector(".bar3");
  
    if (btn && nav && closeNav.length && bar1 && bar2 && bar3) {
      btn.addEventListener("click", () => {
        nav.classList.toggle("active");
        bar3.classList.toggle("close");
        bar2.classList.toggle("close");
        bar1.classList.toggle("close");
      });
  
      // Mobile navigation close effect
      closeNav.forEach(function(closeNavs) {
        closeNavs.addEventListener('click', () => {
          nav.classList.toggle("active");
          btn.classList.toggle("active");
          bar3.classList.toggle("close");
          bar2.classList.toggle("close");
          bar1.classList.toggle("close");
        });
      });
    }
  };
  