// This waits for the page to be ready
$(function() {
    // This finds the element with id="navbar-placeholder"
    // and injects the HTML from "navbar.html" into it
    $("#navbar-placeholder").load("navbar.html");

    // This does the same thing for the footer
    $("#footer-placeholder").load("footer.html");
});