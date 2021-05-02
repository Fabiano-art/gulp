const { series, parallel } = require('gulp')
const gulp = require('gulp')

const {appCSS, appHTML,  appIMG, appJS} = require('./gulpTasks/app')
const { depsCSS, depsFONT } = require('./gulpTasks/deps')
const {monitorarArquivos, servidor} = require('./gulpTasks/servidor')

exports.default = series (
    parallel(
        series(appCSS, appHTML, appIMG, appJS),
        series(depsCSS, depsFONT)
    ),
    servidor,
    monitorarArquivos
) 