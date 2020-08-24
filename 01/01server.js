let http = require('http');
let url = require('url');

let router = require('./js/router');

http.createServer((req,res) =>{
    if(req.url != '/favicon.ico'){
        let path = url.parse(req.url).pathname;
        console.log(typeof path);

        if(path === '/'){
            router['home'](req,res);
        }else{
            router[path.substring(1)](req,res);
        }

    }
}).listen(9999);
console.log('server running at 9999');

