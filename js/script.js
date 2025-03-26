document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".skill-bar").forEach(function (bar) {
        let percentage = bar.getAttribute("data-percent");
        bar.style.width = percentage;
        bar.style.transition = "width 2s ease-in-out";
    });
});