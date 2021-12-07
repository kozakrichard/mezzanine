import React, {useEffect, useState} from 'react';
import Painting from "./Painting.js";
import axios from 'axios';
import './Home.css'


function Home() {
    const [num, setNum] = useState([]);
    var [currWork, setCurrWork] =useState()
    const [yourQuery, setYourQuery] = useState("Auguste Renoir")
    const [isLoading, setLoading] = useState(true);
    var [artChecker, setArtChecker] = useState();
    var [emergArt, setEmergArt] = useState();

    const randomizer = (max) => {
        const a = Math.floor(Math.random() * max);
        const b = Math.floor(Math.random() * max);
        let numArr = [a,b];
        return numArr; 
    //console.log(currWork.total + " total images found");
    }

    const handleInput = (event) => {
        setYourQuery(event.target.value);
    }

    useEffect(() => {
        console.log("emergency art running");
        async function fetchEmerg () {
            console.log("fetching inside emerg, but before await")    
            let response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste%20Renoir')
            //.then(response => setEmergArt(response.data))
            console.log("response coming after")
            console.log(response.data)
            console.log("setting emergency art to response from above")
            setEmergArt(response.data)
            console.log("emergArt is:")
            console.log(emergArt)
            //console.log("setting current work to emergency art")
            //setCurrWork(emergArt)
            //console.log("fetching inside call emergArt after this")
            //console.log(isLoading)
        }
        console.log("fetching emerg before call");
        fetchEmerg();
        console.log("fetching emerg after call");
        //setLoading(false);
        
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [emergArt]);




    useEffect(() => {
        // GET request using axios inside useEffect React hook
        async function gettingData () {
            //console.log("getting data here");
            let response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=' + yourQuery)
            setArtChecker(response.data)       /////////////////////////problem is here, null array being passed to currWork
            console.log("artChecker is:")
            console.log(artChecker)
            if (typeof artChecker === 'undefined')
            {
                setCurrWork(emergArt);
            }
            else{
                setCurrWork(artChecker);
            }
            /*setTimeout(function(){
                console.log("inside timeout function, emergArt value should be after this")
                console.log(emergArt)
                if (typeof artChecker === 'undefined'){
                    console.log("UNDEFINED!! SET TO EMERGENCY ART")
                    setCurrWork(emergArt)
                    console.log("emergency avoided")
                    console.log(emergArt)
                    console.log(currWork)
                    }
                else{
                    console.log("DEFINED, WE OK")
                    setCurrWork(artChecker)
                    }

            }, 100);           //change this value after loading site and save for site to activate properly.
        */
            setLoading(false);
            console.log("after setLoading to false");
            
        }
        console.log("getting data after")
        gettingData();
        
      
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [yourQuery,num,emergArt]);

    //    useEffect(() => {
    if (isLoading || typeof currWork === 'undefined') {
        return <div className = "Home">
            Loading...
            {console.log("loading now, currWork is")}
            {console.log(currWork)}
        </div>
    }
    //    }, [currWork])

    return (

        <div>
            <h1>Mezzanine</h1>
            <form onSubmit={setYourQuery} >
                <label>
                    Your Filter:
                    <input
                        type="text"
                        value={yourQuery}
                        onChange ={handleInput}
                    />
                </label>
            </form>
            <button onClick = {() => setNum(randomizer(currWork.total - 1))}>Load</button>
            <div className = "works">
                <div className = "work-display1">
                    <Painting num = {currWork.objectIDs[num[0]]}/>          {/*currWork still is able to be passed as null, NEEDS TO BE FIXED*/}
                </div>
                <div className = "work-display2">
                    <Painting num = {currWork.objectIDs[num[1]]}/>
                </div>
            </div>
            {/*console.log(num + " value on loading Painting.js")*/}
        </div>   
    );
}

export default Home;