// Formats the phone numbers in the text input
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters

    if (input.length > 10) input = input.slice(0, 10); // Limit to 10 digits

    let formatted = input;

    if (input.length > 6) {
        formatted = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}`;
    } else if (input.length > 3) {
        formatted = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    } else if (input.length > 0) {
        formatted = `(${input}`;
    }

    e.target.value = formatted;
});
