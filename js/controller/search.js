/**
 * function that reads the search term in the search
 * box and executes a call on the ebay api
 */
function searchItem() {
    let searchValue = $('#searchField').val();
    let activeTabIndex = getTabIndex();
    callEbay(ebayKeyWords[activeTabIndex], bestBuyCats[activeTabIndex],
         containers[activeTabIndex], searchValue);
}

/**
 * get select brand from advanced search
 * @return {brand}
 */
function getBrand() {
    let brand;
    // get the selecte brand filter from the active tab
    let compon = $('.brands')[tabIndex].children;
    for (let i = 0; i < compon.length; i++) {
        if (compon[i].children[0].checked == true) {
            brand = compon[i].children[0].value;
        }
    }
    // returns brand name
    return brand;
}

/**
 * function that returns the filters needed for each api.
 * @return {filter} return url filter depending on the format that was send;
 * @param {*} format
 * @param {*} search;
 */
function getFilters(format, search) {
    let filter ='';
    let arrayFilter = [];
    let min = $('#min').val();
    let max = $('#max').val();
    let shipping = $('#freeShipping')[0].checked;

    // define filters depending on api format, ebay
    if (format == 'ebay') {
        // defines min value filter
        if (min!='') {
            min = changeUsd(min);
            arrayFilter.push({
                'name': 'MinPrice',
                'value': min,
                'paramName': 'Currency',
                'paramValue': 'USD',
            });
        }
        // defines max value filter
        if (max!='') {
            max = changeUsd(max);
            arrayFilter.push({
                'name': 'MaxPrice',
                'value': max,
                'paramName': 'Currency',
                'paramValue': 'USD',
               });
        }
        // defines shipping value filter
        if (shipping == true) {
            arrayFilter.push({
               'name': 'FreeShippingOnly',
               'value': shipping,
               'paramName': '',
               'paramValue': '',
               });
           }
        // Creaes url syntax ebay filter
        for (let i = 0; i < arrayFilter.length; i++) {
            // Index each item filter in arrayFilter
            let itemfilter = arrayFilter[i];
            // Iterate through each parameter in each item filter
            for (let index in itemfilter) {
                // Check to see if the paramter has a value (some don't)
                if (itemfilter[index] !== '') {
                    if (itemfilter[index] instanceof Array) {
                        for (let r = 0; r < itemfilter[index].length; r++) {
                           let value = itemfilter[index][r];
                           filter += '&itemFilter(' + i + ').' +
                            index + '(' + r + ')=' + value;
                        }
                    } else {
                        filter += '&itemFilter(' + i + ').' +
                         index + '=' + itemfilter[index];
                    }
                }
            }
        }
    // else , bestBuy format
    } else {
        // defines search filter for bestbuy api
        if (search != '' && search != undefined) {
            filter += '&(search='+search+')';
           }
        // defines min filter for bestbuy api
        if (min != '') {
            min = changeUsd(min);
            filter += '&salePrice>'+min;
        }
        // defines max filter for bestbuy api
        if (max != '') {
            max = changeUsd(max);
            filter += '&salePrice<'+max;
        }
        let brand = getBrand();
        // defines manufacturer filter for bestbuy api
        if (brand != '' && brand != undefined) {
            filter += '&manufacturer='+brand;
        }
        if (shipping == true) {
            filter += '&freeShipping=true';
           }
    }
    // returns string for with filters por bestBuy Or ebay depending on format
    return filter;
}
