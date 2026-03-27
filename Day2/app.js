function Heading() {
    return (
        <div id="Heading"> 
            <center>
                <h1> Hello World  </h1>
                <h2> Welcome Here!</h2>
            </center> 
        </div>
    );
}

function ShowName(name, age) {
    return (
        <div>
            <center>
                <h1> Welcome User {name}</h1>
                <h2>Your age accoding to us is {age}</h2>
            </center>
        </div>
    );
}

function showListArray(array) {
    return (
        <ol>
            {array.map((arrItem)=> { return <li>{arrItem}</li>})}
        </ol>
    );
}

const root = ReactDOM.createRoot( document.getElementById("root"));

const element1 = Heading();
const element2 = ShowName('Abhay Kanojia',20);
const element3 = showListArray(["Abhay", "Ankush", "Ankush", "Priyanshu"]);
root.render(
        <>
            {element1}
            {element2}
            {element3}
        </>
    );