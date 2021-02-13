import React from 'react'
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div>
            <Row id="footer" className="mt-4 pt-4">
        <Col>
          <h6>Layanan Pelanggan</h6>
          <p>Hubungi kami</p>
          <p>Bantuan</p>
        </Col>
        <Col>
          <h6>Navigasi</h6>
          <p>Tentang Kami</p>
          <p>Berita</p>
          <p>Promo</p>
          <p>Seller Center</p>
        </Col>
        <Col>
          <h6>Pembayaran</h6>
          <p>logo</p>
          <p>logo</p>
          <h6>Pengiriman</h6>
          <p>logo</p>
          <p>logo</p>
        </Col>
        <Col>
          <h6>Ikuti Kami</h6>
          <p>logo</p>
          <p>logo</p>
        </Col>
        <Col>
          <h6>Download Aplikasi</h6>
          <p>logo</p>
          <p>logo</p>

        </Col>
      </Row>
        </div>
    )
}
