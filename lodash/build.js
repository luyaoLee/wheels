const fs = require('fs')

const files = fs.readdirSync('./src')

const fileNames = files.map(item => {
  const reg = /(.*)\.js$/g
  return reg.exec(item)[1]
})

let importFile = ''
let str = ''


fileNames.forEach((item, i) => {
  importFile += `import ${item} from './src/${item}'\n`
  str += `${str ? ',\n' : ''}${i === 0 ? '' : '    '}${item}`
})

const data = 
`${importFile}
const _ = (() => {
  return {
    ${str}
  }
})()
` 

fs.writeFile('index.js', data, (err, res) => {
  if (err) return;
})
