import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/Firebase/firebaseConfig'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(categoriesRef)
            .then(snapshot =>{
                const categoriesAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })

                setCategories(categoriesAdapted)
            }).catch(error => {
                console.log(error)
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