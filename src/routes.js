const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');

const users = require('./routes/users');
const posts = require('./routes/posts');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());

router.use('/index', index.routes());
// nuevas Rutas
router.use('/posts', posts.routes());
router.use('/users', users.routes());

//

module.exports = router;