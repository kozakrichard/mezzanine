import { useState, useEffect } from "react";


const ArtGetter = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
    }, [url]);
    if (data === null){
        console.log("data was null for ArtGetter");
    }
    return [data];
};

export default ArtGetter;