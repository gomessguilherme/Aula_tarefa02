function animateSearchIcon() {
   const searchIcon = document.querySelector('i.bi-search');
   searchIcon.addEventListener('mouseenter', () => {
     searchIcon.style.transform = 'scale(1.2)';
   });
   searchIcon.addEventListener('mouseleave', () => {
     searchIcon.style.transform = 'scale(1)';
   });
 }
 
 
 function changeAvaliacaoColor() {
   const avaliacaoSection = document.getElementById('avaliacao');
   avaliacaoSection.addEventListener('click', () => {
     avaliacaoSection.style.backgroundColor = 'pink';
   });
 }
 

 animateSearchIcon();
 changeAvaliacaoColor();