const Koa = require('koa');
const path = require('path')
const static = require('koa-static')
const logger = require('koa-logger')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

let app = new Koa();
app.use(bodyParser())
// let router = new Router()

// const staticPath = 'pub'

app.use(logger())

// console.log('__dirname--->', path.resolve(__dirname, staticPath))
// app.use(static(
//     path.resolve(__dirname, staticPath)
// ))

const main = ctx => {
    console.log('ctx.request.body---->', ctx.request.body, typeof (ctx.request.body))
    return ctx.succeed({
        errcode: 200
    })
};

// app.use(router.routes())
app.use(main)
app.listen(7001,()=>{
    console.log('server is running at port 7001')
});