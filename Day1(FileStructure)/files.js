const fs = require('fs');

// Reading files

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line')


// Writing files
// fs.writeFile('./docs/blog1.txt', 'Hello, Courage', () => {
//     console.log('writing complete!');
// })
// fs.writeFile('./docs/blog2.txt', 'Hello, Courage again', () => {
//     console.log('writing complete!');
// })

// Driectories

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("Folder removed")
//     }) 
// }

// Deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}

//completed day 1
