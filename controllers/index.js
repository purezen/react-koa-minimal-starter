import glob from 'glob'

export default function aggregateControllers(router) {
  const controllers = glob.sync('*.js', {
                        ignore: ['index.js'],
                        cwd: process.cwd() + '/controllers'
                      })

  controllers.map(function (controller) {
    require('./' + controller).default(router)
  })
}
