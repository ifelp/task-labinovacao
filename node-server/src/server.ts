import { createServer, IncomingMessage, ServerResponse } from "http";
import fs from 'fs';

const server = createServer(async(req: IncomingMessage,res: ServerResponse) => {

    const {method,url} = req;

    try{
        if(url == '/'){
        res.statusCode = 200;
        res.end(JSON.stringify('Server rodando na porta 3000'));
    }

    if(url == '/citi'){
       fs.readFile('./src/assets/Logo.png', (error,data)=>{
            if(error){
                res.statusCode = 400;
                res.end(error.message);
            }
            else{
                res.statusCode = 200;
                res.setHeader('Cotent-Type', 'image/pg')
                res.end(data);
            }
       })
    }

    if(url == '/citi/bad-cable-management'){
        fs.readFile('./src/assets/fios.jpeg', (error,data)=>{
            if(error){
                res.statusCode = 404;
                res.end(error.message)
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'image/png')
                res.end(data);
            }
        })
    }

    if(url == '/citi/reqs'){

        if(method == 'GET'){
            res.statusCode = 200;
            res.end('Tudo certo por aqui.')
        }

        if(method == 'POST'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({message:'criado.', created: true}))
        }

        if(method == 'PUT'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({message: 'atualizado.', updated: true}))
        }

        if(method == 'DELETE'){
            res.statusCode = 204;
        }
        
    }

    if(url == '/citi/lab-inovacao'){
       fs.readFile('./src/example.html', (error,data)=>{
            if(error){
                res.statusCode = 404;
                res.end(error.message)
            }
            else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
       })
    }

    if(url == '/citi/dev'){
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'Desenvolvimento 25.1 💚', status:200}))
    }

    if(url == '/citi/ditto'){
        fs.readFile('./src/assets/Ditto.webp', (error,data)=>{
            if(error){
                res.statusCode = 404;
                res.end(error.message)
            }
            else{
                res.statusCode = 200;
                res.setHeader('Content-Type','image/webp')
                res.end(data)
            }
        })
    }

    if(url == '/citi/skylines'){
        fs.readFile('./src/assets/cities-skylines.jpg', (error,data)=>{
            if(error){
                res.statusCode = 404;
                res.end(error.message)
            }
            else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'image/jpg')
                res.end(data)
            }
        })
    }
}
catch(error){
    console.error(error);
    res.statusCode = 500;
    res.end('Erro no servidor.');
}

})

server.listen(3001, ()=>{
    console.log('Servidor rodando na porta 3001');
})