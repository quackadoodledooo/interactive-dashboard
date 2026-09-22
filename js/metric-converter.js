let calculate_button = document.getElementById("calculate");

calculate_button.addEventListener("click", function(event) {

    event.preventDefault();

    let input_value = document.getElementById("convert").value;
    input_value = parseFloat(input_value);

    let conversion = document.getElementById("convert-type");
    let options = conversion.getElementsByTagName("option");
    let selected_index = conversion.selectedIndex;
    let selected_option = options[selected_index];
    let output = document.getElementById("converter-output");
    let result;


    if (selected_index == 0) {
        result = input_value * 2.54;
        output.innerHTML = input_value + " inches is " + result.toFixed(2) + " centimeters.";

    } else if (selected_index == 1) {
        result = input_value * 30.48;
        output.innerHTML = input_value + " feet is " + result.toFixed(2) + " centimeters.";

    } else if (selected_index == 2) {
        result = input_value * 0.9144;
        output.innerHTML = input_value + " yards is " + result.toFixed(2) + " meters.";

    } else if (selected_index == 3) {
        result = input_value * 1.60934;
        output.innerHTML = input_value + " miles is " + result.toFixed(2) + " kilometers.";

    } else if (selected_index == 4) {
        result = input_value / 2.54;
        output.innerHTML = input_value + " centimeters is " + result.toFixed(2) + " inches.";

    } else if (selected_index == 5) {
        result = input_value / 30.48;
        output.innerHTML = input_value + " centimeters is " + result.toFixed(2) + " feet.";

    } else if (selected_index == 6) {
        result = input_value * 1.09361;
        output.innerHTML = input_value + " meters is " + result.toFixed(2) + " yards.";

    } else if (selected_index == 7) {
        result = input_value / 1.60934;
        output.innerHTML = input_value + " kilometers is " + result.toFixed(2) + " miles.";
    }
});