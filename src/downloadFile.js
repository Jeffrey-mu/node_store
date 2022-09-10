var http = require('http');
var https = require('https');
var fs = require('fs');
var req = https.request('https://img.cdn.famobi.com/portal/html5games/images/tmp/180/CivilizationsWarsMasterEditionTeaser.jpg', function (res) {
    console.log("request: return status: " + res.statusCode);
    var contentLength = parseInt(res.headers['content-length']);
    var downLength = 0;
    var out = fs.createWriteStream("./image/hello.txt", {
        flags: 'a+', // 默认读取
    });
    res.on('data', function (chunk) {
        downLength += chunk.length;
        var progress = Math.floor(downLength * 100 / contentLength);
        var str = "下载：" + progress + "%";
        console.log(str);
        写文件
        out.write('chunk', function () {
        });
    });
    res.on('end', function () {
        downFlag = false;
    });
})
req.on('error', (e) => {
    console.error(e);
});
req.end();

