/**
 * Contains all the components from the app
 */
class MainBody extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <Wrapper/>
                </div>
                <Footer/>
                <SignIn/>
                <SignUp/>
                <SpinnerModal/>
            </div>
        );
    }
}
