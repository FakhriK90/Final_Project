import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/actionsProductAdmin';
import ProductClient from '../product/ProductClient'

const ProductListClient = () => {
    const productListClient = useSelector(state => state.productsAdminReducer.products);
    const loading = useSelector(state => state.productsAdminReducer.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <div>
            {loading? <div className="load">
  <hr/><hr/><hr/><hr/>
</div>: <div style={{display:'flex' ,flexWrap:'wrap' , justifyContent:"space-between" ,margin:30}}>
    {productListClient.map(e=> <ProductClient  productClient={e} key={e._id}/>)}
</div> }
        </div>
    )
}

export default ProductListClient
