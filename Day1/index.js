const root = document.getElementById('root');
const h1 = React.createElement('h1', {
                                        className:"heading",
                                        id: "first",
                                        style: {
                                            backgroundColor:"green",
                                            color:"white",
                                            fontSize:"30px"
                                        }
                                    }
                                , "Hello From Dynamic element Creation");

console.log(h1);
ReactDOM.render(h1,root);
