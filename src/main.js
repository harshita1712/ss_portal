
    // Get the navbar element
    const navbar = document.getElementById('navbar');

    // Function to handle the scroll event
    function handleScroll() {
        if (window.scrollY > 100) {
            // Add a class to change the background color when scrolling
          
            navbar.classList.add('shadow-md');
        } else {
            // Remove the class when the user scrolls back to the top
            navbar.classList.remove('shadow-md');
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
