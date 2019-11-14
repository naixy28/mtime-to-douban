import Koa from 'koa'
import logger from 'koa-logger'
import json from 'koa-json'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

app.use(logger())
app.use(json())

app.use(router.routes())
app.use(router.allowedMethods())

app.use(async ctx => {
  ctx.body = { hello: 'world' }
})

app.listen(3000, () => {
  console.log('listening')
})
