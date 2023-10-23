export default function Item({item, onDelete, onUpdate}){
    
    return (<li>
            <input type="checkbox" value={item.packed} 
                onChange={() => onUpdate(item.id)} 
                    checked = {item.packed}/> {/* CHECK BOX in front of each list element*/}
            <span style = {item.packed ? {textDecoration:  /*
                                                            yeh style daala ki agar 
                                                            voh cheez packed hogaya, 
                                                            toh voh text pe ek line ayega
                                                            */
            'line-through'} : {}}>
            {item.quantity} {item.description} 
                </span> 
                    <button onClick={() => onDelete(item.id)}>❌</button>
                 </li>);
    /**
     * Here ❌ button should be able to delete the item from the item list and should also
     * 
     */
}