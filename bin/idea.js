var [, , title] = process.argv
var { readdirSync, writeFileSync } = require('fs')

var path = './cards/ideas/'

if (title) {
    var files = readdirSync(path)
    var id = files.map(e => Number(e.slice(0, e.indexOf('.')))).sort().pop() || 0;
    id += 1
    
    var template = `- id: ${id}
- title: ${title}
- description:
- state(new/deprecated/ongoing/done): new
- investment(0~9):
- outcome(0~9):
- history:
  - ${(new Date).toLocaleDateString()} create`
    
    writeFileSync([path, id, '.', title, '.md'].join(''), template)
    console.log("Done：", id)
} else {
    ;
}