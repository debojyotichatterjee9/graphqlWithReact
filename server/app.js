const express = require('express');
const graphqlHTTP = require('express-graphql')

const app = express();  // invoking app

app.use('/graphql', graphqlHTTP({
    
}));

app.listen(4000, () => {
    console.log(`Listening Port: 4000`)
});