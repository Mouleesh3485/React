import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

// Import local images
import Vijay1 from '../components/vijay1.jpg';
import Vijay2 from '../components/vijay6.jpg';
import Vijay3 from '../components/vijay3.jpg';
import Vijay4 from '../components/vijay4.jpg';
import Vijay5 from '../components/vijay5.jpg';
import Vijay6 from '../components/vijay2.jpg';
import Vijay7 from '../components/vijay7.avif';
import Vijay8 from '../components/vijay8.jpg';

const Home = () => {
    const MovieData = [
        { image: Vijay1, title: 'MASTER', description: 'Master is an action film from India about a professor, JD, who is sent to teach at a juvenile reform school for three months' },
        { image: Vijay2, title: 'MERSAL', description: 'The story revolves around two brothers, who were separated at birth; one is a magician avenging his parents deaths and medical' },
        { image: Vijay3, title: 'LEO', description: 'The film follows Parthi, a café owner and animal rescuer in Theog, who is pursued by gangsters Antony and Harold Das who' },
        { image: Vijay4, title: 'THUPPAKI', description: 'It revolves around Jagadish, an intelligence officer in the Indian Army, who seeks to track down, destroy and deactivate a ' },
        { image: Vijay5, title: 'KATHTHI', description: ' A petty thief and lookalike of Jeevanantham, who assumes the identity and attempts to lead a rebellion by farmers from  ' },
        { image: Vijay6, title: 'VARISU', description: 'Vijay is the youngest son of an eminent billionaire entrepreneur Rajendran Palanisamy who is disowned and thrown out of ' },
        { image: Vijay7, title: 'BIGIL', description: 'Michael gives up his dream of becoming a footballer after his fathers murder. However, a friend convinces him to coach a womens ' },
        { image: Vijay8, title: 'THERI', description: 'A police officer who fights for justice sees his family die due to the enemies he has made as a cop, making him change his ' },
    ];

    return (
        <div style={{ background: 'linear-gradient(45deg, #6410ff, #9358ff)', minHeight: '100vh' }}>
            <Container>
                <Row>
                    {MovieData.map((image, index) => (
                        <Col key={index} md={3} className="mb-4">
                            <Card className='img mt-5' style={{ height: '535px' }} >
                                <div className="overlay">
                                    <span className="close-icon">X</span>
                                </div>
                                <Card.Img variant="top" src={image.image} alt={`Food ${index + 1}`} style={{ width: '100%', height: '300px' }} />
                                <Card.Body>
                                    <Card.Title>{image.title}</Card.Title>
                                    <Card.Text>
                                        {image.description}
                                    </Card.Text>
                                    <Button style={{ backgroundColor: '#6410ff' }}>Watch Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
