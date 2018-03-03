/**
 * SignIn form
 */
class SignIn extends React.Component {
    // /** */
    // componentDidMount() {
    //     $(this).on('submit', 'form', validateSignUp);
    // }
    /**
     * @return {component}
     */
    render() {
        return (
            <div id="signInModal" className="modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>SignIn to Project X (DEW Prices)</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-valdation" noValidate>
                                <div className="form-group">
                                    <label htmlFor="emailSignIn">Email Address</label>
                                    <input className="form-control" type="email" id="emailSignIn" placeholder="e.g. luke@thelastjedi.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        It must be a valid email.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passSignIn">Password:</label>
                                    <input className="form-control" type="password" id="passSignIn" placeholder="e.g. yodaforce" pattern=".{6,}" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        Password should atleast 6 characters.
                                    </div>
                                </div>
                                <button className="btn btn-primary">SignIn</button>
                            </form>
                            <h5 className="text-center">Or use one of these</h5>
                            <div className="d-flex flex-column text-white">
                                <a id="signInTwitter" className="btn btn-block btn-twitter">
                                    <i className="fab fa-twitter"></i> SignIn with Twitter
                                </a>
                                <a id="signInGoogle" className="btn btn-block btn-google">
                                    <i className="fab fa-google"></i> SignIn with Google
                                </a>
                                <div id="loginFacebook" className="btn btn-block btn-facebook">
                                    <i className="fab fa-facebook"></i> SignIn with Facebook
                                </div>
                                <a id="signInGit" className="btn btn-block btn-github">
                                    <i className="fab fa-github"></i> SignIn with GitHub
                                </a>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <h6>Still don't have an account?</h6>
                            <a className="changeSignUpIn" href="#">SignUp</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}