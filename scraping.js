const request = require('request');
const cheerio = require('cheerio');

request('https://www.detik.com/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const siteHeading = $('.media__title');

        //console.log(siteHeading.html());    //take value of html
        // console.log(siteHeading.text());    //result become a text
        const output = siteHeading.find('a').text();

        console.log(output);
    }
})