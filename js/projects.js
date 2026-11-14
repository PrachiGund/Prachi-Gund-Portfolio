/**
 * DATA ANALYST PORTFOLIO - PROJECTS JAVASCRIPT
 * Handles category filtering for Prachi Gund's portfolio projects
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active class on buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const selectedFilter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const categories = card.getAttribute('data-category') || '';

          if (selectedFilter === 'all' || categories.split(' ').includes(selectedFilter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
