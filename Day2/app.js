function Heading() {
    return (<div id="Heading"> 
                    <center>
                        <h1> Hello World  </h1>
                        <h2> Welcome Here!</h2>
                    </center> 
                </div>);
}

const root = ReactDOM.createRoot( document.getElementById("root"));
root.render(<Heading/>);