import Koa from 'koa'
import Router from 'koa-router'
import aggregateControllers from './controllers'

const app = new Koa()

const router = new Router({
  prefix: '/api'
})

aggregateControllers(router)

app.use(router.routes())
app.listen(3000)
