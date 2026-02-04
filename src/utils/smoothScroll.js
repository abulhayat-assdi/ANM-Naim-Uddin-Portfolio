// Instant scroll utility function - scrolls immediately without animation
export const smoothScrollTo = (elementId, offset = -140) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;

    // Instant scroll without animation
    window.scrollTo(0, targetPosition);
};

// Scroll to top function
export const scrollToTop = () => {
    window.scrollTo(0, 0);
};
