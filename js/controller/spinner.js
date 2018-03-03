/**
 * Hide the spinner.
*/
function hideSpinner() {
    $('.spinner').hide();
}

/**
 * Show the spinner.
*/
function showSpinner() {
    $('.spinner').show();
}

/**
 * shows Big Spinner
 */
function showModalSpinner() {
    $('#spinnerModal').modal({
        backdrop: 'static',
        keyboard: false,
    });
    $('#spinnerModal').modal('show');
}

/**
 * hides Big Spinner
 */
function hideModalSpinner() {
    $('#spinnerModal').modal('hide');
}
