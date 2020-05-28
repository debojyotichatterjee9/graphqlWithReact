import React from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from "../gqlQueries/queries";


class AddBook extends React.Component {

	displayAtuthors() {
		var data = this.props.data;
		if(data.loading) {
			return(<option disabled>Loading Authors...</option>)
		}
		else {
			return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
		}
	}

    render() {
    	return (
            <form id="add-book">
            	<div className="field">
					<label>Book Name:</label>
					<input type="text" />
				</div>

				<div className="field">
					<label>Genre:</label>
					<input type="text" />
				</div>

				<div className="field">
					<label>Author:</label>
					<select name="" id="">
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