/*
 * @Descripttion: 
 * @version: 
 * @Author: liyulong
 * @Date: 2020-05-27 07:59:27
 * @LastEditors: liyulong
 * @LastEditTime: 2020-05-29 06:56:05
 */ 
const jsonServer = require('json-server');
const fs = require('fs')
const $db = require('./db.json');    // db.json。或返回db.json数据格式的，db.js文件
const $routeHandler = require('./route.json');  // 引入自定义路由配置文件

const server = jsonServer.create();
const middlewares = jsonServer.defaults({ noCors: false });
server.use(middlewares);

function getVideo(path, req, res) {
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        //有range头才使用206状态码

        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        let end = parts[1] ? parseInt(parts[1], 10) : start + 999999;

        // end 在最后取值为 fileSize - 1 
        end = end > fileSize - 1 ? fileSize - 1 : end;

        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(path, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
}

// 自定义请求, 必须要放到自定义路由之前
server.get('/api/project/deepEarth', (req, res) => {
    const path = __dirname + '/static/video/deepEarth.MP4';
   getVideo(path, req, res)
})
server.get('/api/project/video3D', (req, res) => {
    const path = __dirname + '/static/video/video3D.MP4';
   getVideo(path, req, res)
})

server.use(jsonServer.rewriter($routeHandler));  // 使用自定义路由

const router = jsonServer.router($db);
server.use(router);
// Set default middlewares (logger, static, cors and no-cache)

// To handle POST, PUT and PATCH you need to use a body-parser

server.use(jsonServer.bodyParser);

server.listen(3001, () => {    

    console.log('JSON Server is running at 3001');

});
