import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../redux/actions/actionProfileUser'
import NavigationClient from '../navigation/NavigationClietn'

const Profle = () => {
    const profile = useSelector(state => state.profileReducer.user)
    const loading = useSelector(state => state.profileReducer.isLoading)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserInfo())
    }, [])
    return (
        <div>
            <NavigationClient/>
            <div>
            {loading? <div className="load">
  <hr/><hr/><hr/><hr/>
</div>: <div style={{display:'flex' ,flexWrap:'wrap' , justifyContent:"space-between" ,margin:30}}>
    <h1>{profile && profile.firstName}</h1>
</div> }
            
        </div>
        </div>
    )
}

export default Profle
