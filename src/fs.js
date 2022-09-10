// src/runtime.ts
let Pool = require("tinypool");
var _worker;
async function getExportsRuntime(name, options) {
  if (!_worker) {
    _worker = new Pool({
      filename: new URL("./worker.js", './src').href
    });
  }
  return await _worker.run({ name, options });
}
getExportsRuntime('fn', 'hello')
