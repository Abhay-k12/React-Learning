import { useRef } from "react";

export default function Login() {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    function handelSubmission(event) {
        event.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <form onSubmit={handelSubmission}>
            <input type="email" ref={emailRef} required></input>
            <input type="password" ref={passwordRef} required></input>
            <button type="submit"></button>
        </form>
    )
    
    /*
        Previously we were using state variables for input form, and in input field we were writing
        <input type="email" onChange={(e)=> setEmail(e.target.value)}></input>
        But this was rendering the browser again and again, whenever the user enters anything in
        brower, so insted we provide browser the reference of the input fields which will avoid the
        rendering of component again and again.
    */
}