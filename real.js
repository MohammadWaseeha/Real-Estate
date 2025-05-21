document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Your Name"]').value;
  const email = document.querySelector('input[placeholder="Your Email"]').value;
  const message = document.querySelector('textarea[placeholder="Your Message"]').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
  } else {
    alert('Please fill out all fields before submitting.');
  }
});

document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const propertyCards = document.querySelectorAll('.property-card');
    let matchFound = false;

    propertyCards.forEach(card => {
        const propertyDetails = card.textContent.toLowerCase();
        if (propertyDetails.includes(searchInput)) {
            card.style.display = 'block'; // Show matching property
            matchFound = true;
        } else {
            card.style.display = 'none'; // Hide non-matching property
        }
    });

    if (!matchFound) {
        alert('No matching properties found. Please try a different search term.');
    }
});