import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';



export default function Home() {
    let [barang, setBarang] = useState([
        {
            name: "xx",
            id:1,
            image: "https://imgcdn.oto.com/medium/gallery/exterior/21/175/lamborghini-aventador-front-angle-low-view-871719.jpg",
            price: 2000
        },
        {
            name: "xx",
            id:2,
            image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lamborghini-aventador-mmp-1-1601499002.jpg",
            price: 2000
        },
        {
            name: "xx",
            id:3,
            image: "https://imgcdn.oto.com/medium/gallery/exterior/21/175/lamborghini-aventador-front-cross-side-view-636041.jpg",
            price: 2000
        },
        {
            name: "xx",
            id:4,
            image: "https://imgcdn.oto.com/large/gallery/exterior/1/12/audi-r8-front-angle-low-view-121961.jpg",
            price: 2000
        },
        {
            name: "xx",
            id:5,
            image: "https://imgcdn.oto.com/large/gallery/exterior/21/176/lamborghini-huracan-front-angle-low-view-850698.jpg",
            price: 2000
        },
        {
            name: "xx",
            id:6,
            image: "https://imgcdn.oto.com/large/gallery/exterior/42/369/aston-martin-vanquish-front-angle-low-view-753945.jpg",
            price: 2000
        },
        {
            name: "xx",
            id:7,
            image: "https://imgcdn.oto.com/large/gallery/exterior/2/395/bentley-continental-front-angle-low-view-254939.jpg",
            price: 2000
        },
        {
            name: "xx",
            id:8,
            image: "https://imgcdn.oto.com/large/gallery/exterior/31/265/porsche-911-front-angle-low-view-514028.jpg",
            price: 2000
        },
    ])

   
    return (
        <div>
           
            
            <Row>
                {barang ? barang.map(item => {
                    return (
                        <div className="col-md-3 col-sm-6">
                             
                            <div className="card m-2 p-1 mt-4">
                            <Link to={`/detail/${item.id}`}>
                                <img className="img-fluid" src={item.image} alt={item.name}></img>
                                
                                </Link>
                                <h5>{item.name}</h5>
                                <p>{item.price}</p>
                            </div>
                            
                        </div>
                    )
                }) : null}
            </Row>
        </div>
    )
}
