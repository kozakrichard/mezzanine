import React, {useState, useEffect, useRef} from 'react';
import './Painting.css'
import ArtGetter from "./ArtGetter.js"
import pozzi from "../artwork/dr.pozzi_sargent.jpg"
import axios from 'axios';

function Painting(props) {
    var [painting, setPainting] = useState(pozzi);
    const [data] = ArtGetter("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + props.num)
    

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/459110')
            .then(response => setPainting(response.data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className = "artwork-display">
            <div className = "get-btn">
                <button onClick = {() => setPainting(data)}>Show</button>
                           
            </div>
            <div className = "painting-data">
                <p style = {{fontStyle: "italic"}}>{painting.title}</p>
                <p>{painting.artistDisplayName}</p>
                {/*{console.log(props.num)}
                {console.log(painting)}*/}
                <div>
                    <img className ="art-now" src = {painting.primaryImage} class="thumbnail" alt = {"Loading"}/>
                </div>
                <p>{painting.medium}</p>
                <p>Made {painting.objectDate}</p>
                <a href = {painting.objectURL} target = "_blank" rel="noopener noreferrer">Open this work on the Met's website</a>
            </div>
            
        </div>
    )
    
}

export default Painting;