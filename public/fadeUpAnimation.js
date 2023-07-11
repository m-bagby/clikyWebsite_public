// Function to handle scroll and trigger fade up animations for elements on screen
function handleScroll() {
    const fadeUpElements = document.querySelectorAll('.fadeUp');

    fadeUpElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementInView = rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 200;

        if (elementInView) {
            element.classList.add('fadeUpShow');
        }
    });
}


// Add event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
window.addEventListener('load', handleScroll);