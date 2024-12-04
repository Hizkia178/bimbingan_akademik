window.onload = function () {
    const dateElement = document.getElementById("date-time");
    const nimElement = document.getElementById("nim");
    const nameElement = document.getElementById("name");

    // Display current date and time
    function updateDateTime() {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = today.toLocaleDateString('id-ID', options);
        dateElement.textContent = dateStr;
    }

    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute

    // Placeholder for NIM and Name (can be dynamic)
    nimElement.textContent = "NIM: 123456789";
    nameElement.textContent = "Nama: John Doe";
}
