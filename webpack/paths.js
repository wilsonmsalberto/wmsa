const path = require('path')

module.exports = {
    app   : path.join(__dirname, '../app'),
    build : path.join(__dirname, '../build'),
    static: {
        js: path.join(__dirname, '../app/static/js')
    }
}
