particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, // Number of dots
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#808080" // Gray dots 
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#808080", // Gray lines 
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Lines will "grab" your mouse
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    }
  },
  "retina_detect": true
});
document.querySelector('.btn-about').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor jump
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    // Scroll to the section with a smooth behavior
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Aligns the top of the section to the top of the viewport
    });
});