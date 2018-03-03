/**
 * Store the min price for advancedSearch
 */
let lowerVal;

/**
 * Store the max price for advancedSearch
 */
let upperVal;

/**
 * Control the inputs range
 */
function loadLimitsRangeSlider() {
    let $lowerSlider = $('#min');
    let $upperSlider = $('#max');
    lowerVal = parseInt($lowerSlider.val());
    upperVal = parseInt($upperSlider.val());
    $('#maxVal').val(upperVal + '€');
    $('#minVal').val(lowerVal + '€');

    $upperSlider.on('input', function() {
        lowerVal = parseInt($lowerSlider.val());
        upperVal = parseInt($upperSlider.val());

        if (upperVal < lowerVal + 4) {
            $lowerSlider.val(upperVal - 4);

            if (lowerVal == $lowerSlider[0].min) {
                $upperSlider.val(4);
            }
        }
        $('#maxVal').val(upperVal + '€');
        $('#minVal').val(lowerVal + '€');
    });

    $lowerSlider.on('input', function() {
        lowerVal = parseInt($lowerSlider.val());
        upperVal = parseInt($upperSlider.val());

        if (lowerVal > upperVal - 4) {
            $upperSlider.val(lowerVal + 4);

            if (upperVal == $upperSlider[0].max) {
                $lowerSlider.val(parseInt($upperSlider[0].max) - 4);
            }
        }
        $('#maxVal').val(upperVal + '€');
        $('#minVal').val(lowerVal + '€');
    });
}
