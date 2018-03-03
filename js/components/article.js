/**
 * Contains the three category tabs and its content
 */
class Article extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        return (
            <article className="col mt-2">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active"
                            id="nav-smartPhones-tab" data-toggle="tab"
                            href="#nav-smartPhones" role="tab"
                            aria-controls="nav-smartPhones"
                            aria-selected="true">
                            <i className="fas fa-mobile"></i> Smartphones
                            <Spinner/>
                        </a>
                        <a className="nav-item nav-link" id="nav-tv-tab"
                            data-toggle="tab" href="#nav-tv" role="tab"
                            aria-controls="nav-tv" aria-selected="false">
                            <i className="fas fa-tv"></i> TV
                            <Spinner/>
                        </a>
                        <a className="nav-item nav-link" id="nav-health-tab"
                            data-toggle="tab" href="#nav-health" role="tab"
                            aria-controls="nav-health" aria-selected="false">
                            <i className="fas fa-heart">
                            </i> Health, Fitness and Beauty
                            <Spinner/>
                        </a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active"
                        id="nav-smartPhones" role="tabpanel"
                        aria-labelledby="nav-smartPhones-tab">

                    </div>
                    <div className="tab-pane fade" id="nav-tv" role="tabpanel"
                        aria-labelledby="nav-tv-tab">
                       
                    </div>
                    <div className="tab-pane fade" id="nav-health"
                        role="tabpanel" aria-labelledby="nav-health-tab">
                       
                    </div>
                </div>
            </article>
        );
  }
}
