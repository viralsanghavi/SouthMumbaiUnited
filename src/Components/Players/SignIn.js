import React, {useState} from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Row,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "reactstrap";

import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import fire from "../config/firebaseConfig";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  let navigate = useNavigate();

  const handleSignup = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser({email: res.user.email, uid: res.user.uid});
      })
      .catch((error) => {
        toast(error.message, {type: "error"});
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };
  if (user.uid) {
    return navigate("/records", {state: user.id});
  }

  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form onSubmit={handleSubmit}>
              <CardHeader className="">Sign In here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="primary">
                  Sign In
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
