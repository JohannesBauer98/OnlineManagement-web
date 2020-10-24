export default class ModelKeyConverter {
    static keyToLowerCamel(o) {
        let newO, origKey, newKey, value;
        if (o instanceof Array) {
            return o.map(function(value) {
                if (typeof value === "object") {
                    value = ModelKeyConverter.keyToLowerCamel(value)
                }
                return value
            })
        } else {
            newO = {};
            for (origKey in o) {
                if (o.hasOwnProperty(origKey)) {
                    newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
                    value = o[origKey];
                    if (value !== null && (value instanceof Array || value.constructor === Object || typeof value === "object")) {
                        value = ModelKeyConverter.keyToLowerCamel(value)
                    }
                    newO[newKey] = value
                }
            }
        }
        return newO
    }

    static keyToUpperCamel(o) {
        let newO, origKey, newKey, value;
        if (o instanceof Array) {
            return o.map(function(value) {
                if (typeof value === "object") {
                    value = ModelKeyConverter.keyToUpperCamel(value)
                }
                return value
            })
        } else {
            newO = {};
            for (origKey in o) {
                if (o.hasOwnProperty(origKey)) {
                    newKey = (origKey.charAt(0).toUpperCase() + origKey.slice(1) || origKey).toString();
                    value = o[origKey];
                    if (value !== null && (value instanceof Array || value.constructor === Object || typeof value === "object")) {
                        value = ModelKeyConverter.keyToUpperCamel(value)
                    }
                    newO[newKey] = value
                }
            }
        }
        return newO
    }
}

