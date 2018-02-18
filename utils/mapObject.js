
const mapObject = (object, callback) =>
    Object.keys(object).map(function(key) {
        return callback(key, object[key]);
    });

export default mapObject;