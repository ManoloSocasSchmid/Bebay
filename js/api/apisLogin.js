// Initialize Firebase
let config = {
    apiKey: 'AIzaSyDmaNC3SH6UFsk2U6YzobO3BKyKVYImP_s',
    authDomain: 'awesomeproyect-7d853.firebaseapp.com',
    databaseURL: 'https://awesomeproyect-7d853.firebaseio.com',
    projectId: 'awesomeproyect-7d853',
    storageBucket: '',
    messagingSenderId: '161100594926',
};
firebase.initializeApp(config);

/**
 * sign In with twitter acount
 */
function signinTwitter() {
    let provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().useDeviceLanguage();
    provider.setCustomParameters({
        'lang': 'es',
    });
    doTheSignIn(provider);
}

/**
 * function to sign in with gitHub
 */
function signinGit() {
    let provider = new firebase.auth.GithubAuthProvider();
    doTheSignIn(provider);
}

/**
 * function to sing in wiht google
 */
function signInGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    provider.setCustomParameters({
        'login_hint': 'user@example.com',
      });
    doTheSignIn(provider);
}

/**
 * function to sign in with facebook
 */
function signInFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().useDeviceLanguage();
    doTheSignIn(provider);
}

/**
 * function to confirme de sign in.
 * @param {*} provider
 */
function doTheSignIn(provider) {
    firebase.auth().signInWithPopup(provider).catch(function(error) {});
}
