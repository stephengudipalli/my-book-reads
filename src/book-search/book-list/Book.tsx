import React from 'react';
// addtowishlist(){

// }
const Book = (props: any) => {
    function addToWishList(book: any, event: any) {
        props.selectedBook(book)
    }
    return (
        <div>
            {
                props && props.book && props.book.volumeInfo &&
                (
                    <div className="row align-items-center p-3 my-3 border-bottom border-primary">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <img src={props?.book?.volumeInfo?.imageLinks?.thumbnail} alt="thumbnail not available" className="rounded" />
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    Title:
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    {props?.book?.volumeInfo?.title}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    Author:
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    {props?.book?.volumeInfo?.authors?.length > 0 &&
                                        (
                                            props?.book?.volumeInfo?.authors.map((authorName: string, index: number) => {
                                                return (
                                                    <div key={'author_' + index}>
                                                        {authorName}
                                                    </div>
                                                )
                                            })
                                        )
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    Publisher:
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    {props?.book?.volumeInfo?.publisher}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    publishedDate:
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                    {props?.book?.volumeInfo?.publishedDate}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-right">
                                    <button id="addtowishlist" name="addtowishlist" className="btn btn-primary" onClick={addToWishList.bind('', props.book)}>
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default Book;