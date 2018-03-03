/**
 * ebay keywords to search for determined categories
 */
let ebayKeyWords = ['smartphones', 'Television', 'fitness'];
/**
 * category codes for bestBuy Api 1 smarthphoens 2 Tvs 3 Fitnees
 */
let bestBuyCats = ['pcmcat209400050001', 'abcat0101000', 'pcmcat242800050021'];
/**
 * id of the modal containers in article
 */
let containers = ['nav-smartPhones', 'nav-tv', 'nav-health'];
/**
 *  api key for ebay api
 */
let keyEbay = 'ManoloSo-proyecto-PRD-143252cae-5750f8bb';
/**
 * api key for bestBuy api
 */
let bestBuyApiKey = 'A0iJvovzx1h8jN9IXhGSCwjm';
/**
 *  number of items loaded from apis;
 */
let pageSize = '20';
/**
 * active tab index;
 */
let tabIndex =0;
/**
 * patter to define which api your using;
 */
let patt = new RegExp('bestbuy');

/**
 * class used to define card content;
 */
class CardData {
    /**
     * constructs card data class;
     * @param {*} config
     */
    constructor(config) {
        this.name = config.name,
        this.image = config.image,
        this.price = config.price,
        this.url = config.url;
    }
}

/**
 * Calls ebay api.
 * @param {*} ebayKeyWord
 * @param {*} bestBuyCat
 * @param {*} container
 * @param {*} searchKeyWord
 */
function callEbay(ebayKeyWord, bestBuyCat, container, searchKeyWord) {
    let url = createEbayUrl(ebayKeyWord, searchKeyWord);
    $.ajax({
        url: url,
        jsonp: 'callback',
        dataType: 'jsonp',
        before: showSpinner(), // shows mini spinner
        success: function(json) {
            let ebayData =
            json.findItemsByKeywordsResponse[0].searchResult[0].item;
            if (ebayData == undefined) {
                ebayData = 0;
        }
            callBestBuy(ebayData, bestBuyCat, container, searchKeyWord);
        },
        error: function(error, codigo, algo) {
            doError(); // shows error
        },
    });
}

/**
 * proced second ajax call
 * @param {*} ebayData data collected from ebay ajax call
 * @param {*} catId id for ajax call on bestbuy api
 * @param {*} container container to display cards;
 * @param {*} searchKeyWord keyword for search
 */
function callBestBuy(ebayData, catId, container, searchKeyWord) {
    let url2 = createBestBuyUrl(catId, searchKeyWord);
    $.ajax({
        url: url2,
        type: 'GET',
        dataType: 'json',
        success: function(json) {
            let bestBuyData = json.products;
            if (bestBuyData == undefined) {
                bestBuyData = 0;
            }
            createTabContent(ebayData, bestBuyData, container);
            createBuyItemEvent(); // activate the buy button function
            paginateTabs(); // paginate tabs after they have been created.
        },
        error: function(error, codigo, algo) {
            doError();
        },
        complete: hideSpinner(),
    });
}

/**
 * returns the index of active tab in article
 * @return {*} i valor del index acutal del tab;
 */
function getTabIndex() {
    let tab = $('.tab-content')[0];
    for (let i = 0; i < tab.children.length; i++) {
      let allClass = tab.children[i].classList;
      for (let j = 0; j< allClass.length; j++) {
        if (allClass[j] == 'active') {
            tabIndex = i;
            return i;
        }
      }
    }
}

/**
 * creates Url for Ebay ajax call
 * @return {url} url for ajax call ebay format
 * @param {*} ebayKeyWord
 * @param {*} searchKeyWord
 */
function createEbayUrl(ebayKeyWord, searchKeyWord) {
    let searchEbayTerm;
    // checks if keywords is undefined
    if (searchKeyWord == undefined) {
        searchEbayTerm = '';
    } else {
        searchEbayTerm = ','+searchKeyWord;
    }
    let brand = getBrand();
    // get brand and checks if its undefined
    if (brand == 'Apple') {
        brand = 'Iphone';
    }
    if (brand != '' && brand != undefined) {
        searchEbayTerm = ','+brand+searchEbayTerm;
    }
    // basic url
    let url = 'https://svcs.ebay.com/services/search/FindingService/v1?';
    url += 'SECURITY-APPNAME='+keyEbay+'&OPERATION-NAME=findItemsByKeywords';
    url += '&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&';
    url += 'keywords='+ebayKeyWord+searchEbayTerm;
    url += '&paginationInput.entriesPerPage='+pageSize;
    url += '&GLOBAL-ID=EBAY-US&siteid=0';

    // gets filters in ebay format and returns url to the ajax call
    let filter = getFilters('ebay');

    url += filter;
    return url;
}

/**
 * creates Url for BestBuy ajax call
 * @return {url}
 * @param {*} catId
 * @param {*} searchKeyWord
 */
function createBestBuyUrl(catId, searchKeyWord) {
    let filters = getFilters('bestBuy', searchKeyWord);
    // basic url
     let url2='https://api.bestbuy.com/v1/products((categoryPath.id='+catId+')';
     url2 += filters+')?apiKey='+bestBuyApiKey+'&sort=name.asc&show=name,';
     url2 += 'salePrice,thumbnailImage,url&format=json&pageSize='+pageSize;

    return url2;
}

