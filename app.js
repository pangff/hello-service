const restify = require('restify');

const server = restify.createServer();
server.get('/hello/:name', (req, res, next) => {
    res.send({
        status: 'OK'
    });
    next();
});
server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});
