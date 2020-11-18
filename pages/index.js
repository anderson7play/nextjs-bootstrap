import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import style from '../assets/css/style.module.css';


const Home = () => (
    <div>
        <Head>
            <title>Next js + Bootstrap</title>
            <link rel="icon" href="/favicon.jpg" />
        </Head>
        <div className={style.header}>
            <Container>
                <Row>
                    <Col>
                        <h1 className={style.title}>Next.js + Bootstrap</h1>
                        <p className={style.text}>Use isso como uma solução simples para iniciar um projeto do next com bootstrap 4</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={style.tecnologias}>
            <Container>
                <Row>
                    <Col>
                        <h3>Bibliotecas Utilizadas</h3>
                        <p>React - Next JS - Reactstrap</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={style.hosted}>
            <Container>
                <Row>
                    <Col>
                        <p className={style.text}>Host by:</p>
                        <img src="/images/vercel.png" alt="Vercel Logo" className="logo" />
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
)

export default Home