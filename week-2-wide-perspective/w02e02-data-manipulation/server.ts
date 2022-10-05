import jsonServer from "json-server"
import orders from "./src/orders/orders.fake-data"

const server = jsonServer.create()
const router  = jsonServer.router({orders})
const middleware = jsonServer.defaults()

server.use(middleware)
server.use(router)
server.listen(3000, ()=> {
    console.log("JSON Server is running")
})