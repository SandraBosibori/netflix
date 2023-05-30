const parent = document.querySelector('.class');

// Add event listener to the parent list element
parent.addEventListener('click', function(event) {
  // Check if the clicked element is a list item
  if (event.target.tagName === 'LI') {
    // Toggle the visibility of the sub-list by adding/removing the 'hidden' class
    const child = event.target.querySelector('.child');
    child.classList.toggle('hidden');
  }
});