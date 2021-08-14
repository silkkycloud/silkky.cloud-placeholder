'use strict';
const upath = require('upath');
const { Liquid: Html } = require('liquidjs');
const { readdirSync, writeFileSync } = require('graceful-fs');

const engine = new Html({
    extname: '.liquid'
});

function renderHtml() {
    readdirSync(upath.resolve(__dirname, './pages')).forEach(file => {
        engine.renderFile(upath.resolve(__dirname, `./pages/${file}`)).then(html => {
            writeFileSync(upath.resolve(__dirname, `./dist/${file.replace('.liquid', '.html')}`), html);
        });
    });
}

renderHtml();
