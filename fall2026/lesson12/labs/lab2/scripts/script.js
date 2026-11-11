/*
    Student Name: Diana Ruiz
    File Name: script.js
    Date: 11/4/2026
*/

document.addEventListener("DOMContentLoaded", function () {
  // Enable dropdown-submenu functionality
  document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      
      let submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains('dropdown-menu')) {
        submenu.classList.toggle('show');

        // Close other sibling submenus
        let parentMenu = this.closest('.dropdown-menu');
        if (parentMenu) {
          let otherSubmenus = parentMenu.querySelectorAll('.dropdown-menu.show');
          otherSubmenus.forEach(function (el) {
            if (el !== submenu) {
              el.classList.remove('show');
            }
          });
        }
      }
    });
  });

  // Close all submenus when Bootstrap dropdown is hidden
  document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('hidden.bs.dropdown', function () {
      this.querySelectorAll('.dropdown-menu.show').forEach(function (submenu) {
        submenu.classList.remove('show');
      });
    });
  });
});





