document.getElementById("learn-more-btn").addEventListener("click", function () {
    const extraInfo = document.getElementById("extra-info");
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
    } else {
        extraInfo.style.display = "none";
    }
});
