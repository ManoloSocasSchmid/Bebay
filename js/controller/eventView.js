/**
 * Load the events and function for interfaz.
 */
$( document ).ready(function() {
    hideSearch();
    addEvent();
});

/**
 * hides the extra brand filters
 */
function hideSearch() {
    $('.brands-tv, .brands-health').hide();
}

/**
 * Event for controlle interfaz.
 */
function addEvent() {
    $('.changeSignUpIn').click(function() {
        changeSignUpIn();
    });
    $('#nav-smartPhones-tab').click(function() {
        changeSearch('.brands-smartPhones');
    });
    $('#nav-tv-tab').click(function() {
        changeSearch('.brands-tv');
    });
    $('#nav-health-tab').click(function() {
        changeSearch('.brands-health');
    });
}
/** Change sign up and sign in */
function changeSignUpIn() {
    $('#signUpModal').modal('toggle');
    $('#signInModal').modal('toggle');
}

/**
 * Show or hide the search div.
 * @param {*} select is the selected div
 */
function changeSearch(select) {
    $('.brands').hide();
    $(select).show();
}