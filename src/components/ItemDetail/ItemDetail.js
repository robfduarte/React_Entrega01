const ItemDetail = ({ name, price, img, description}) => {
        return (
            <div style={{background: '#DEB992', margin: 10}}>
                <h2>{name}</h2>
                <img src={img} alt={name} style={{ width: 500}}/>
                <h3>Price: {price}</h3>
                <p>Description: {description}</p>

            </div>
        )
    }

export default ItemDetail