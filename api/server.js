import Koa from 'koa'
import Router from 'koa-router'
import attachControllers from './controllers'
import cors from 'kcors'

const app = new Koa()
const router = new Router({
  prefix: '/api'
})

app.use(cors())

attachControllers(router)

app.use(router.routes())
app.listen(3000)
