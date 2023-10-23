import { useState } from "react";
export default function Form({onAddItems}) {
    const [desc, setDesc] = useState("");
    const [quant, setQuant] = useState(1);
    function handleSubmit(e){
        e.preventDefault();
        /* Above is done to prevent the default behaviour of HTML which reloads the page as soon as we
         * hit enter or click "Submit" on form 
         */
        if(!desc) return; //agar empty string pass kiya hai toh

        let NewItem = {id: Date.now(), description : desc, quantity: quant, packed:false};
        onAddItems(NewItem);
        //console.log(initialItems);
        setDesc("");
        setQuant(1);

    }
    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip ? 😍</h3>
        <select value={quant} onChange={(e) => {setQuant(Number(e.target.value))}}>
        {/** Number() isiliye kiya kyuki e.target.value hume string dega, lekin hume number me chahiye */}
            {Array.from({length:20}, (v, i) => i+1).map((i) => <option value={i} key = {i}>{i}</option>)}
            {/*Array.from({length:20, (v, i) => i+1} ek array dega with values 1 to 20 fir humne iss new array pe 
                map function use kiya joh hume return me array of <option> dega with values 1 to 20
            */}
        </select> {/* This is for the select box */}
        <input type="text" placeholder="item..." value={desc} onChange={(e) => {

        setDesc(e.target.value)
        }}></input> {/* This is for the INPUT FIELD */}
        <button>Add</button>
    </form>;
}