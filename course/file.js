const fs = require('fs')

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('last line');

// writing files
// fs.writeFile('./docs/blog2.txt', 'Hello, City', () => {
//     console.log('File was writen');
// })

// directories
if (!fs.existsSync('docs/assets')) {
fs.mkdir('docs/assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
})
}else {
    fs.rmdir('docs/assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('deleted');
    })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('deleted');
    })
}