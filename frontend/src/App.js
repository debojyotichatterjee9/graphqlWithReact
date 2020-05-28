import React from 'react';
import logo from './logo.svg';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

import BookList from './components/BookList';
import AddBook  from "./components/AddBook";


// Apollo Client Setup

const client  = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

class App extends React.Component {
    render() {
        return ( 
            <ApolloProvider client={client}>
                <div id="main">
                    <h1>Heading</h1>
                    <BookList />
                    <AddBook />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
