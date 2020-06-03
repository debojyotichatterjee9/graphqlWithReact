import React from 'react';
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash'
import { getAuthorsQuery, addBookMutation } from "../gqlQueries/queries";


class AddBook extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			name: '',
			genre: '',
			authorId: ''
		}
	}

// populating the author list
	displayAtuthors() {
		console.log(this.props)
		var data = this.props.AUTHOR_QUERY;
		if(data.loading) {
			return(<option disabled>Loading Authors...</option>)
		}
		else {
			return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
		}
	}

// to add the new entries to the db
	submitForm(event) {
		event.preventDefault();
		this.props.ADD_BOOK_QUERY({
			variables: {
				name: this.state.name,
				genre: this.state.genre,
				authorId: this.state.authorId
			}
		});
	}

    render() {
    	return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
            	<div className="field">
					<label>Book Name:</label>
					<input type="text" onChange={ event => this.setState({name: event.target.value}) }/>
				</div>

				<div className="field">
					<label>Genre:</label>
					<input type="text" onChange={ event => this.setState({genre: event.target.value}) }/>
				</div>

				<div className="field">
					<label>Author:</label>
					<select name="author-dropdown" id="author-dropdown" onChange={ event => this.setState({authorId: event.target.value}) }>
						<option value="">Select Author</option>
						{this.displayAtuthors()}
					</select>
				</div>
				<button>+</button>
            </form>
        );
    }
}
// using compose from react-apollo as there are more than one quries reqd to bind with this compoment
export default compose(
	graphql(getAuthorsQuery,{name: "AUTHOR_QUERY"}),
	graphql(addBookMutation,{name: "ADD_BOOK_QUERY"})
)(AddBook);
