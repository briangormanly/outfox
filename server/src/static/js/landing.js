var scroll = new SmoothScroll('a[href*="#"]', {
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
});