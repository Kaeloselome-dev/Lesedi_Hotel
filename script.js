document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const checkIn = document.getElementById("checkIn").value.trim();
        const checkOut = document.getElementById("checkOut").value.trim();
        const roomType = document.getElementById("roomType").value.trim();
        const messageBox = document.getElementById("messageBox");

        if (name === "" || email === "" || phone === "" || checkIn === "" || checkOut === "" || roomType === "") {
            messageBox.innerHTML = `<div class="alert alert-danger">Please fill in all fields before booking.</div>`;
        } else {
            messageBox.innerHTML = `<div class="alert alert-success">Booking Successful! Thank you for choosing Lesedi Hotel.</div>`;
            bookingForm.reset(); // Clear the form after successful submission
        }
    });
});
