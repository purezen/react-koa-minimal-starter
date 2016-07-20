import db from '../db/cars.json'

export default function(router) {
  router.get('/currency', (ctx) => {
    ctx.body = db
  })
}
