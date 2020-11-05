const express = require('express');
const config = require('config');
const consign = require('consign')
module.exports= () =>{
    const app = express();
    app.set('port',process.env.Port|| config.get('server.port'));
    app.use(express.json());

    consign({cwd: 'api'}).then('data')
    .then('controllers')
    .then('routes')
    .into(app);
    
    require('../api/routes/receitas')(app);
    return app;
}