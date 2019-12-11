import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Description = props => {
    const [words, setWords] = useState({});
  
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=CdV79KpZCK2hSkvv8ei9apkUcpm40sdONvynOBNK`)
            .then(res => {
                // console.log(res);
                setWords(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
  
    // return 'string'
    return (<div className="Description">{words.explanation}</div>);
  };



export default Description;