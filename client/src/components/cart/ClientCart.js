import React from 'react'

const ClientCart = ({cartClient}) => {
    return (
        <div>
            <h1>{cartClient && cartClient.productName}</h1>
        </div>
    )
}

export default ClientCart
