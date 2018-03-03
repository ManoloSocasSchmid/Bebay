/**
 * Event for controller the login facebook.
 */
$(document).ready(function() {
    $('#loginFacebook').on('click', function() {
        logoinFacebook();
    });
    $('#logout').on('click', function() {
        logoutFacebook();
    });
});

/**
 * Confirm if login with facebook or open windows facebook.
*/
function logoinFacebook() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            FB.api('/me?fields=id,name,first_name,' +
            'last_name,email,picture.type(large)'
                , function(userData) {
                let $divButtonsHeader = $('#buttonsSign');
                buttonsSign = $divButtonsHeader.children().detach();
                let welcome =
                    `Greetings my young Padawan 
                    ${userData.name || user.email.split('@')[0]}, 
                    <h5>
                        <span id="logout" 
                        class="badge badge-light ml-2 align-top">
                            Log out</span>
                    </h5>`;
                $divButtonsHeader.append(welcome);
                signInWith = 'twitter';
                $('#logout').on('click', logOutAccount);
                $('#signInModal').modal('hide');
            });
        } else {
            FB.login();
        }
    }, {
        scope: 'public_profile, email',
    });
}
/**
 * Close login with facebook.
*/
function logoutFacebook() {
    FB.logout();
}
/**
 * Requisitos for work with facebook.
*/
window.fbAsyncInit = function() {
    FB.init({
        appId: '156099155053455',
        xfbml: true,
        version: 'v2.12',
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id) {
    let js;
    let fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
