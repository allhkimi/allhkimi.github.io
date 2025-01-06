// This script enables the "View More" interaction
document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', function() {
        alert('Additional information will be displayed here.');
    });
});
