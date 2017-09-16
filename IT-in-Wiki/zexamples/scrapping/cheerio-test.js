var request = require('request');
var cheerio = require('cheerio');
var url = "https://hy.wikipedia.org/wiki/%D5%80%D5%B8%D5%BE%D5%B0%D5%A1%D5%B6%D5%B6%D5%A5%D5%BD_%D4%B9%D5%B8%D6%82%D5%B4%D5%A1%D5%B6%D5%B5%D5%A1%D5%B6";
request(url, function(error, response, html) {
    if (!error) {
        var $ = cheerio.load(html);
        $("#firstHeading").each(function() {
            var data = $(this);
            console.log(data.text());
        });

        $(".mw-headline").each(function() {
            var data = $(this);
            console.log(data.text());
        });
    }
});