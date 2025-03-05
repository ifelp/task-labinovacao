import { serve } from "bun";

const app = Bun.serve

app({
    port: 3000,
    routes:{
        "/" : Response.json({message: "Server rodando na porta 3000"}, {status: 200}),
        //rotas com fotos (retirar depois)
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
            GET: () => new Response("Tudo certo por aqui", {status: 200}),
            POST: async req =>{
                const body = await req.json()
                return Response.json({message: `Olá, ${body.name}`},{created: true, ...body}) //isso supondo que você irá colocar uma propriedade name no seu body
            },
            PUT: async req=>{
                const body = await req.json()
                return Response.json({updated: true, ...body})
            },
            DELETE: ()=> new Response("Deletado", {status: 204})
        }
    },
    error(error){
        console.error(error.message)
        return new Response("Erro no servidor", {status: 500})
    }
})
//Servidor bun pronto (talvez necessite de algumas alterações futuramente)