import React, {useState, useEffect, useRef} from 'react';
import './Painting.css'
import ArtGetter from "./ArtGetter.js"
import pozzi from "../artwork/dr.pozzi_sargent.jpg"
import clickAgain2 from "../artwork/clickAgain2.JPG"
import axios from 'axios';


function Painting(props) {
    var [painting, setPainting] = useState(pozzi);
    const [data] = ArtGetter("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.num)
    const [fullScreen, setFullScreen] = useState("none");

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/459110')
            .then(response => setPainting(response.data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className = "artwork-display">
            <div className = "get-btn">
                <button className = "expander" onClick = {() => setFullScreen("block")}>Expand</button>           
            </div>
            <div className = "painting-data">
                {/*<p style = {{fontStyle: "italic"}}>{painting.title}</p>
                <p>{painting.artistDisplayName}</p>
                {console.log(props.num)}
                {console.log(painting)}*/}
                <div>
                    <img className ="art-now" 
                        src = {painting.primaryImage || clickAgain2} 
                        onClick = {() => setPainting(data) }
                        class="thumbnail" 
                        alt = "painting"
                        title = "Click to Change"
                    />
                </div>

                <div className = "fullScreen" style = {{display : fullScreen}}>
                    <button className = "close-img" onClick = {() => setFullScreen("none")}>X</button>
                    <img className = "fullScreenImg"
                    src = {painting.primaryImage}
                    alt = ""
                    />
                    <div className = "caption">
                        <p>{painting.artistDisplayName}</p>
                        <p style = {{fontStyle : "italic"}}>{painting.title}</p>
                        <p>Made {painting.objectDate}</p>
                        <p>{painting.medium}</p>
                        <a style = {{color : "blue"}} href = {painting.objectURL} target = "_blank" rel="noopener noreferrer">Open this work on the Met's website</a>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
    
}

export default Painting;