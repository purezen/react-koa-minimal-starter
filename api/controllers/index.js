import glob from 'glob'

export default function attachControllers (router) {
  const controllers = glob.sync('*.js', {
                        ignore: ['index.js'],
                        cwd: process.cwd() + '/api/controllers'
                      })

  controllers.map (function (controller) {
    require('./' + controller).default(router)
  })
}
