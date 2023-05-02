import './Item.css'
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {


    return (
        <div className="item-container">
            <h3>{name}</h3>
            <img src={img} alt={name} style={{ width: 300, borderRadius: 10, height: 200}}/>
            <h4>Price: $ {price}</h4>
            <Link to={`/item/${id}`} style={{ background: 'black', color: 'white'}}>See detail</Link>
        </div>
    )
}

export default Item