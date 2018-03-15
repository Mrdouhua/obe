// 统一对路由进行分发
// 以页面为单位，一个页面作为一个模块
module.exports = (app) => {
  app.get('/', function (req, res) {
    // res.redirect('/posts')
    res.send('INDEX')
  })
  app.use('/users', require('./users'))

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404')
    }
  })
}