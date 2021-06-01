const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('indexPath', '/', async(ctx) => {
    await ctx.render('index/index', {
        appVersion: pkg.version,
        searchPostNew: () => ctx.router.url('index.new'),
    });
});

router.get('index.new', 'index/new', async(ctx) => {
    await ctx.render('index/new', {
        submitSearch: () => ctx.router.url('index.search'),
    });
});

router.get('index.show', '/:searchid', async(ctx) => {
    const { searchid } = ctx.params;
    const postslist = await ctx.orm.post.findAll({
        where: { id: searchid },
        order: [
            ['id', 'DESC'],
        ],
    });
    await ctx.render('index/show', {
        text: searchid,
        searchPosts: () => ctx.router.url('index.create'),
        postslist,
        postPath: (id2) => ctx.router.url('posts.show', id2),
    });
});

router.get('index.search', 'index/', async(ctx) => {
    const { Op } = require('sequelize');
    const word1 = await ctx.request.url;
    const word2 = await JSON.stringify(word1);
    const word3 = word2.split('=');
    const wordx = word3[1];
    const word4 = wordx.split('&');
    const word5 = word4[0];
    const word6 = word5.split('+').join(' ');
    const word = word6;
    // eslint-disable-next-line prefer-destructuring

    const postslist = await ctx.orm.post.findAll({
        where: {
            title: {
                [Op.like]: '%' + word + '%'
            },
        },
        order: [
            ['id', 'DESC'],
        ],
    });

    await ctx.render('index/search', {
        word,
        postslist,
        searchPostNew: () => ctx.router.url('index.new'),
        postPath: (id2) => ctx.router.url('posts.show', id2),
    });
});


module.exports = router;