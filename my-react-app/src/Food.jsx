

function Food(){

    const food1 = 'Orange';
    const food2 = 'Banana';


    return(
       <ul>
        <li>Apples</li>
        <li>{food1.charAt(0)}</li>
        <li>{food2.charAt(0)}</li>
       </ul>
    );

}

export default Food