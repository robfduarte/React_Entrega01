import './ItemListContainer.css'
import { getServices, getServicesByCategory } from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'

const ItemListContainer = ({greeting}) => {
    const [servicesState, setServicesState] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams() 

    useEffect( () => {
        setLoading(true)
        const asyncFunction = categoryId ? getServicesByCategory : getServices


        asyncFunction(categoryId)
            .then(services => {
                setServicesState(services)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [categoryId])
    
    if(loading) {
        return <h1>Loading Services...</h1>
    }

    if(servicesState && servicesState.length === 0) {
        return <h1>No services available</h1>
    }


    return (
        <div>
            <h1 className="greetingText">{greeting}</h1>
            <ItemList services={servicesState}/>
        </div>
    )
}


export default ItemListContainer 