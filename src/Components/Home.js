import React, {useEffect, useState} from 'react';
import Painting from "./Painting.js";
import axios from 'axios';
import './Home.css'
import { FaSearch } from 'react-icons/fa';
import { GrCircleInformation } from 'react-icons/gr';
import loading from '../artwork/loading.gif';

function Home() {
    const [num, setNum] = useState([]);
    var [currWork, setCurrWork] =useState()
    const [yourQuery, setYourQuery] = useState("Vincent Van Gogh")
    const [isLoading, setLoading] = useState(true);
    var [artChecker, setArtChecker] = useState();
    var [emergArt, setEmergArt] = useState();
    const [showInfo, setShowInfo] = useState("none");


    // randomizer fills an array with 32 different numbers depending on the size of max
    // these numbers will represent which works of art to load onto the site

    const randomizer = (max) => {
        let numArr = [];
        for (let i = 0; i < 32; i++)
        {
            let a = Math.floor(Math.random() * max);
            numArr.push(a);
        }
        console.log(numArr);
        return numArr; 
    }

    // Upon loading the site, make a call to get the Vincent Van Gogh object so that we have some data to display

    useEffect(() => {
        async function fetchEmerg () {
            let response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Vincent%20Van%20Gogh')

            //Auguste Renoir is our backup "emergency" art to show if the API request doesn't go through properly

            setEmergArt(response.data);
            setNum(randomizer(response.data.total - 1));
        }

        fetchEmerg();
        
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
        // GET request using axios inside useEffect React hook
        async function gettingData () {
            let response = await makeGetRequest('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=' + yourQuery)
            setArtChecker(response.data)  

            // artChecker makes sure if the API has been called yet upon loading into the site, or that we received a response from the API
            // if one of these cases is true, then we should display work from emergArt (VVG) to avoid loading errors
            if (typeof artChecker === 'undefined' || response.data.total === 0)     
            {
                setCurrWork(emergArt);
                
                //setNum(randomizer(emergArt.total - 1))

            }

            // otherwise the API has returned a new object, and we can update what the page can display to this new object

            else{
                setCurrWork(response.data);
                
            }
            setLoading(false);
            //setNum(randomizer(response.data.total - 1))
            //console.log(response.data.total)
        }
        gettingData();
      
    // dependency array has some variables, this useEffect will run every time one of these variables is updated
    }, [yourQuery, emergArt]);

    const handleInput = (event) => {
        setYourQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setNum(randomizer(currWork.total - 1));
    }

    // Show loading screen if there is some delay getting the data in currWork

    if (isLoading || typeof currWork === 'undefined') {
        return <div className = "Home">
            <img style = {{marginTop: "10%", height: "30%", width: "30%"}}src = {loading} alt = "Loading..."/>
        </div>
    }

    return (

        <div>
            <div className= "header">
                <h1>Mezzanine</h1>
                <button className = "info-btn" onClick = {() => setShowInfo("block")}>
                    <GrCircleInformation/>
                </button>
                <form onSubmit = {handleSubmit} className = "search">
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