const Koa = require('koa');
const path = require('path')
const static = require('koa-static')
const logger = require('koa-logger')
const Router = require('koa-router')

let app = new Koa();
let router = new Router()

const staticPath = 'pub'

app.use(logger())

console.log('__dirname--->', path.join(__dirname, staticPath))
app.use(static(
    path.resolve(__dirname, staticPath)
))

const main = ctx => {
    ctx.response.body = 'hello zhvast';
};

// router.get('/',async(ctx,next)=>{
    
// })


// app.use(router.routes())
// app.use(main)
app.listen(7001,()=>{
    console.log('server is running at port 7001')
});