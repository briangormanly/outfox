/*var scroll = new SmoothScroll('a[href*="#"]', {
	// Callback to run after scroll
	// Anchor is the element you're scrolling to
	// Toggle is the link that triggered the scroll
	after: function (anchor, toggle) {
		// Remove link from previously active link, if one exists
		var current = document.querySelector('active');
		if (current) {
			current.classList.remove('active');
		}

		// Add a class to the clicked toggle
		if (toggle) {
			toggle.classList.add('active');
		}
	} 
}); */

window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
    
});