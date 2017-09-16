var request = require('request').defaults({headers:{'User-Agent':'ua'}});
var cheerio = require('cheerio');
var fs = require('fs');
var f = "data/wikiLinks.json";
var url = "animevost.org";

if (fs.existsSync(f) && fs.statSync(f).size > 10) {
    var wikiLinks = require("./data/wikiLinks.json");
} else {
    fs.appendFile(f, "[]");
    var wikiLinks = [];
}

request.get(url, function(error, response, page) {

    var $ = cheerio.load(page);
    var list = $("#mw-pages a");
    var link;

    for (var i = 0; i < list.length; i++) {
        var fullUrl = hyWiki + $(list[i]).attr("href");
        if (wikiLinks.indexOf(fullUrl) < 0) {
            wikiLinks.push(fullUrl);
        }

    }

    fs.writeFile(f, JSON.stringify(wikiLinks));
    console.log(wikiLinks.length + " հատ հղում կա");
});



//process.exit();