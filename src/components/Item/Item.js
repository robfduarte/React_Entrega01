import { Link } from "react-router-dom"

const Item = ({ id, name, price }) => {
    return (
        <div style={{background: '#DEB992', margin: 10}}>
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <Link to={`/item/${id}`} style={{ background: 'black', color: 'white'}}>See detail</Link>
        </div>
    )
}

export default Item