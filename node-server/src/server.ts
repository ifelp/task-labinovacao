import { createServer, IncomingMessage, ServerResponse } from "http";
import { Http2ServerRequest } from "http2";

const server = createServer((req: IncomingMessage,res: ServerResponse) => {

    const {method,url} = req;

    if(method == 'GET' && url == '/'){
        res.statusCode = 200;
        res.end(JSON.stringify('Server rodando na porta 3000'));
    }

    if(method == 'GET' && url == '/citi'){
        res.statusCode = 200;
        res.end('Made with 💚 and </> by CITi')
    }

})

server.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})



