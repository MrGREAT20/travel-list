export default function Stats({items}){
    const len = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = (len === 0 ? 0 : Math.round(numPacked / len * 100));
    return <footer className="stats">
       <em>
            {
                percentage === 100 ? `You got everything! Ready to go ✈️` : `👜 You have ${len} items in your list, 
                and you already packed ${numPacked} (${percentage}%)`
            }
        </em>
    </footer>;
}