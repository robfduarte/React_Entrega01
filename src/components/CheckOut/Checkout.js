import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/Firebase/firebaseConfig"
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'
import { useNotification } from "../../notification/NotificationService"

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, total } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleConfirm = async (userData) => {
        const objOrder = {
            buyer: {
                name: 'Roberto Duarte',
                phone: '123456789',
                address: 'Street 123',
            },
            items: cart,
            total: total
        }

        console.log(objOrder)

        const ids = cart.map(serv => serv.id)

        const serviceRef = query(collection(db, 'services'), where(documentId(), 'in', ids))

        const servicesAddedFromFirestore = await getDocs(serviceRef)

        const { docs } = servicesAddedFromFirestore

        const batch = writeBatch(db)
        const outOfStock = []

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const serviceAddedToCart = cart.find(serv => serv.id === doc.id)
            const servQuantity = serviceAddedToCart?.quantity

            if(stockDb >= servQuantity) {
                batch.update(doc.ref, { stock: stockDb - servQuantity})
            } else {
                outOfStock.push({ id: doc, ...dataDoc})

            }
        })

        if(outOfStock.length === 0) {
            batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
        } else {
            setNotification('error', 'No available stock for service')

        }
    }

    return (
        <div>
            <h1>Checkout</h1>
            {/* <Form onConfirm={handleConfirm}/>  */}
            { orderId ? <h2>Order id is: {orderId}</h2> : <button onClick={handleConfirm}>Generate Order</button> }
        </div>
    )

}

export default Checkout