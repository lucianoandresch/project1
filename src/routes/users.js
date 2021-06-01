const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.get('users.list', '/', async(ctx) => {
    const userslist = await ctx.orm.user.findAll({
        order: [
            ['id', 'DESC'],
        ],
    });

    await ctx.render('users/index', {
        message_users: 'Our writers are the best!',
        notice: ctx.flashMessage.notice,
        userslist,
        userPath: (id) => ctx.router.url('users.show', id),
    });
});

router.get('users.show', '/:id', async(ctx) => {
    const { id } = ctx.params;
    //const user = await ctx.orm.user.findOne({ where: { first_name: 'Luci' } });
    const user = await ctx.orm.user.findByPk(id);
    const posts = await ctx.orm.post.findAll({
        where: { creator_id: user.id },
        order: [
            ['id', 'DESC'],
        ],
    });
    if (!user) return ctx.status = 404;
    await ctx.render('users/show', {
        user,
        posts,
        postPath: (id1) => ctx.router.url('posts.show', id1),
        notice: ctx.flashMessage.notice,
    });
});

module.exports = router;