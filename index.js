function submitRate() {
    document.getElementById("rating").style.visibility = "hidden";
    document.getElementById("rating").style.opacity = "0";
    document.getElementById("thankYou").style.visibility = "visible";
    document.getElementById("thankYou").style.opacity = "1";
    try {
        document.getElementById("rateNum").textContent = document.querySelector("input[name='rate']:checked").value;
    } catch {
        document.getElementById("rateMsg").textContent = "You didn't select a rate";
        document.getElementById("submitHeading").textContent = ":(";
        document.getElementById("submitParagraph").textContent = "Please select a rate from 1 to 5";
    }
}