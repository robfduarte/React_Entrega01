import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/Firebase/firebaseConfig'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesRef = collection(db, 'categories')

        getDocs(categoriesRef)
            .then(snapshot =>{
                const categoriesAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data }
                })

                setCategories(categoriesAdapted)
            })
        

    }, [])
    return (
        <nav className="NavBar">
            <Link to='/' className="Brand">Professional Services</Link>
            <div>
                {
                    categories.map(cat => {
                        return (
                            <NavLink key={ cat.id } to={`/category/${cat.slug}`} className='btn btn-dark'>{cat.label}</NavLink>
                        )
                    })
                }
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar