// import util from "util"
// async function fn() {
//   return 'hello world';
// }
// const callbackFunction = util.callbackify(fn);
//
// callbackFunction((err, ret) => {
//   if (err) throw err;
//   console.log(ret);
// });
import fs from "fs";
fs.readFile('./test(7).csv', function (err, data) {
  let title = data.toString().split('\n').slice(7)[0].split(',')
  data.toString().split('\n').slice(7).forEach(function (line) {
    line.split(',').forEach((el, index) => {
      console.log(title[index] + ":" + el)
    })
  })
})
