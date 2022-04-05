Array.prototype.myMap = function myMap(callback, thisArg = this) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback.call(thisArg, this[i], i, this));
    }
    return newArray;
};

Array.prototype.myFilter = function myFilter(callback, thisArg = this) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.myReduce = function myReduce(callback, initialValue) {
    let accumulator = initialValue || this[0];
    for (let i = initialValue ? 0 : 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

Array.prototype.myForEach = function myForEach(callback, thisArg = this) {
    for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
};

Function.prototype.myCall = function myCall(thisArg, ...args) {
    const symbol = Symbol();
    thisArg[symbol] = this;
    const result = thisArg[symbol](...args);
    delete thisArg[symbol];
    return result;
};

Function.prototype.myApply = function myApply(thisArg, args) {
    const symbol = Symbol();
    thisArg[symbol] = this;
    const result = thisArg[symbol](...args);
    delete thisArg[symbol];
    return result;
};

Function.prototype.myBind = function myBind(thisArg, ...args) {
    const fn = this;
    return function boundWrapperFunction(...args2) {
        fn.call(thisArg, ...args, ...args2);
    };
};

Promise.myAll = function myAll(promises) {
    const results = [];
    let resolvedPromises = 0;

    if (promises.length === 0) {
        return Promise.resolve(results);
    }

    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            if (promises[i]?.then) {
                promises[i]
                    .then((data) => {
                        results[i] = data;
                        resolvedPromises++;

                        if (resolvedPromises >= promises.length) {
                            resolve(results);
                        }
                    })
                    .catch((err) => {
                        reject(err);
                    });
            } else {
                results[i] = promises[i];
                resolvedPromises++;

                if (resolvedPromises >= promises.length) {
                    resolve(results);
                }
            }
        }
    });
};
