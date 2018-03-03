let euru;
/**
 * Convert USD a EURU, with API FOREX.
 * @param {Int} usd value of usd
 * @return {Int} euru
 */
$.ajax({
    url: 'https://forex.1forge.com/1.0.3/convert?from=USD&to=EUR&quantity=1&api_key=15gYlMXKLsdGlUT1MP2X0DAbsSdWkpZS',
    type: 'get',
    dataType: 'html',
    async: false,
    success: function(data) {
        euru = JSON.parse(data).value;
    },
});

/**
 * The usd change for Euru
 * @param {*} usd
 * @return {*} euro
 */
function changeEuro(usd) {
    return (usd * euru).toFixed(2);
}
/**
 * The Euro convert to USD
 * @param {*} newEuru
 * @return {*} usd
 */
function changeUsd(newEuru) {
    return (newEuru / euru).toFixed(0);
}
