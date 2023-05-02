import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/Firebase/firebaseConfig'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const { user } = useAuth()

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
                            <NavLink key={ cat.id } to={`/category/${cat.slug}`} className='btn btn-dark'  style={{ marginRight: "5px" }}>{cat.label}</NavLink>
                        )
                    })
                }
            </div>
            {
          user ? (
            <CartWidget />
            ) : (
                <button className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} onClick={() => { window.location.href = '/login'; }}
                style={{ backgroundColor: 'rgb(244, 154, 93)', color: 'white', borderRadius: 10}}
                >Login</button>
              )
            }
        </nav>
    )
}

export default NavBar