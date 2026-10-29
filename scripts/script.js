/*
Student: Diana Ruiz
Updated on: 10/27/26
File Name: scripts.js
*/

//Hamburger menu function
function hamburger() {
    //Local Variable
    var menu = document.getElementById("menu-links");//'menu' variable is assigned to the 'menu-links' id on the HTML document
    var icon = document.getElementsByClassName("menu-icon");// 'logo' variable is assigned to the  'logo' class on the HTML document
    if (menu.style.display==="none" && icon.style.display==="block" ) {
        menu.style.display = "none";
        icon.style.display = "block";
    }else{
        menu.style.display = "block";
        icon.style.display = "block";
    }
}