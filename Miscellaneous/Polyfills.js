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

Promise.myAllSettled = function myAllSettled(promises) {
    const results = [];
    let resolvedPromises = 0;

    if (promises.length === 0) {
        return Promise.resolve(results);
    }

    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            if (promises[i]?.then) {
                promises[i]
                    .then((value) => {
                        results[i] = {
                            status: "fulfilled",
                            value,
                        };
                    })
                    .catch((reason) => {
                        results[i] = {
                            status: "rejected",
                            reason,
                        };
                    })
                    .finally(() => {
                        resolvedPromises++;

                        if (resolvedPromises >= promises.length) {
                            resolve(results);
                        }
                    });
            } else {
                Promise.resolve(promises[i])
                    .then((value) => {
                        results[i] = {
                            status: "fulfilled",
                            value,
                        };
                    })
                    .finally(() => {
                        resolvedPromises++;

                        if (resolvedPromises >= promises.length) {
                            resolve(results);
                        }
                    });
            }
        }
    });
};

Promise.myRace = function myRace(promises) {
    return new Promise((resolve, reject) => {
        for (const promise of promises) {
            if (promise?.then) {
                promise
                    .then((data) => resolve(data))
                    .catch((error) => reject(error));
            } else {
                Promise.resolve(promise).then((data) => resolve(data));
            }
        }
    });
};

Promise.myAny = function myAny(promises) {
    const errors = [];
    let rejectedPromises = 0;

    return new Promise((resolve, reject) => {
        for (const [index, promise] of Object.entries(promises)) {
            if (promise?.then) {
                promise
                    .then((result) => resolve(result))
                    .catch((error) => {
                        errors[index] = error;
                        rejectedPromises++;

                        if (rejectedPromises >= promises.length) {
                            reject(errors);
                        }
                    });
            } else {
                Promise.resolve(promise).then((result) => resolve(result));
            }
        }
    });
};

Promise.myResolve = function myResolve(value) {
    return new Promise((resolve) => resolve(value));
};

Promise.myReject = function myReject(value) {
    return new Promise((_, reject) => reject(value));
};
