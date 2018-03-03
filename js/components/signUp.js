/**
 * SignUp form
 */
class SignUp extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        return (
            <div id="signUpModal" className="modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>SignUp to Project X (DEW Prices)</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-valdation" noValidate>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name:</label>
                                    <input className="form-control" type="text" id="firstName" placeholder="e.g. Chewbacca" pattern=".{3,}" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        This field is required.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input className="form-control" type="text" id="lastName" placeholder="e.g. Wookiee" pattern=".{3,}" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        This field is required.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address:</label>
                                    <input className="form-control" type="email" id="email" placeholder="e.g. chewbacca@thelastwookiee.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback">
                                        It must be a valid email.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass">Password:</label>
                                    <input className="form-control" type="password" id="pass" placeholder="e.g. hansolo" pattern=".{6,}" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback passwordError">
                                        Password should atleast 6 characters.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passSec">Re-enter Password:</label>
                                    <input className="form-control" type="password" id="passSec" placeholder="e.g. hansolo" pattern=".{6,}" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    <div className="invalid-feedback passwordError">
                                        Password should atleast 6 characters.
                                    </div>
                                </div>
                                <button className="btn btn-primary">SignUp</button>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <h6>Already have an account?</h6>
                            <a className="changeSignUpIn" href="#">SignIn</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}