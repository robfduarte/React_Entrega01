import './ItemListContainer.css'
// import { getServices, getServicesByCategory } from '../../asyncMock'
import { useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/Firebase/firebaseConfig'

const ItemListContainer = ({greeting}) => {
    const [servicesState, setServicesState] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { categoryId } = useParams() 

    useEffect( () => {
        const serviceRef = categoryId 
        ? query(collection(db, 'services'), where ('category', '==', categoryId) )
        : collection(db, 'services')

        getDocs(serviceRef)
            .then(snapshot => {
                const servicesAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })

                setServicesState(servicesAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally (() => {
                setLoading(false)
            })


        // setLoading(true)
        // const asyncFunction = categoryId ? getServicesByCategory : getServices


        // asyncFunction(categoryId)
        //     .then(services => {
        //         setServicesState(services)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         setError(true)
        //     })
        //     .finally(() =>{
        //         setLoading(false)
        //     })
    }, [categoryId])
    
    if(loading) {
        return <h1>Loading Services...</h1>
    }

    if(error) {
        return <h1>Please reload page</h1>
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