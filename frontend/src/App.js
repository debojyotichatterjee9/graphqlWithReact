import React from 'react';
import logo from './logo.svg';

import BookList from './components/BookList'

class App extends React.Component {
    render() {
        return ( 
            <div id="main">
            <h1>Heading</h1>
            <BookList></BookList>
            </div>
        );
    }
}

export default App;
