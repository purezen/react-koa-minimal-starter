export default function(router) {
  router.get('/ctrl1', (ctx) => {
    ctx.body = 'This is ctrl1'
  })
}
