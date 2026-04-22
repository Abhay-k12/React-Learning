import React from "react";

const Sum = React.memo((props)=> {
    function calculateSum() {
        let n = props.number;
        return n*(n+1)/2;
    }

    let total = calculateSum();
    console.log("Rendered Sum");
    
    return (
        <>
            <h1>Total Sum: {total}</h1>
        </>
    )
});

export default Sum;