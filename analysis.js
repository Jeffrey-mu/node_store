import fs from 'fs';
let data = fs.readFileSync('./www.linkinterty.com_DV360_normal.txt').toString()
let reg = /www.*?_[0-9]\r/g
let tab = data.match(reg).map(el => el.replace('\r', ''));
let array = data.replaceAll('\r', '').split('\n').filter(Boolean)
console.log(tab);
console.log(array);
let newData = []
let idnexs = tab.map(el => {
  return array.findIndex(item => item == el)
})
console.log(idnexs);
idnexs.reduce((acc, idnex) => {
  newData.push({
    name: array[acc],
    script: array.slice(acc + 1, idnex).join(''),
  })
  return acc = idnex
}, 0)
let len = idnexs.length
newData.push({
  name: array[idnexs[len - 1]],
  script: array.slice(idnexs[len - 1]).join(''),
})
console.log(newData.filter(item => item.script));
