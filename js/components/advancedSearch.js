/**
 * Componente Advanced Search Menu
 */
class AdvancedSearch extends React.Component {
    /**
     * @return {Header}
     */
    render() {
        return (
            <div id="advancedSearch" className='col-12 col-sm-4 col-lg-2 border rounded mt-2 collapse'>
                <h3 className="text-center mb-4">Advanced Search</h3>
                <div className="form-group">
                    <label>Price Range</label>
                    <div className="d-flex justify-content-between align-items-start">
                        <input id="minVal" className="form-control" type="text" readOnly />
                        <div className="multi-range w-100">
                            <input type="range" min="0" max="2500" defaultValue="100" id="min" />
                            <input type="range" min="0" max="2500" defaultValue="200" id="max" />
                        </div>
                        <input id="maxVal" className="form-control" type="text" readOnly />
                    </div>
                </div>
                <label>Brands</label>
                <div className='brands brands-smartPhones asComponent'>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="brand" className="custom-control-input" value="Apple" />
                        <label className="custom-control-label" htmlFor="customRadio1">Apple</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="brand" className="custom-control-input" value="Huawei" />
                        <label className="custom-control-label" htmlFor="customRadio2">Huawei</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio3" name="brand" className="custom-control-input" value="LG" />
                        <label className="custom-control-label" htmlFor="customRadio3">LG</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio4" name="brand" className="custom-control-input" value="Samsung" />
                        <label className="custom-control-label" htmlFor="customRadio4">Samsung</label>
                    </div>
                </div>
                <div className='brands brands-tv asComponent'>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio5" name="brand" className="custom-control-input" value="Sony" />
                        <label className="custom-control-label" htmlFor="customRadio5">Sony</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio6" name="brand" className="custom-control-input" value="Philips" />
                        <label className="custom-control-label" htmlFor="customRadio6">Philips</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio7" name="brand" className="custom-control-input" value="LG" />
                        <label className="custom-control-label" htmlFor="customRadio7">LG</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio8" name="brand" className="custom-control-input" value="Samsung" />
                        <label className="custom-control-label" htmlFor="customRadio8">Samsung</label>
                    </div>
                </div>
                <div className='brands brands-health asComponent'>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio9" name="brand" className="custom-control-input" value="Fitbit" />
                        <label className="custom-control-label" htmlFor="customRadio9">Fitbit</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio10" name="brand" className="custom-control-input" value="Garmin" />
                        <label className="custom-control-label" htmlFor="customRadio10">Garmin</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio11" name="brand" className="custom-control-input" value="Samsung" />
                        <label className="custom-control-label" htmlFor="customRadio11">Samsung</label>
                    </div>
                </div>
                <div className='asComponent custom-control custom-checkbox mt-3'>
                    <input className="custom-control-input" type="checkbox" id='freeShipping' value="freeShip"/> 
                    <label className="custom-control-label" htmlFor="freeShipping">Free Shipping</label>
                </div>
                <button className="btn btn-primary mt-3">Search</button>
            </div>
        );
    }
}
