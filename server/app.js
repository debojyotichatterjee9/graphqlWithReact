const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

const app = express();  // invoking app

app.use('/graphql', graphqlHTTP({
    schema // <--- es6 syntax <schema: schema>
}));

app.listen(4000, () => {
    console.log(`Listening Port: 4000`)
});