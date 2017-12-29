const koa = require('koa');
const app = new koa();
const bodyparser = require('koa-bodyparser');
const view = require('koa-view');
const static = require('koa-static');

const loginrouter = require('servise')

app.use(static(__dirname + '/public'));
app.use(view(__dirname + '/dist/html', {
  map: {
    html: 'swig'
  }
}));
app.use(bodyparser());
app.use(loginrouter.routes());


app.listen(5500);