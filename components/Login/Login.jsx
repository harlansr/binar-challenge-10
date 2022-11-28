import { Component } from "react";
import { authFirebase } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import logo from '../../public/assets/echamp.png';


import style from '../Login/Login.module.css'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleLogin = () => {
    signInWithEmailAndPassword(authFirebase, this.state.email, this.state.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        localStorage.setItem('jwt-token', user.accessToken)
        localStorage.setItem('UID', user.uid)
        window.location.href = '/'
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.toggleFunc}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body className={`${style["show-grid"]} ${style.modalBody}`}>
          <Container>
            <Row>
              <Col md={6} className={style.rowLeft}>
              </Col>
              <Col md={6} className={style.rowRight}>
                <div>
                  <img src={logo} className={style.logoImage} />
                </div>
                <div className={style.formLogin}>
                  <Form>
                    <Form.Group className={style.marginInput}>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        id="email"
                        onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group className={style.marginInput}>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={this.handleOnChange} />
                    </Form.Group>
                    <div className="d-grid gap-2 pb-3">
                      <Button variant="primary" onClick={this.handleLogin}>
                        LOGIN
                      </Button>
                    </div>
                  </Form>
                </div>
                <div className={style.lupaPass}>
                  <span>Lupa password? klik&nbsp;<a href="/forgot/password">disini</a></span>
                </div>
                <div >
                  <span>Belum punya akun?&nbsp;<a href="/register">Buat akun</a>&nbsp;baru</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Login