function Header() {
    return (
        <header style={{backgroundColor:"blue", color:"white", padding:"20px"}}>
            <h1> Welcome To Graphic Era Hill University</h1>
            <nav>
                <a>Home</a>
                <a>About Us</a>
                <a>Contact</a>
            </nav>
        </header>
    )
}

function Main() {
    return (
        <main>
            <p>
                Hello, We are Graphic Era, Transforming Dreams into Reality!
            </p>
        </main>
    )
}

function Footer() {
    return  (
        <footer style={{backgroundColor:"black", color:"white", padding:"20px"}}>
            <p>
                Contact Us on Phone : {1233467890}
            </p>
            Copyright GEHU 2026
        </footer>
    )
}

function App() {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);