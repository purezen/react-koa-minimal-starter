import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()

const router = new Router({
  prefix: '/api'
})

router.get('/', function (ctx, next) {
  ctx.body = 'Hello World'
})

app.use(router.routes())
app.listen(3000)
