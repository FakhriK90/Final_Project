import React from 'react'

const DisplayCart = ({cartClient}) => {
    return (
        <div>
            <h1>{cartClient && cartClient.productName}</h1>
            <h1>{cartClient && cartClient.productPrice}</h1>
        </div>
    )
}

export default DisplayCart
