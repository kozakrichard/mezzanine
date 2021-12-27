import React, {useEffect, useState} from 'react';
import Painting from "./Painting.js";
import axios from 'axios';
import './Home.css'
import { FaSearch } from 'react-icons/fa';
import { GrCircleInformation } from 'react-icons/gr';
import loading from "../artwork/loading.gif" ;

function Home() {
    const [num, setNum] = useState([]);
    var [currWork, setCurrWork] =useState()
    const [yourQuery, setYourQuery] = useState("Auguste Renoir")
    const [isLoading, setLoading] = useState(true);
    var [artChecker, setArtChecker] = useState();
    var [emergArt, setEmergArt] = useState();
    const [searching, setSearching] = useState(false);
    const [loadingSymbol, setLoadingSymbol] = useState(false);
    const [showInfo, setShowInfo] = useState("none");


    const randomizer = (max) => {
        let numArr = [];
        for (let i = 0; i < 32; i++)
        {
            let a = Math.floor(Math.random() * max);
            numArr.push(a);
        }
        console.log(numArr);
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

            console.log("response coming after")
            console.log(response.data)
            console.log("setting emergency art to response from above")
            setEmergArt(response.data)
            console.log("emergArt is:")
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
        setLoadingSymbol(true);
      
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
            <div className= "header">
                <h1>Mezzanine</h1>
                <button className = "info-btn" onClick = {() => setShowInfo("block")}>
                    <GrCircleInformation/>
                </button>
                <form className = "search">
                    <label >
                        <FaSearch/>
                        <input
                            type="text"
                            value={yourQuery}
                            onChange ={handleInput}
                        />
                    </label>
                </form>

                <div className = "results">{currWork.total} Results</div>
            
                <button className = "shuffler" onClick = {() => setNum(randomizer(currWork.total - 1))}>Shuffle</button>
            </div>

            <div className = "information" style={{display: showInfo}}>
                <button className = "close-info" onClick = {() => setShowInfo("none")}>X</button>
                <div className = "info-text">
                    <pre>
                        Hello there! Welcome to Mezzanine!
                        <br></br>
                        Hit <button>Shuffle</button> at the top of the screen, 
                        <br></br> then click on different works of art to change them.
                        <br></br> Search by artist, medium, country, time period, 
                        <br></br> or whatever else you can think of, and see what the Met has on display,
                        <br></br> or hidden away!
                        <br></br> Thanks for visiting, and enjoy discovering art from the best museum in the world.
                    </pre>
                </div>
                
            </div>

            <div className = "works-total">
                <div className = "works-col">
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[0]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[1]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[2]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[3]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[16]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[20]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[21]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[22]]}/>
                    </div>
                </div>
                <div className = "works-col">
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[4]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[5]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[6]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[7]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[17]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[23]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[24]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[25]]}/>
                    </div>
                </div>    
                <div className = "works-col">
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[8]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[9]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[10]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[11]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[18]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[26]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[27]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[28]]}/>
                    </div>
                </div>
                <div className = "works-col">
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[12]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[13]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[14]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[15]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[19]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[29]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[30]]}/>
                    </div>
                    <div className = "work-img">
                        <Painting num = {currWork.objectIDs[num[31]]}/>
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default Home;