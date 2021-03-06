const X_INVALID_MESSAGE = "Select X value";
const Y_INVALID_MESSAGE = "Fix Y value";
const R_INVALID_MESSAGE = "Select R value";

function checkYInput() {
    let yText = $("#y-value").val().replace(",", ".");
    let yVal = parseFloat(yText);
    if (/^(-?\d+)(\.\d+)?$/.test(yText) && yVal >= -3 && yVal <= 5) {
        $(this).css("border-color", "green");
        return true;
    } else {
        $(this).css("border-color", "red");
        return false;
    }
}

function checkY() {
    if(!checkYInput()){
        writeErrorMessage(Y_INVALID_MESSAGE);
        return false;
    }
    return true;
}

function checkX() {
    if($(".for-x input[type=\"radio\"]:checked").val() === undefined){
        writeErrorMessage(X_INVALID_MESSAGE);
        return false;
    }
    return true;
}

function writeErrorMessage(message) {
    $("#error-log").html(message);
}

function checkR() {
    if($(".r-value-selected-button").val() === undefined){
        writeErrorMessage(R_INVALID_MESSAGE);
        return false;
    }
    return true;
}


