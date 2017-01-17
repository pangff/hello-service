const restify = require('restify');
const random = require("random-js")();
const log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },{
      type: 'file', 
      filename: 'logs/access.log', 
      maxLogSize: 1024,
      backups:4,
      category: 'normal' 
    }
  ],
  replaceConsole: true
});

// app.use(app.router);
const logger = log4js.getLogger('normal');
logger.setLevel('INFO');

const server = restify.createServer();
server.get('/hello/:name', (req, res, next) => {
    let {
        name
    } = req.params;

    if (name == 'test') {
        // 模拟非正常退出
        if (random.integer(0, 9) > 6) {
            process.exit(1);
        }
    }

    res.send({
        status: 'OK'
    });
    logger.info("getName");
    next();
});
server.listen(3000, function() {
    logger.info('%s listening at %s', server.name, server.url);
});
