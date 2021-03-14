// LAb 04
console.log('Hello world');

const os = require('os');

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

// for (const cpu of os.cpus){
//     console.log(cpu);
// }

const fs = require('fs');

const fileName = __dirname + '/test.txt';

fs.readFile(fileName, (err, data) => {
    if(err){

        console.log(err)
    }

    console.log(data.toString());
    console.log(data);

});

const data = fs.readFileSync(fileName);
console.log(data.toString());

const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);


readStream.on('data', data=>{
    console.log("Question 4: " + data.toString());
});


const http = require('http');

http.createServer((req, res)=>{
   res.setHeader('Content-Type', 'text/html');

   switch (req.method){
       case 'GET':
           res.write('<h1>Hello Aflal</h1>>');
           res.end();
           break;
       case 'POST':
           req.on('data', data=>{
               res.write('<h1>Hello' + data +' </h1>');
               res.end();
           });
           break;
   }
   res.end();
}).listen(3000, (err)=> {
    console.log('Server is listening to port 3000')
});

