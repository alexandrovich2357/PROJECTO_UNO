const cheerio = require('cheerio');
const request = require('request-promise');

async function init() {
const $ = await request({
    uri: 'http://quotes.toscrape.com/',
    transform: body => cheerio.load(body)
});
const websiteTitle = $('title');
//console.log(websiteTitle.html());
const websiteHeading = $('h1');
//console.log(websiteHeading.text().trim());
//citas
const quote = $('.quote').find('a');
//console.log(quote.html());

const third_quote = $('.quote').next().next();
//console.log(third_quote.html())
const container = $('.row .col-md-8').children();
//console.log(container.html());

const quotes = $('.quote span.text').each((i, el) => {
    //console.log(i, $(el).text());
 const quote_text = $(el).text();
 const quote = quote_text.replace(/(^\“|\“$)/g,"");
console.log(quote);    
});
console.log(quotes.html());
}
init();