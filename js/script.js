document.addEventListener("DOMContentLoaded", function () {
    let duration = 2000; 
    let numbers = document.querySelectorAll(".animated-number");

    numbers.forEach(num => {
        let targetValue = parseInt(num.getAttribute("data-target")); 
        let targetText = num.getAttribute("data-target"); 
        let intervalTime = duration / targetValue; 
        let counter = 0;

        let interval = setInterval(() => {
            if (counter >= targetValue) {
                clearInterval(interval);
                num.textContent = targetText.includes("+") ? targetValue + "+" : targetValue;
            } else {
                counter++;
                num.textContent = counter;
            }
        }, intervalTime);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".skill-bar").forEach(function (bar) {
        let percentage = parseInt(bar.getAttribute("data-percent")); 
        bar.style.transition = "width 2s ease-in-out"; 
        bar.style.width = percentage + "%"; 
        
        
        let counter = 0;
        let textElement = bar.parentElement.nextElementSibling; 
        let interval = setInterval(function () {
            if (counter >= percentage) {
                clearInterval(interval);
            } else {
                counter++;
                textElement.textContent = counter + "%"; 
            }
        }, 20); 
    });
});


// Sample testimonials data
const testimonials = [
    {
        text: "I excel in essential design skills, creating visually stunning and functional digital experiences. From UI design to UX research, my passion is to craft effective and memorable digital solutions.",
        image: "assets/img/test.png",
        author: "John Smith",
        post: " / Designer"
    },
    {
        text: "Amazing work, exceeded expectations! Your attention to detail was top-notch.",
        image: "assets/myimg/myimg 1.jpg",
        author: "Jane Doe",
        post: " / Project Manager"
    },
    {
        text: "The design was exactly what we needed. Great communication and professionalism throughout!",
        image: "assets/myimg/kaka.jpg",
        author: "Mark Lee ",
        post: " / CEO"
    }
];

let currentIndex = 0;
let autoPlayInterval;
const slider = document.getElementById('testimonial-slider');

// Initialize the slider
function initSlider() {
    slider.innerHTML = '';
    
    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = 'testo-slide min-w-full px-4';
        slide.innerHTML = `
            <p class="body-medium-regular flex justify-center items-center w-full sm:h-[72px] mx-auto text-center text-mDark">
                ${testimonial.text}
            </p>
            <div class="mx-w-[368px] mt-[30px] h-[70px] flex flex-row gap-[16px] items-center justify-center">
                <img class="h-[70px] w-[70px]  rounded-full" src="${testimonial.image}" alt="${testimonial.author}">
                <div class="flex    items-start">
                    <p class="body-medium-bold">${testimonial.author}</p>
                    <p class="body-medium-regular">${testimonial.post}</p>
                </div>
            </div>
        `;
        slider.appendChild(slide);
    });
    
    updateSliderPosition();
    startAutoPlay();
}

// Update slider position based on currentIndex
function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Go to next testimonial
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSliderPosition();
    resetAutoPlay();
}

// Go to previous testimonial
function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSliderPosition();
    resetAutoPlay();
}

// Start auto-play
function startAutoPlay() {
    autoPlayInterval = setInterval(nextTestimonial, 5000); // Change slide every 5 seconds
}

// Reset auto-play timer
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Pause auto-play when hovering over slider
slider.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

// Resume auto-play when mouse leaves slider
slider.addEventListener('mouseleave', () => {
    startAutoPlay();
});

// Initialize the slider when page loads
window.addEventListener('DOMContentLoaded', initSlider);