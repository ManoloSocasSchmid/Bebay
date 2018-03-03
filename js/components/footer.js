/**
 * The footer component
 */
class Footer extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark text-white
                justify-content-center">
                <a className="navbar-brand">
                    <a rel="license" href="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg">
                        <img className='ccImg mr-2' alt="Creative Commons License" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
                    </a>
                    ProyectoX by Manuel, Cristian, Manolo, is licensed under a
                    Creative CommonsAttribution-ShareAlike 4.0 International
                    License
                </a>
            </nav>
        );
    }
}
