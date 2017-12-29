const router = require('koa-router')();

router.get('/login',async function (ctx,next){
	await ctx.render('login');
});


module.exports = router;
