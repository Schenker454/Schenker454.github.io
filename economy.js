/**
 * Created by Hatsumi on 27.07.2016.
 */
function calculatePrices() {
    var gasPrice = 17.7;
    var petrolTotalAmount = document.getElementById("rangeslider").value;
    document.getElementById("amountOutput").setAttribute("value", petrolTotalAmount);
    var petrolPrice = document.getElementById("petrolPrice").value;
    if(petrolPrice > gasPrice) {
        var totalPetrolPrice = Math.round(petrolTotalAmount * petrolPrice);
        var totalGasPrice = Math.round(petrolTotalAmount * gasPrice);
        var economy  = (totalPetrolPrice - totalGasPrice) * 12;
        document.getElementById("amountOutput").setAttribute("value", petrolTotalAmount + "л");
        document.getElementById("totalPetrolOutput").setAttribute("value", totalPetrolPrice + " р.");
        document.getElementById("totalGasOutput").setAttribute("value", totalGasPrice + " р.");
        document.getElementById("economy").setAttribute("value", economy + " р.");
    }
}

calculatePrices();