


window.addEventListener('scroll', function () {
    var navbar = document.getElementById('nav-all-1');
    if (window.scrollY > 10* parseFloat(getComputedStyle(document.documentElement).fontSize)) {
        navbar.style.backgroundColor = 'white'; // Change background color
        navbar.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1)'; // Add black shadow at bottom
        navbar.querySelectorAll('.nav-all-1').forEach(function (link) {
            link.style.color = 'black'; // Change text color
        });
    } else {
        navbar.style.backgroundColor = 'transparent'; // Reset background color
        navbar.style.boxShadow = 'none'; // Reset shadow
        navbar.querySelectorAll('.nav-all-1').forEach(function (link) {
            link.style.color = 'white'; // Reset text color
        });
    }
});






// for top silder 

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
    updateActiveDot(index);
};

const updateActiveDot = (index) => {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
};

showSlide(slideIndex);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIndex = index;
        showSlide(slideIndex);
        updateDotColor(index);
    });
});

slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        slideIndex = index;
        showSlide(slideIndex);
        updateDotColor(index);
    });
});

const updateDotColor = (index) => {
    dots.forEach(dot => {
        dot.style.backgroundColor = "transparent";
        dot.style.border = "2px solid rgb(210, 208, 208)"; // Reset border for all dots
    });
    dots[index].style.backgroundColor = "rgb(210, 208, 208)"; // Change background color of dot for active slide
    dots[index].style.border = "2px solid rgb(210, 208, 208)"; // Change border color of dot for active slide
};

// for conter 

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-value');
    const targetValues = [275, 170, 130];
    const initialValues = [240, 160, 120];
    const duration = 2000; // Animation duration in milliseconds
    const steps = 100; // Number of steps for the animation

    counters.forEach((counter, index) => {
        let currentValue = initialValues[index]; // Set initial value

        const updateCounter = () => {
            const increment = (targetValues[index] - initialValues[index]) / steps; // Calculate increment per step
            if (currentValue < targetValues[index]) {
                counter.textContent = Math.min(currentValue, targetValues[index]).toFixed(0).padStart(3, '0');
                currentValue += increment;
                setTimeout(updateCounter, duration / steps); // Update every step
            }
        };
        updateCounter();
    });
});

// for software slider 


document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector(".cards-container");
    const cardWidth = document.querySelector(".card").offsetWidth;
    const transitionDuration = 4000; // Adjust duration as needed
    const interval = transitionDuration + 1000; // Add 1 second for each card transition

    function moveCards() {
        const firstCard = cardsContainer.firstElementChild;
        cardsContainer.style.transition = `transform ${transitionDuration / 1000}s ease-in-out`; // Enable transition
        cardsContainer.style.transform = `translateX(-${cardWidth}px)`; // Move the cards to the left side
        setTimeout(() => {
            cardsContainer.appendChild(firstCard);
            cardsContainer.style.transition = "none"; // Disable transition
            cardsContainer.style.transform = "translateX(0)"; // Reset position
        }, transitionDuration); // Wait for transition duration
    }

    setInterval(moveCards, interval); // Start moving the cards
});

