import { useEffect, useState } from "react";

export default function App() {

  const [users,setUsers] = useState([]);
  const [count, setCount] = useState(30);

  useEffect(()=>{
    async function GitHubProfile() {
      const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      setUsers(data);
      console.log(data);
    }

    GitHubProfile();

  },[count]);

  return (
    <>
    <center><h1>GitHub User</h1></center>
    Enter a number: <input type="number" value={count} onChange={(event)=>setCount(event.target.value)}></input>
    
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:"10px", margin:"20px"}}>
      {
        users.map((user)=>(
          <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.id}/>
        ))
      }
    </div>
    </>
  )
}

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [show, setShow] = useState(true);

  useEffect(()=> {

    if(show==false) {
      return;
    }

    const intervalId = setInterval(()=> {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // This function will be executed when the show values changes.
    return ()=> {
      clearInterval(intervalId);
    }
  },[show]);

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
      <button onClick={()=>setShow(!show)}>{show?"Hide Time":"ShowTime"}</button>
      {show&&<strong>Current Time: {time}</strong>}
    </div>
  )
}