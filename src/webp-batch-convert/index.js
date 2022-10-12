import fs from 'fs';
import convert from 'webp-batch-convert-p';
// // const convert = require('webp-batch-convert');
let res;
let startTime = +new Date();
console.log(new Date())
// // 示例一: 生成 img 目录下的图片文件至 webp 目录
res = convert.cwebp('./image', './imageTrue', { gif: true, replace_suffix: false, cover: true });
console.log((+new Date() - startTime) / 1000)
