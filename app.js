const express = require('express');
const app = express();

app.use(express.static('public'));

const mainRouter = require('./routers/main');
const aboutRouter = require('./routers/about');

app.use('/', mainRouter);
app.use('/about', aboutRouter);

app.listen(3000, () => {
   console.log('Servidor funcionando');
});
