const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.get('posts.list', '/', async(ctx) => {
    //CONSULTA ASÍNCRONA A BASE DE DATOS
    const postslist = await ctx.orm.post.findAll({
        order: [
            ['id', 'DESC'],
        ],
    });

    //FIN DE CONSULTA A BASE DE DATOS
    await ctx.render('posts/index', {
        postslist,
        message_posts: 'Collecting the best writing around the World!',
        notice: ctx.flashMessage.notice,
        //le paso funciones tambien
        postPath: (id) => ctx.router.url('posts.show', id),
        newPostPath: () => ctx.router.url('posts.new'),
    });
});

// ENDPOINTS DEL CREATE

router.get('posts.new', '/new', async(ctx) => {
    await ctx.render('posts/new', {
        submitPostPath: () => ctx.router.url('posts.create'),
    });
});


router.get('posts.show', '/:id', async(ctx) => {
    const { id } = ctx.params;
    //const user = await ctx.orm.user.findOne({ where: { first_name: 'Luci' } });
    const post = await ctx.orm.post.findByPk(id);
    if (!post) return ctx.status = 404;
    await ctx.render('posts/show', {
        post,
        notice: ctx.flashMessage.notice,
    });
});

router.post('posts.create', '/', async(ctx) => {
    const post = ctx.orm.post.build(ctx.request.body);
    try {
        await post.save({ fields: ['title', 'text', 'image', 'creator_id'] });
        ctx.redirect(ctx.router.url('posts.list'));
    } catch (validationError) {
        await ctx.render('posts/new', {
            errors: validationError.errors,
            submitPostPath: () => ctx.router.url('posts.create'),
        });
    }
});
module.exports = router;