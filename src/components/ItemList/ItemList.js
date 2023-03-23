import Item from "../Item/Item"

const ItemList = ({ services }) => {
    return (
        <div style={{ display: 'flex'}}>
                {
                    services.map(service => {
                        return <Item {...service} />
                    })
                }
            </div>            
    )
}

export default ItemList