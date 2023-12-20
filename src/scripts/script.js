document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll(".scroll-down");
    scrollLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top;
                const scrollOptions = { top: offset, behavior: "smooth" };
                window.scrollTo(scrollOptions);
            }
        });
    });
});