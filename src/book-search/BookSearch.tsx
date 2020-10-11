import React, { useEffect, useState } from "react";
import WishList from "../wish-list/WishList";
import BooksList from "./book-list/BooksList";
import { getBooksByType } from "./book-search.service";


const BookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
    const [allAvailableBooks, setAllAvailableBooks] = useState([]);
    let [selectedBooks, setSelectedBooks] = useState([]) as any;
    async function requestBooks() {
        if (bookTypeToSearch) {
            const allBooks = await getBooksByType(bookTypeToSearch);
            setAllAvailableBooks(allBooks);
        }
    }

    useEffect(() => {
        async function getAllBooks() {
            await requestBooks();
        }
        getAllBooks();
    }, [bookTypeToSearch]);

    function selectedBookData(book: any) {
        if (book) {
            selectedBooks.push(book);
            selectedBooks = selectedBooks.map((item: any) => { return item }).filter((value: any, index: any, self: any) => self.indexOf(value) === index);
            setSelectedBooks([...selectedBooks])
        }

    }
    return (
        <>
            <div className="book--container">
                <div className="search-params">
                    <div>
                        <form
                            onKeyUp={(e) => {
                                e.preventDefault();
                                updateBookTypeToSearch(bookType)
                            }}
                        >
                            <input
                                className="full-width"
                                autoFocus
                                name="gsearch"
                                type="search"
                                value={bookType}
                                placeholder="Search for books to add to your reading list and press Enter"
                                onChange={e => updateBookType(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </div>
            {
                allAvailableBooks &&
                (<div className="row mx-0">
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 border border-primary">
                        <BooksList searchBooksList={allAvailableBooks} selectedBookData={selectedBookData}></BooksList>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 border border-primary">
                        <WishList selectedBooks={selectedBooks}></WishList>
                    </div>
                </div>)

            }

        </>
    );
};

export default BookSearch;
