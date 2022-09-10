import convert from 'webp-batch-convert';
// const convert = require('webp-batch-convert');
let res;

// 示例一: 生成 img 目录下的图片文件至 webp 目录
res = convert.cwebp('./image', './webp', { quiet: false });
console.log('total: ', res);

// 示例二: 生成 img 目录下的图片文件至 webp 目录，附带质量等参数
// 更多参数参考：https://developers.google.com/speed/webp/docs/cwebp?csw=1#options
// 也可以执行如下命令通过 cwebp 帮助信息了解： `yarn cwebp --longhelp`
// const cwebpOpts = {
//   /** don't print anything */
//   quiet: true,
//   /** quality factor (0:small..100:big), default=75 */
//   q: 75,
//   /** transparency-compression quality (0..100), default=100 */
//   alpha_q: 100,
//   /** spatial noise shaping (0:off, 100:max), default=50 */
//   sns: 50,
//   /** filter strength (0=off..100), default=60 */
//   f: 60,
//   /** use simple filter instead of strong */
//   nostrong: false,
// };
// // 清空输出目录
// convert.utils.delDir('./webp');
// res = convert.cwebp('./img', './webp', cwebpOpts);
// console.log('total: ', res);
