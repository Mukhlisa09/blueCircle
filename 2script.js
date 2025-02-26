document.addEventListener("DOMContentLoaded", function() {
    let plate = document.getElementById("plate");

    plate.addEventListener("click", () => {
        document.getElementById("textbox").innerText = "You've clicked on the blue circle";
    });
});
