import React from 'react';
import { graphql } from 'react-apollo';
import { getBookDetailQuery } from "../gqlQueries/queries";


class BookDetails extends React.Component {

    
    render() {
        return ( 
            <div id="book-details">
                <p>Output details here...</p>
            </div>
        );
    }
}

export default graphql(getBookDetailQuery)(BookDetails);