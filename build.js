const Metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')
const collections = require('metalsmith-collections')
const permalinks = require('metalsmith-permalinks')
const handlebars = require('metalsmith-handlebars')

Metalsmith(__dirname)
    .source('./src')
    .destination('./dist')
    .clean(true)
    // .use(handlebars({
    //     pattern: 'templates/default.hbs', // defaults to '**'
    //     partials: 'partials', // defaults to 'partials' in the root
    //     targetExtension: 'html', // defaults to html
    //     globals: { // defaults to an empty object
    //         foo: 'bar'
    //     }
    // }))
    .use(layouts({
        default: "default.hbs",
        directory: "templates"
    }))
    .use(markdown())
    // .use(permalinks())
    .build((err) => {
        if (err) throw err
    })