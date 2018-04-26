const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.body = 'hello zhvast';
};

app.use(main);
app.listen(7001);