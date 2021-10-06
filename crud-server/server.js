const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const {db} = require('./DB/DB');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));


const router = new Router();

router.get('/notes', async (ctx, next) => {
    ctx.response.body = db.data;
});

router.post('/notes', async(ctx, next) => {
    db.addItem(ctx.request.body)
    ctx.response.status = 204;
});

router.delete('/notes/:id', async(ctx, next) => {
    const noteId = Number(ctx.params.id);
    db.deleteItem(noteId);
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));