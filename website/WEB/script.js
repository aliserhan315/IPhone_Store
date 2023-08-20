const showMoreBtns = document.querySelectorAll('.show-more-btn');
const descriptions = document.querySelectorAll('#description');

showMoreBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (descriptions[index].style.display === 'none') {
      descriptions[index].style.display = 'block';
      btn.textContent = 'Show Less';
    } else {
      descriptions[index].style.display = 'none';
      btn.textContent = 'Show More';
    }
  });
});
