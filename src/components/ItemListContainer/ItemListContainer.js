import './ItemListContainer.css'
import { getServices } from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [servicesState, setServicesState] = useState([])


    useEffect( () => {
        getServices()
            .then(services => {
                setServicesState(services)
            })
    }, [])
    

    return (
        <div>
            <h1 className="greetingText">{greeting}</h1>
            <ItemList services={servicesState}/>
        </div>
    )
}


export default ItemListContainer 