import { serve } from "bun";

const app = Bun.serve

const html = await Bun.file("./src/example.html").text()

app({
    port: 3000,
    routes:{

        "/" : Response.json({message: "Server rodando na porta 3000"}, {status: 200}),

        "/citi": new Response(await Bun.file("./src/assets/Logo.png").bytes(), {
            headers: {
                "Content-Type": "image"
            }
        }),
        "/citi/bad-cable-management" : new Response(await Bun.file("./src/assets/fios.jpeg").bytes(), {
            headers: {
                "Content-Type": "image"
            }
        }),

        "/citi/reqs":{
            GET: () => new Response("Tudo certo por aqui.", {status: 200}),
            POST: ()=> Response.json({message: 'criado.', created: true}),
            PUT: ()=> Response.json({message:'atualizado.', updated:true}),
            DELETE: ()=> new Response('', {status: 204})
        },

        "/citi/lab-inovacao" : new Response(html, {
            headers:{
            "Content-Type": "text/html"
        }}),

        "/citi/dev": Response.json({message: "Desenvolvimento 25.1"}, {status: 200}),

        "/citi/ditto": new Response(await Bun.file("./src/assets/Ditto.webp").bytes()),

        "/citi/skylines": new Response(await Bun.file("./src/assets/cities-skylines.jpg").bytes())
    },
    error(error){
        console.error(error.message)
        return new Response("Erro no servidor", {status: 500})
    }
})
//Servidor bun pronto (talvez necessite de algumas alterações futuramente)