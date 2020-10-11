import React from 'react';

const WishList = (props: any) => {
    return (
        <div>
            <div className="row">
                <div className="col-12 border-bottom border-success">
                    My Readings Wishlist({props?.selectedBooks?.length})
                </div>
            </div>
            {
                props && props.selectedBooks.length > 0 &&
                props.selectedBooks.map((itemObj: any, key: number) => {
                    return (
                        <div key={"item_" + key} className="row border-bottom border-success">
                            <div className="col-1">
                                <div>
                                    {key+1}
                                </div>
                            </div>
                            <div className="col-9">
                                <div>
                                    {itemObj?.volumeInfo?.title}
                                </div>
                            </div>
                        </div>
                    )
                }

                )
            }


        </div>
    );
}

export default WishList;