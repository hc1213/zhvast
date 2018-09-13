const Koa = require('koa');
const path = require('path')
const static = require('koa-static')
const app = new Koa();

const staticPath = 'public'

app.use(static(
    path.join(__dirname,staticPath)
))
// const main = ctx => {
//     ctx.response.body = 'hello zhvast';
// };

// app.use(main);
app.listen(7001,()=>{
    console.log('server is running at port 7001')
});