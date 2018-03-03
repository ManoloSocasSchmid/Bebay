/**
 * Spinner that shows when the page loads for first time
*/
class SpinnerModal extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        return (
            <div id="spinnerModal" className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="loader loader--flipHoz loader--3d">
                        <span className="loader-item">1</span>
                        <span className="loader-item">2</span>
                        <span className="loader-item">3</span>
                        <span className="loader-item">4</span>
                        <span className="loader-item">5</span>
                        <span className="loader-item">6</span>
                    </div>
                </div>
            </div>
        );
    }
}
