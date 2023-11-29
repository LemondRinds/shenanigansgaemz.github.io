/// NOT A PROD SETUP, copied from stack overflow, mainly for local debugging, requires node.js but no fancy packages or anything
/// using this w/ WSL ubuntu and visual studio code
/// https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl
/// basically node is great because step 1) install node, 2) write some awesome js function that does crap like this or creates excels etc, 3) prophet from quick automation
/// other devs like other languages but i like js a bunch and it's very loosy goosy and fun to mess with
/// once you have node setup you just come to this folder and run node nodeServe and you'll have a dumb server
var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

http.createServer(function (request, response) {
    var requestUrl = url.parse(request.url);
    if(requestUrl.pathname && requestUrl.pathname.length > 0){
        var dirnm = __dirname;
        response.writeHead(200);
        if(requestUrl.pathname.indexOf('/images/')){
            dirnm += "/images/"
        }else if(requestUrl.pathname.indexOf('/shortrules/')){
            dirnm += "/shortrules/";
        }
        fs.createReadStream(path.join(__dirname, requestUrl.pathname)).pipe(response);  // do NOT use fs's sync methods ANYWHERE on production (e.g readFileSync) 
    }
}).listen(8080);

console.log("server up port 8080, try localhost:8080/index.html in browser");
console.log("fun fact, you're missing a fav icon so when browsers request your site this dumb server dies because they auto get favicon.ico, too lazy to fix");