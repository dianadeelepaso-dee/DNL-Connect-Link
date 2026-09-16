console.log("DNL Connect Link Digital Solutions website loaded successfully.");

const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {

    whatsappForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
            "Hello DNL Connect Link Digital Solutions,%0A%0A" +
            "I would like to make an inquiry.%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Email: " + encodeURIComponent(email) + "%0A" +
            "Phone / WhatsApp: " + encodeURIComponent(phone) + "%0A" +
            "Service: " + encodeURIComponent(service) + "%0A" +
            "Message: " + encodeURIComponent(message);

        const whatsappNumber = "254740246773";

        const whatsappURL =
            "https://wa.me/" + whatsappNumber +
            "?text=" + whatsappMessage;

        window.open(whatsappURL, "_blank");

    });

}