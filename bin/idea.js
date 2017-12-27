var [, , title] = process.argv
var { readdirSync, writeFileSync } = require('fs')

var path = './cards/ideas/'
var files = readdirSync(path).map(function (e) {
    let [id, name] = e.split('.')
    return { id: Number(id), name }
})

if (title) {
    var id = files.map(e => e.id).sort().pop() || 0;
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
    files.forEach(function (e) {
        console.log(e.id, e.name)
    })
}