/**
 * The single component to show the product
 */
class Card extends React.Component {
    /**
     * @return {ReactComponent}
     */
    render() {
        let logo;
        let logoEbay = <img src="assets/svg/EBay_logo.svg" width="50px"/>;
        let logoBestBuy = <img src="assets/svg/Best_Buy_Logo.svg" width="50px"/>;
        if (this.props.apiUsed == 'ebay') {
            logo = logoEbay;
        } else {
            logo = logoBestBuy;
        }
        return (
            <div className="card mr-2 mb-2">
                <img src={this.props.img} className="card-img-top mx-auto mt-3"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            {logo} price:
                            <span className="ebayPrice"> {this.props.ePrice}</span>
                            €
                        </li>
                    </ul>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <a href="#" className="btn btn-primary mt-2 buyButton">Buy</a>
                    <a href={''+this.props.url} className="card-link">View more</a>
                </div>
            </div>
        );
    }
}
