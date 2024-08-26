// Initialize ScrollReveal with custom settings
const sr = ScrollReveal({
    distance: "80px",    // Distance the element will move during reveal
    duration: 2600,      // Duration of the animation in milliseconds
    delay: 450,          // Delay before the animation starts
    reset: true          // Reset animation when scrolling back to the element
});

// Reveal elements with specific settings

// Reveal the ".home .home-text" element
sr.reveal(".home .home-text", {
    delay: 200,          // Delay before starting the animation for this element
    origin: "top"        // Animation will start from the top of the viewport
});

// Reveal the ".home .home-image" element
sr.reveal(".home .home-image", {
    delay: 200,          // Delay before starting the animation for this element
    origin: "left",     // Animation will start from the left side of the viewport
    distance: "100px"   // Distance the element will move during reveal
});

// Reveal the "header nav" element
sr.reveal("header nav", {
    delay: 200,          // Delay before starting the animation for this element
    origin: "top"        // Animation will start from the top of the viewport
});
