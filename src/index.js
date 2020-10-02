exports.min = function min(array) {
    let result = Number.MAX_VALUE;
    if (array !== undefined) {
        if (array.length !== 0) {
            array.forEach(element => {
                result = (element < result) ? element : result;
            });
        } else {
            result = 0;
        }
    } else {
        result = 0;
    }
    return result;
}

exports.max = function max(array) {
    let result = 0;
    if (array !== undefined) {
        if (array.length !== 0)
            array.forEach(element => {
                result = (element > result) ? element : result;
            });
    }
    return result;
}

exports.avg = function avg(array) {
    let result = 0;
    if (array !== undefined) {
        if (array.length !== 0) {
            array.forEach(element => {
                result += element;
            });
            result /= array.length;
        }
    }
    return result;
}
