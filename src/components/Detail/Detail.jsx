import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap';

export default function Detail() {
    let [barang, setBarang] = useState([
        {
            name: "xx",
            id: 1,
            image: "https://imgcdn.oto.com/medium/gallery/exterior/21/175/lamborghini-aventador-front-angle-low-view-871719.jpg",
            price: 2000
        },

    ])
    return (
        <div>

            {barang ? barang.map(item => {
                return (
                    <Row id='barang'>
                        <Col>
                            <img alt="" src={item.image} />
                        </Col>
                        <Col>
                            <h5>{item.name}</h5>
                            <h6>{item.price}</h6>
                            <div>
                                <Button>Masukkan Keranjang</Button>
                                <Button>Beli Sekarang</Button>
                            </div>
                        </Col>
                    </Row>
                )
            }) : null}


            <Row id='detail'>
                <h6>Spesifikasi Produk</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora! Mollitia nostrum, fugit eum voluptate quod dolore iste! Magnam voluptates dicta dolorum esse ad minus ullam accusamus tenetur? Ab, corrupti!</p>
            </Row>
            <Row id='review'>
                <h6>Penilaian Produk</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum praesentium non temporibus esse dolorum ratione corporis. Aut obcaecati, dicta dignissimos ex quaerat qui iure, quasi impedit quidem, a accusantium?</p>
            </Row>
        </div>
    )
}
