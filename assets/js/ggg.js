document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', function() {
        const moreContent = this.nextElementSibling;
        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'block';
            this.innerText = 'View Less'; // Change button text to View Less
        } else {
            moreContent.style.display = 'none';
            this.innerText = 'View More'; // Change button text back to View More
        }
    });
});
