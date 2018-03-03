/**
 * Validates signUP form
 * @param {*} event
 */
function validateSignUp(event) {
    event.preventDefault();
    event.stopPropagation();
    let $modal = $('#signUpModal');
    let $form = $modal.find('form');

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let email = $('#email').val();
    let pass = $('#pass').val();
    let passSec = $('#passSec').val();

    if (!(pass).match(passSec)) {
        let $passFields = $('#signUpModal').find('[type = password]');
        $('.passwordError').text('Your passwords don\'t match');
        $passFields.addClass('is-invalid');
        $passFields.val('');
    } else if (this.checkValidity()) {
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
            let htmlAlert = `
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Oops!</strong> ${error.message}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `;
            $modal.find('.modal-body').prepend(htmlAlert);
            $form[0].reset();
            $form.removeClass('was-validated');
        });
        $form[0].reset();
        $form.removeClass('was-validated');
    } else {
        $(this).addClass('was-validated');
    }
}

/**
 * Validates the sign IN form
 * @param {*} event
 */
function validateSignIn(event) {
    event.preventDefault();
    event.stopPropagation();

    let email = $('#emailSignIn').val();
    let pass = $('#passSignIn').val();
    let $modal = $('#signInModal');
    let $form = $modal.find('form');

    if (this.checkValidity()) {
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
            let htmlAlert = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Oops!</strong> ${error.message}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `;
            $modal.find('.modal-body').prepend(htmlAlert);
        });
        $form[0].reset();
    } else {
        $(this).addClass('was-validated');
    }
}
