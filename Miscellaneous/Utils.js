function memoize(func) {
    const cache = {};
    return function memoizedFunction(...args) {
        const stringifiedArgs = JSON.stringify(args);
        if (cache[stringifiedArgs]) {
            return cache[stringifiedArgs];
        }
        const result = func(...args);
        cache[stringifiedArgs] = result;
        return result;
    };
}
