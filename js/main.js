/**
 * Creates the whole app body
 */
class Main extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        return (
            <div>
                <MainBody/>
            </div>
        );
    }
}
React.render( < Main />, document.body);

/**
 * Store the social-media which was login
 */
let signInWith;

/**
 * Store the buttons nodes to rewrite again, when logout
 */
let buttonsSign;

/**
 * Boolean, true if there is a user logged in
 */
let aUserLoggedIn = false;

$('#signInTwitter').on('click', signinTwitter);
$('#signInGit').on('click', signinGit);
$('#signInGoogle').on('click', signInGoogle);
$('#signInFacebook').on('click', signInFacebook);

/**
 * Listener to the change state authenticate, print the hello in the header
 */
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        aUserLoggedIn = true;
        let $divButtonsHeader = $('#buttonsSign');
        buttonsSign = $divButtonsHeader.children().detach();
        let welcome =
            `Greetings my young Padawan 
                ${user.displayName || user.email.split('@')[0]}, 
            <h5>
                <span id="logout" class="badge badge-light ml-2 align-top">
                    Log out</span>
            </h5>`;
        $divButtonsHeader.append(welcome);
        signInWith = 'twitter';
        $('#logout').on('click', logOutAccount);
        $('#signInModal').modal('hide');
        $('#signUpModal').modal('hide');
    }
});

/**
 * Do logout depending the api which did login
 */
function logOutAccount() {
    if (signInWith == 'twitter') {
        firebase.auth().signOut().catch(function(error) {});
    }

    if (signInWith == 'facebook') {
        FB.logout();
    }

    aUserLoggedIn = false;

    let $divButtonsHeader = $('#buttonsSign');
    $divButtonsHeader.empty();
    $divButtonsHeader.append(buttonsSign);
}

React.render(<Main/>, document.body);

/**
 * while you write we searchitems
 */
$('#searchField').on('keyup', function() {
    searchItem();
});

/**
 * function for advanced search click and key events
 */
$('#advancedSearch').find('button').on('click', function() {
    searchItem();
});

/**
 * advanced search enter function
 */
$('#advancedSearch').on('keypress', function(event) {
    if (event.keyCode == 13) {
        searchItem();
    }
});

/**
 *  on submit of modal validate signup
 */
$('#signUpModal').on('submit', 'form', validateSignUp);

// on submit of singin validate signup
$('#signInModal').on('submit', 'form', validateSignIn);

// on keypress "Enter" this form submits.
$('form').on('keypress', function(event) {
    if (event.keyCode == 13) {
       this.submit();
    }
});

/**
 * Paginate function from plugin
 * @param {Object} options
 */
function paginate(options) {
    let items = $(options.itemSelector);
    let numItems = items.length;
    let perPage = options.itemsPerPage;
    items.slice(perPage).hide();
    $(options.paginationSelector).pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: 'dark-theme',
        onPageClick: function(pageNumber) {
            let showFrom = perPage * (pageNumber - 1);
            let showTo = showFrom + perPage;
            items.hide()
                .slice(showFrom, showTo).show();
            return false;
        },
    });
}

/**
 * function designed to paginate all 3 tabs leaving
 * 12 elements per page
 */
function paginateTabs() {
    paginate({
        itemSelector: '#nav-smartPhones .card-group .card',
        paginationSelector: '#nav-smartPhones .pagination',
        itemsPerPage: 12,
    });
    paginate({
        itemSelector: '#nav-tv .card-group .card',
        paginationSelector: '#nav-tv .pagination',
        itemsPerPage: 12,
    });
    paginate({
        itemSelector: '#nav-health .card-group .card',
        paginationSelector: '#nav-health .pagination',
        itemsPerPage: 12,
    });
}

// When de body is ready we get all tabs rdy loading the data.
$(document).ready(function() {
    showModalSpinner();
    for (let i = 0; i < ebayKeyWords.length; i++) {
        callEbay(ebayKeyWords[i], bestBuyCats[i], containers[i]);
    }
    loadLimitsRangeSlider();
});
