import './Checkout.css' 
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/Firebase/firebaseConfig";
import {documentId, getDocs, query, collection, where, writeBatch, addDoc } from "firebase/firestore";
import { useNotification } from "../../notification/NotificationService";
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../context/AuthContext';

const Checkout = () => {
const { user } = useAuth();

const [orderId, setOrderId] = useState("");
const { cart, total, clearCart } = useContext(CartContext);
const { setNotification } = useNotification();
const navigate = useNavigate()

const [name, setName] = useState(user?.username || "");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");


const handleConfirm = async (e) => {
    e.preventDefault();
	
    if (!name || !phone || !address) {
        setNotification("error", "Please fill in all the fields");
    return;
}

    const objOrder = {
        buyer: {
        name: name,
        phone: phone,
        address: address,
    },
    items: cart,
    total: total,
    };

    console.log(objOrder);

    const ids = cart.map((serv) => serv.id);

    const serviceRef = query(
    collection(db, "services"),
    where(documentId(), "in", ids)
    );

    const servicesAddedFromFirestore = await getDocs(serviceRef);

    const { docs } = servicesAddedFromFirestore;

    const batch = writeBatch(db);
    const outOfStock = [];

    docs.forEach((doc) => {
    const dataDoc = doc.data();
    const stockDb = dataDoc.stock;

    const serviceAddedToCart = cart.find((serv) => serv.id === doc.id);
    const servQuantity = serviceAddedToCart?.quantity;

    if (stockDb >= servQuantity) {
        batch.update(doc.ref, { stock: stockDb - servQuantity });
    } else {
        outOfStock.push({ id: doc, ...dataDoc });
    }
    });

    if (outOfStock.length === 0) {
    batch.commit();

    const orderRef = collection(db, "orders");

    const orderAdded = await addDoc(orderRef, objOrder);
	clearCart()

    setOrderId(orderAdded.id);
            setTimeout(() => {
    navigate('/')
            }, 5000)

    } else {
    setNotification("error", "No available stock for service");
    }
};


return (
    <div className='checkout-container'>
    <h1 className='checkout-tittle'>CheckOut</h1>
    {orderId ? (
        <h2>Order completed successfully. Your order id is: {orderId}</h2>
    ) : (
        <form onSubmit={handleConfirm} className="form-style">
        <label>
            Name:
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="checkout-input"
            />
        </label>
        <br />
        <label>
            Phone: 
            <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="checkout-input"
            />
        </label>
        <br />
        <label>
            Address:
            <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="checkout-input"
            />
        </label>
<br />
<button type="submit" className="checkout-button">Generate Order</button>
</form>
)}
</div>
);
};


export default Checkout;