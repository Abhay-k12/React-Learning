import {useRef} from 'react';

export default function Video() {
    const videoRef = useRef(null);

    function startVideo() {
        videoRef.current.play();
    }

    function pauseVideo() {
        videoRef.current.pause();
    }

    function resetVideo() {
        videoRef.current.currentTime = 0;
    }

    return (
        <>
            <video src="" ref={videoRef} width="100px" height="200px"> </video>
            <button onClick={startVideo}>Play</button>
            <button onClick={pauseVideo}>Stop</button>
            <button onClick={resetVideo}>Reset</button>
        </>
    )
}