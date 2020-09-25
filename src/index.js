const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Dependencias
const products = require('./routes/productsRoute')

// seeting 
app.set('port', process.env.PORT || 4000 );

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// rutas
app.use('/api/roomout/v1', products )

app.listen(app.get('port'), () => {
    console.log('server listening on port', app.get('port'));
});