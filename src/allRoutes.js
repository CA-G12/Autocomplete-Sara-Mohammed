const publicRouting = require('./routehandlers/publicRoute')
const homeRouting = require('./routehandlers/homeRoute')
const notFoundRouting = require('./routehandlers/notFoundRoute')

module.exports = {
    publicRouting, homeRouting, notFoundRouting
}