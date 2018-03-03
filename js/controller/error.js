/**
 * Components for whapper, if error in the page.
 */
class Error extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        return (
            <div>
                <div className="text-center card mx-auto m-5 p-3 w-25">
                    <h2>
                        <i className="fas fa-exclamation-circle mr-2 text-danger"></i>
                        Error on page.
                    </h2>
                    <h3>
                        You may not have internet or the server is down.
                    </h3>
                </div>
            </div>
        );
    }
}

/**
 * If the page has an error. Call this function
 */
function doError() {
    $('.container-fluid').children().remove();
    React.render(<Error/>, document.getElementsByClassName('container-fluid')[0]);
}
