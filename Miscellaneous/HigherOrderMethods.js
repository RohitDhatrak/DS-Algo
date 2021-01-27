const _ = {};

_.isObject = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
};

_.forEach = function (list, callback) {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    }
    if (_.isObject(list)) {
        let keys = Object.keys(list);
        for (let i = 0; i < keys.length; i++) {
            callback(list[keys[i]], keys[i], list);
        }
    }
};

_.map = function (list, callback) {
    if (!Array.isArray(list)) {
        throw new Error("The first parameter is not an Array");
    }
    const newArray = [];
    for (let i = 0; i < list.length; i++) {
        newArray.push(callback(list[i], i, list));
    }
    return newArray;
};

_.filter = function (list, callback) {
    if (!Array.isArray(list)) {
        throw new Error("The first parameter is not an Array");
    }
    const newArray = [];
    for (let i = 0; i < list.length; i++) {
        let val = callback(list[i], i, list);
        if (val) newArray.push(list[i]);
    }
    return newArray;
};

_.reduce = function (list, callback, initial = 0) {
    let accum = initial;
    if (!Array.isArray(list)) {
        throw new Error("The first parameter is not an Array");
    }
    for (let i = 0; i < list.length; i++) {
        accum =  callback(accum, list[i], i);
    }
    return accum;
};

_.some = function (list, callback) {
    if (!Array.isArray(list)) {
        throw new Error("The first parameter is not an Array");
    }
    for (let i = 0; i < list.length; i++) {
        if (callback(list[i], i, list)) {
            return true;
        }
    }
};

_.every = function (list, callback) {
    if (!Array.isArray(list)) {
        throw new Error("The first parameter is not an Array");
    }
    for (let i = 0; i < list.length; i++) {
        if (!callback(list[i], i, list)) {
            return false;
        }
    }
};

_.find = function (list, callback) {
    if (!Array.isArray(list)) {
        throw new Error("The first parameter is not an Array");
    }
    for (let i = 0; i < list.length; i++) {
        if (callback(list[i], i, list)) {
            return list[i];
        }
    }
};
