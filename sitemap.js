const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var http = require('http');
var fs = require("fs");


var request = http.request(
    {"host":"jdszekeres.is-a.dev","path":"/"},
        function (res) {
            var data = '';
            var urls=["https://"+res.socket._host];
            var xml = '<?xml version="1.0" encoding="UTF-8"?>'
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                var urlRegex =/(\b(https?|ftp|file):\/\/jdszekeres.is-a.dev[-A-Z0-9+&@#\/%?=~_|!:,.;]*.html)/ig;
                data.replace(urlRegex, function(url) {
                    urls.push(url);
                    return '<a href="' + url + '">' + url + '</a>';
                });
                console.log(urls);
                xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
                for (let i = 0; i < urls.length;i++) {
                    xml += `<url><loc>${urls[i]}</loc></url>`
                }
                xml+="</urlset>"
                fs.writeFile("src/assets/sitemap.xml",xml,()=>{});
        })
        })

request.on('error', function (e) {
    console.log(e.message);
});
request.end();
