import { gql } from 'apollo-boost';

const getBooksQuery = gql`
{
    books {
        name
        id
    }
}
`

const getAuthorsQuery = gql `
{
    authors {
        name
        id
    }
}
`
// when this mutation os called these query variables are passed throught the mutation query
// the exclamation mark denotes that the parameter is a required param
const addBookMutation = gql`
mutation($name: String!, $genre:String!, $authorId:ID!){
  addBook(name:$name, genre:$genre, authorId:$authorId){
    name
    id
  }
}
`

export {getBooksQuery, getAuthorsQuery, addBookMutation};
