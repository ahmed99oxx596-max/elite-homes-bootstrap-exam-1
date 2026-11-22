



// Search Form
const searchForm = document.getElementById("searchForm");

if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const location = document.getElementById("location").value;
        const propertyType = document.getElementById("propertyType").value;

        alert(
            "Searching Properties\n" +
            "Location: " + (location || "All Locations") + "\n" +
            "Property Type: " + (propertyType || "All Types")
        );
    });
}

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you! Your message has been received.");
        contactForm.reset();
    });
}

// Close mobile navbar after clicking a link
const navbarLinks = document.querySelectorAll(
    "#mainNavbar .nav-link:not(.dropdown-toggle)"
);

const navbarMenu = document.getElementById("mainNavbar");

navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (window.innerWidth < 992 && navbarMenu.classList.contains("show")) {
            const collapse = Collapse.getOrCreateInstance(navbarMenu);
            collapse.hide();
        }
    });
});

// Testimonials Slider

const testimonialTrack = document.getElementById("testimonialTrack");
const nextClient = document.getElementById("nextClient");
const prevClient = document.getElementById("prevClient");

if (testimonialTrack && nextClient && prevClient) {

    nextClient.addEventListener("click", function () {
        const slide = testimonialTrack.querySelector(".testimonial-slide");
        const gap = 22;

        testimonialTrack.scrollBy({
            left: slide.offsetWidth + gap,
            behavior: "smooth"
        });
    });

    prevClient.addEventListener("click", function () {
        const slide = testimonialTrack.querySelector(".testimonial-slide");
        const gap = 22;

        testimonialTrack.scrollBy({
            left: -(slide.offsetWidth + gap),
            behavior: "smooth"
        });
    });

}

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {
        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
                otherItem.querySelector(".faq-icon").textContent = "+";
            }
        });

        item.classList.toggle("active");

        icon.textContent = item.classList.contains("active") ? "−" : "+";
    });
});

