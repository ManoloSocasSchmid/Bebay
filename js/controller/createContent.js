/**
 * Function to creae the tabs on main article part
 * @param {*} ebayData
 * @param {*} bestBuyData
 * @param {*} container
 */
function createTabContent(ebayData, bestBuyData, container) {
    let dataArray = createData(ebayData, bestBuyData);
    /** */
    class Data extends React.Component {
        /**
         * @return {Cards}
         */
        render() {
            // array with cards that are gonna to be rendered
            let cardArray = [];
            let apiName;
            for (let i= 0; i < dataArray.length; i++) {
                if (patt.test(dataArray[i].url)) {
                    apiName = 'bestBuy';
                } else {
                    apiName = 'ebay';
                }
                // Creates card element and push it into cardArray
                cardArray.push(<Card name={dataArray[i].name}
                img={dataArray[i].image}
                ePrice={changeEuro(dataArray[i].price)}
                apiUsed ={apiName}
                url = {dataArray[i].url}/>);
            }
            return (
                <div className="d-flex flex-column align-items-center">
                    <div className="card-group">
                        {cardArray}
                    </div>
                    <ul className="pagination m-3"></ul>
                </div>
            );
        }
    }
    React.render(<Data/>, $('#'+container)[0]);
    hideModalSpinner();
}

/**
 * Create Card Data type elements from mobile data
 * @param {*} ebayData
 * @param {*} bestBuyData
 * @return {phoneArray} array with CardData elements.
 */
function createData(ebayData, bestBuyData) {
    let phoneArray = [];
    for (let i= 0; i <ebayData.length; i++) {
        phoneArray.push(new CardData({
            name: ebayData[i].title,
            image: ebayData[i].galleryURL,
            price: ebayData[i].sellingStatus[0].currentPrice[0].__value__,
            url: ebayData[i].viewItemURL,
        }));
    }

    for (let i= 0; i <bestBuyData.length; i++) {
        phoneArray.push(new CardData({
            name: bestBuyData[i].name,
            image: bestBuyData[i].thumbnailImage,
            price: bestBuyData[i].salePrice,
            url: bestBuyData[i].url,
        }));
    }
    phoneArray = phoneArray.sort(function() {
        return Math.random() - 0.5;
    });
    return phoneArray;
}

/**
 * click event on advanced search
 */
function createBuyItemEvent() {
    $('.buyButton').on('click', function() {
        checkLoged();
    });
}

/**
 * check if a user is loged in
 */
function checkLoged() {
    if (aUserLoggedIn == false) {
        $('#signInModal').modal('show');
    } else {
       $(location).attr('href', './pages/done.html');
    }
}
