const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLID
} = graphql;



// dummy data
var books = [
    {
        id: '10',
        name: 'Book Name10',
        genre: 'Book10 Genere',
        authorId: '10'
    },
    {
        id: '20',
        name: 'Book Name20',
        genre: 'Book20 Genere',
        authorId: '20'
    },
    {
        id: '30',
        name: 'Book Name30',
        genre: 'Book30 Genere',
        authorId: '30'
    },
    {
        id: '40',
        name: 'Book Name40',
        genre: 'Book30 Genere',
        authorId: '20'
    },
    {
        id: '50',
        name: 'Book Name50',
        genre: 'Book30 Genere',
        authorId: '30'
    },
    {
        id: '60',
        name: 'Book Name60',
        genre: 'Book30 Genere',
        authorId: '30'
    }

]
var authors = [
    {
        id: '10',
        name: 'Author Name10',
        age: '40'
    },
    {
        id: '20',
        name: 'Author Name20',
        age: '50'
    },
    {
        id: '30',
        name: 'Author Name30',
        age: '60'
    }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                //                return _.find(authors, { id: parent.authorId });
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                //                return _.filter(books, { authorId: parent.id })
            }
        }
    })
})



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                //get data from db here
                //                return _.find(books, {id: args.id}) // using lodash to look through the dummy data array
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                // get data from db here
                //                return _.find(authors, { id: args.id })
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                //                return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                //                return authors
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: {
                    type: GraphQLString
                },
                age: {
                    type: GraphQLInt
                }
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save(); // when we save mongoose gives us the object back
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: {
                    type: GraphQLString
                },
                genre: {
                    type: GraphQLString
                },
                authorId: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save(); // when we save mongoose gives us the object back
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
