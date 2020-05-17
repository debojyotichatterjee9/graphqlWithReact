const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();  // invoking app


// allowing cross-origin reqs
app.use(cors());

// connecting to mlab database
mongoose.connect(`mongodb://admin:${encodeURIComponent('admin@123')}@ds263172.mlab.com:63172/graphqldb`);

mongoose.connection.once('open', () => {
    console.log('Connected to Mlab Database')
})

app.use('/graphql', graphqlHTTP({
    schema, // <--- es6 syntax <schema: schema>
    graphiql: true
}));

app.listen(4000, () => {
    console.log(`Listening Port: 4000`)
});