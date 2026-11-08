
console.log("DNL Connect Link Digital Solutions website loaded successfully.");

const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {
    whatsappForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        const whatsappMessage = [
            "Hello DNL Connect Link Digital Solutions,",
            "",
            "I would like to make an inquiry.",
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone / WhatsApp: ${phone}`,
            `Service: ${service}`,
            `Message: ${message}`
        ].join("\n");

        const whatsappNumber = "254740246773";

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");
    });
}
