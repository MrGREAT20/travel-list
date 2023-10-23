import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
let initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: false },
    { id: 4, description: "Pants", quantity: 5, packed: true },
];
export default function App(){
    const [items, setItems] = useState(initialItems); //first common parent of form and packingList

    function handleAddItems(newitem){
        /**Earlier, this function was inside FORM COMPONENT */
        setItems(items => [...items, newitem]);
        /* 
            Here we used callback because the New State depends on the Current State
 
            also remember, in react you are not allowed to MUTATE (MODIFY) STATE
            which means you cant do this

            setItems(items => items.push(newitem));  // ❌ not allowed


            to modify the state, we used destructing of the array
        
        */
    }
    function handleDeleteItem(id){
        /**
         * This function is responsible for deleting the item from the list
         */
        const newList = items.filter(item => item.id!==id);
        setItems(items => newList);
    }
    function updateItem(id){
        /**
         * This function is responsible for updating the item from the list
         * i.e making packed:false to true
         */
        // const newList = items.map(item => (item.id === id ? item.packed = true : false));
        /*  This above is wrong implementation because items is a STATE and STATEs are IMMUTABLE in REACT */
        setItems(items => items.map(item => item.id === id ? {...item, packed:!item.packed}: item));
    }
    function deleteAll(){
        /**
         * This function is responsible for deleting everything in the List
         */
        setItems([]);
    }
    return <div className="app">
        <Logo/>
        <Form onAddItems = {handleAddItems}/>
        <PackingList items = {items} onDelete = {handleDeleteItem} onUpdate = {updateItem} deleteAll = {deleteAll}/>
        <Stats items = {items}/>
    </div>
}
