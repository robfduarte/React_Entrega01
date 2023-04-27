import Item from "../Item/Item"

const ItemList = ({ services }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', }}>
                {
                    services.map(service => {
                        return <Item key={service.id} {...service} />
                    })
                }
            </div>            
    )
}

export default ItemList