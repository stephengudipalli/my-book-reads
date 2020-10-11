import React from 'react';
import Book from './Book';

const BooksList = (props: any) => {
    function selectedBook(book: any) {
        props.selectedBookData(book);
    }
    return (
        <div>
            {
                props && props.searchBooksList && props.searchBooksList.totalItems > 0 &&
                (
                    <div>
                        {
                            props.searchBooksList.items && props.searchBooksList.items.length > 0 &&
                            (
                                props.searchBooksList.items.map((item: any, key: number) => (<Book key={'book_' + key} book={item} selectedBook={selectedBook}></Book>))
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default BooksList;