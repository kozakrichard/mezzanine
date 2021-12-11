import React, {useEffect, useState} from 'react';
import Painting from "./Painting.js";
import axios from 'axios';
import './Home.css'
import { FaSearch } from 'react-icons/fa';
import loading from "../artwork/loading.gif" ;

function Home() {
    const [num, setNum] = useState([]);
    var [currWork, setCurrWork] =useState()
    const [yourQuery, setYourQuery] = useState("Auguste Renoir")
    const [isLoading, setLoading] = useState(true);
    var [artChecker, setArtChecker] = useState();
    var [emergArt, setEmergArt] = useState();
    const [searching, setSearching] = useState(false);

    const randomizer = (max) => {
        const a = Math.floor(Math.random() * max);
        console.log("first random num is: ")
        console.log(a)
        const b = Math.floor(Math.random() * max);
        console.log("second random num is: ")
        console.log(b)

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
    }, []);

    
    function makeGetRequest(path) {
        return new Promise(function (resolve, reject) {
            axios.get(path).then(
                (response) => {
                    var result = response;
                    console.log('Processing Request');
                    resolve(result);
                },
                    (error) => {
                    reject(error);
                }
            );
        });
    }


    useEffect(() => {
        
        setSearching(true);
        console.log("searching is " + searching)
        // GET request using axios inside useEffect React hook
        async function gettingData () {
            //console.log("getting data here");
            let response = await makeGetRequest('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=' + yourQuery)
            console.log("yourQuery is:")
            console.log(yourQuery);
            console.log("artChecker is (before setArtChecker(response.data)): ")
            console.log(artChecker)
            setArtChecker(response.data)  
            console.log("response.data is :")
            console.log(response.data)
            console.log("artChecker is:")
            console.log(artChecker)
            console.log("response.data.total is: ")
            console.log(response.data.total)

            if (typeof artChecker === 'undefined' || response.data.total === 0)     
            {
                setCurrWork(emergArt);
                console.log("emergency here, changed currWork to emergency Art")
                console.log(currWork)
            }
            else{
                setCurrWork(response.data);                     //AM I AN IDIOT OR A BEAST
            }
            setLoading(false);
            console.log("after setLoading to false");
            
        }
        console.log("getting data after")
        gettingData();
        console.log("searching is " + searching)
        setSearching(false);
      
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // dependency array has some variables, this useEffect will run every time one of these variables is updated
    }, [yourQuery, emergArt]);

    //    useEffect(() => {
    if (isLoading || typeof currWork === 'undefined') {
        return <div className = "Home">
            Loading...
            {console.log("loading now, currWork is")}
            {console.log(currWork)}
        </div>
    }

    return (

        <div>
            <h1>Mezzanine</h1>
            <form>
                <label>
                    <FaSearch/>
                    <input
                        type="text"
                        value={yourQuery}
                        onChange ={handleInput}
                    />
                </label>
            </form>
            <div className = "results">{currWork.total} Results</div>
            <button onClick = {() => setNum(randomizer(currWork.total - 1))}>Shuffle</button>
            <div className = "works">
                <div className = "work-display1">
                    <Painting num = {currWork.objectIDs[num[0]]}/>
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