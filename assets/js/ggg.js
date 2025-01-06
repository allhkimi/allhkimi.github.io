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

document.addEventListener('DOMContentLoaded', (event) => {
  const currentTheme = localStorage.getItem('theme') || 'light-mode';
  document.body.classList.add(currentTheme);
});

document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light-mode';

  document.body.classList.add(currentTheme);

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

    const newTheme = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', newTheme);
  });
});
