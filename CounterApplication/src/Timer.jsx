import {useState, useRef, useEffect} from 'react';

export default function Timer() {
    const [miliSecond, setMiliSecond] = useState(0);
    const [running, setRunning] = useState(false);
    let miliSecondRef = useRef(null);

    useEffect(()=> {
        if(running==false) {
            if(miliSecond.current != null) {
                clearInterval(miliSecondRef.current);
                miliSecondRef.current = null;
            }
            return;
        }

        miliSecondRef.current = setInterval(()=>{
            setMiliSecond(miliSecond=>miliSecond+10);
        }, 10);

        return ()=> {
            clearInterval(miliSecondRef.current);
            miliSecondRef.current =  null;
        }
    }, [running]);

    function resetTimer() {
        if(miliSecondRef.current != null)
            clearInterval(miliSecondRef.current);
        
        setRunning(false);
        setMiliSecond(0);
        miliSecondRef.current = null;
    }

    function updateTime() {
        let minutes = Math.floor((miliSecond/1000/60)%60);
        let seconds = Math.floor((miliSecond/1000)%60);
        let centiSeconds = Math.floor((miliSecond/10)%100);

        let minuteString  = (minutes<9)?"0"+minutes.toString():minutes.toString();
        let secondString = (seconds<9)?"0"+seconds.toString():seconds.toString();
        let centiSecondsString  = (centiSeconds<9)?"0"+centiSeconds.toString():centiSeconds.toString();
        return `${minuteString}:${secondString}:${centiSecondsString}`;
    }
    return (
        <>
            <div><h2>{updateTime()}</h2></div>
            <h2>Current Time: {new Date().toLocaleTimeString()}</h2>
            <button onClick={()=>setRunning(true)}>Start</button>
            <button onClick={()=>setRunning(false)}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    )
}