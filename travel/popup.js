// Get the popup element
const popup = document.getElementById('popup');

// Select all area elements
const areas = document.querySelectorAll('area');

areas.forEach(area => {
    // When hovering on the area
    area.addEventListener('mouseenter', function(event) {
        const name = this.getAttribute('data-name');
        const language = this.getAttribute('data-language');
        const popular = this.getAttribute('data-popular');
        const visitor = this.getAttribute('data-visitor');

        // Display the information in the popup
        popup.innerHTML = `<strong>${name}</strong><br>
                           Languages: ${language}<br>
                           Popular Attractions: ${popular}<br>
                           Total visitor: ${visitor}`;

        popup.style.display = 'block';
        popup.style.left = event.pageX + 'px';
        popup.style.top = event.pageY + 'px';
    });

    area.addEventListener('mouseleave', function() {
        popup.style.display = 'none';
    });
});