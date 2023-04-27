import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {


    return (
        <div style={{background: '#DEB992', marginLeft: 500, marginBottom: 50, width: 500}}>
            <h3>{name}</h3>
            <img src={img} alt={name} style={{ width: 300, borderRadius: 10, height: 200}}/>
            <h4>Price: $ {price}</h4>
            <Link to={`/item/${id}`} style={{ background: 'black', color: 'white'}}>See detail</Link>
        </div>
    )
}

export default Item