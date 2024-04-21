document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('mouseover', function() {
        this.querySelector('.dropdown-menu').style.display = 'block';
      });
      dropdown.addEventListener('mouseout', function() {
        this.querySelector('.dropdown-menu').style.display = 'none';
      });
    });
  });
  