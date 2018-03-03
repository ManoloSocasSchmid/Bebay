/**
 * Contain all the components between the header and footer
 */
class Wrapper extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        return (
            <div className="row">
                <AdvancedSearch/>
                <Article/>
            </div>
        );
    }
}

