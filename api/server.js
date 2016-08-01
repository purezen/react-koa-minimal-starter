import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import attachControllers from './controllers'
import cors from 'kcors'
import serve from 'koa-static'

const app = new Koa()
const router = new Router({
  prefix: '/api'
})

app.use(cors())
attachControllers(router)

app.use(router.routes())
if (process.env.NODE_ENV === 'production') {
  app.use(serve(path.join(__dirname,'/../build')))
}

app.listen(process.env.PORT || 3000)
