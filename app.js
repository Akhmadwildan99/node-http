const http = require('http');
const fs = require('fs');

const renderHTML = (path, res) => {
    fs.readFile( path , (error, data) =>{
        if(error){
            res.writeHead(404);
            res.write('ERORR: File Not Found');
        } else{
            res.write(data);
        }

        res.end();
    });
}


http
.createServer((req, res) => {
    
    
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    const url = req.url;
    if(url === '/about'){
        renderHTML('./about.html', res);
    } else if (url === '/contact'){
       renderHTML('./contact.html', res);
    } else {
        renderHTML('./index.html', res);
    }
})
.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
