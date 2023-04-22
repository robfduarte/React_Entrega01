import { useEffect, useState } from "react"
// import { getServiceById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../services/Firebase/firebaseConfig"


const ItemDetailContainer = () => {
    const [service, setService]= useState()
    const [loading, setLoading] = useState()
    const { itemId } = useParams ()

    useEffect( () => {
        const serviceRef = doc(db, 'services', itemId)
        
        getDoc(serviceRef)
            .then(snapshot => {
                const data = snapshot.data()
                const serviceAdapted = { id: snapshot.id, ...data}
                setService(serviceAdapted)
            }) .catch(error => {
                console.log(error)
            })
        // setLoading(true)
        // getServiceById(itemId)
        //     .then(service => {
        //         setService(service)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() =>{
        //         setLoading(false)
        //     })
    }, [itemId])

    if(loading) {
        return <h1>Loading Services...</h1>
    }

    return (
        <div>
            <h1>Service detail</h1>
            <ItemDetail {...service}/>
        </div>
        
    )
} 

export default ItemDetailContainer