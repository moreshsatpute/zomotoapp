import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import Burger from "../assets/hero/hero-2.png"
import { Link } from "react-router-dom"
const Section1 = () => {
    return (
        <section className='hero-section'>
            <Container>
                <Row>
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <div className='position:relative'>
                            <img src={Burger} className='img-fluid' alt="" />
                            <div className='price_badge'>
                                <div className='badge_text'>
                                    <h4 className='h4_xs'>Only</h4>
                                    <h4 className='h3_lg'>$6.33</h4>

                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='hero_text text-center'>
                            <h1 className='text_white'>New Burger</h1>
                            <h2 className='text_white'>With Onion</h2>
                            <p className='text_white pt-2 pb-4'>
                                Restaurant Brands Asia Ltd is the 
                                leading quick service restaurants chain operator
                                 of Burger King India and Popeyes in the country. </p>
                            <Button variant="outline-warning">
                                Order Now
                                </Button>
                        </div>

                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Section1