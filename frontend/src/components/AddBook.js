import React from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from "../gqlQueries/queries";


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
		var data = this.props.data;
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
		console.log(this.state)
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

export default graphql(getAuthorsQuery)(AddBook);
