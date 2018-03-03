/**
 * Create second page with confirmation that you have been robbed for free.
 */
class Main extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        return (
            <div>
                <Header />
                    <h1 className="text-center card mx-auto m-5 p-3 w-25">
                        <i className="fas fa-check-circle mr-2 text-success"></i>
                        COMPRA REALIZADA CON EXITO
                    </h1>
                <Footer />
            </div>
        );
    }
}
React.render( < Main />, document.body);
