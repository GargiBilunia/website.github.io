
//whats new
let slideIndex = 1;
showSlide(slideIndex);

// Automatic slide change interval (in milliseconds)
const slideInterval = 5000; // 5 seconds

// Function to display a specific slide
function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-slide");

    // Wrap around when reaching the first or last slide
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Function to display the next slide
function nextSlide() {
    showSlide(slideIndex += 1);
}

// Function to display the previous slide
function prevSlide() {
    showSlide(slideIndex -= 1);
}

// Automatically change slides at a specified interval
setInterval(nextSlide, slideInterval);

//date time
function updateDateTime() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('date-time').textContent = formattedDateTime;
}

// Update the date and time immediately
updateDateTime();

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);

//bday

document.addEventListener('DOMContentLoaded', function () {
    const pageButtons = document.querySelectorAll('.pageBtn');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const pages = document.querySelectorAll('.page');
    let currentPageIndex = 0;

    function showPage(pageIndex) {
        if (pageIndex < 0) {
            pageIndex = pages.length - 1;
        } else if (pageIndex >= pages.length) {
            pageIndex = 0;
        }

        for (let i = 0; i < pages.length; i++) {
            pages[i].classList.remove('active');
        }

        pages[pageIndex].classList.add('active');
        currentPageIndex = pageIndex;
    }

    function goToPage(event) {
        const targetPageIndex = parseInt(event.target.getAttribute('data-page'), 10) - 1;
        showPage(targetPageIndex);
    }

    function goToPreviousPage() {
        showPage(currentPageIndex - 1);
    }

    function goToNextPage() {
        showPage(currentPageIndex + 1);
    }

    for (let i = 0; i < pageButtons.length; i++) {
        pageButtons[i].addEventListener('click', goToPage);
    }

    prevButton.addEventListener('click', goToPreviousPage);
    nextButton.addEventListener('click', goToNextPage);

    // Initialize the first page
    showPage(0);
});



