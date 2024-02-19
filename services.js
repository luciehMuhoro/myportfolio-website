function toggleDescription(element) {
    var descriptionText = document.getElementById("descriptionText");
    var serviceName = element.textContent.trim();
    
    if (descriptionText.innerHTML === serviceName + " description") {
        descriptionText.innerHTML = "";
        element.style.backgroundColor = "";
    } else {
        descriptionText.innerHTML = serviceName + " description";
        element.style.backgroundColor = "lightblue";
    }
}
