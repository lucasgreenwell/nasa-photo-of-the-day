import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Image = (props) => {
    const [pic, setPic] = useState({});

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=CdV79KpZCK2hSkvv8ei9apkUcpm40sdONvynOBNK&date=${props.date}`)
            .then(res => {
                console.log(res);
                setPic(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [props.date])

    return (

        <div className="img-container">
            <div className='Image'>
                <img src={pic.url} alt={pic.title}></img>
            </div>
        </div>
    )
}



export default Image 