import Koa from 'koa'
import Router from 'koa-router'
import attachControllers from './controllers'

const app = new Koa()
const router = new Router({
  prefix: '/api'
})

attachControllers(router)

app.use(router.routes())
app.listen(3000)
