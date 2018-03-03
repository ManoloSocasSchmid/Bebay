/**
 * Header component.
 * Contains logo, log buttons and search bar
 */
class Header extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="left">
                    <a className="navbar-brand" href="#">
                        <img src="assets/svg/logo.svg" width="100wv" />
                        <h1 className="ml-4 align-middle d-inline">Bebay</h1>
                    </a>
                </div>
                <div className="right">
                    <div id="buttonsSign" className="btn-group mb-3 text-white" role="group" aria-label="Basic example">
                        <button id="signUp" type="button" className="btn btn-secondary" data-toggle="modal" data-target="#signUpModal">SignUp</button>
                        <button id="signIn" type="button" className="btn btn-secondary" data-toggle="modal" data-target="#signInModal">SignIn</button>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" id="searchField" placeholder="e.g. Millennium Falcon" aria-label="Intro to search" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary bg-info text-white" id="searchButon" type="button"><i className="fas fa-search"></i> Search</button>
                        </div>
                    </div>
                    <button className="navbar-toggler d-lg-none mt-3" type="button" data-toggle="collapse" data-target="#advancedSearch" aria-controls="advancedSearch" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        );
    }
}

