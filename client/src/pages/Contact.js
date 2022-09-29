import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={8} md={6} >
          <ContactForm />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;