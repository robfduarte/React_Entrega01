import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ services }) => {
    return (
        <div className='itemList-container'>
                {
                    services.map(service => {
                        return <Item key={service.id} {...service} />
                    })
                }
            </div>            
    )
}

export default ItemList