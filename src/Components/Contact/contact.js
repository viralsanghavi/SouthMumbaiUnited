import React, {Component} from "react";
import {Row} from "reactstrap";
import {RiMapPin2Line} from "react-icons/ri";
import {FiMail, FiPhone} from "react-icons/fi";
import fire, {database} from "../config/firebaseConfig";
import {toast} from "react-toastify";
import "./Contact.css";
import {addDoc, collection} from "firebase/firestore";
import emailjs from "@emailjs/browser";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      email: "",
      phoneNumber: "",
    };
    this.formRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      phoneNumber: "",
    });
  };
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    // this.resetForm();

    try {
      const ref = collection(database, "messages");
      await addDoc(ref, {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        phoneNumber: this.state.phoneNumber,
      });

      emailjs
        .sendForm(
          "service_olcrddd",
          "template_04ifgpr",
          this.formRef?.current,
          "C8rqytswnqUgaUU_4"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toast("Your Response is Recorded.", {type: "info"});
    } catch (error) {
      console.log(error);
      toast("Oops Some Error Occurred..", {type: "error"});
    }
  };
  render() {
    return (
      <div className="contact">
        <div className="contact__form">
          <form
            className="form1"
            onSubmit={this.handleSubmit}
            data-aos="zoom-in"
            ref={this.formRef}
          >
            <h2 className="h2">REACH US</h2>
            <p className="p" type="Name:" htmlFor="name">
              <input
                className="contact-input"
                name="name"
                placeholder="Write your name here.."
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </p>
            <p className="p" type="Email:" htmlFor="email">
              <input
                required
                className="contact-input"
                type="email"
                value={this.state.email}
                name="email"
                placeholder="Let us know how to contact you back.."
                onChange={this.handleChange}
              />
            </p>
            <p className="p" type="PhoneNumber:" htmlFor="phoneNumber">
              <input
                required
                className="contact-input"
                type="number"
                maxLength={10}
                value={this.state.phoneNumber}
                name="phoneNumber"
                placeholder="Contact number helps us reach to you.."
                onChange={this.handleChange}
              />
            </p>
            <p className="p" type="Message:" htmlFor="message">
              <textarea
                required
                className="contact-input"
                value={this.state.message}
                name="message"
                placeholder="What would you like to tell us.."
                onChange={this.handleChange}
              ></textarea>
            </p>
            <div className="contact__button">
              <button className="contact-button">Send</button>
            </div>
          </form>
        </div>
        <div className="contact__details">
          <Row className="contact__pack">
            <div className="line" data-aos="zoom-in"></div>
            <div className="contact__loc" data-aos="zoom-in">
              <h1>Contact details</h1>
              <div className="contact__depth">
                <div>
                  <RiMapPin2Line
                    size={48}
                    className="contact__icon"
                    color={"#a50101"}
                  />
                  <span style={{textTransform: "uppercase"}}>
                    SOUTH Mumbai sports pvt. ltd sea view, 6th floor, dongersi
                    rd. malabar hill, mumbai - 400006
                  </span>
                </div>
                <div>
                  <FiMail
                    size={20}
                    color={"#a50101"}
                    className="contact__icon"
                  />{" "}
                  <a href="mailto:southmumbaiunited@gmail.com">
                    southmumbaiunitedfc@gmail.com
                  </a>
                </div>
                <div>
                  <FiPhone
                    size={20}
                    color={"#a50101"}
                    className="contact__icon"
                  />{" "}
                  <span>+91 9324686568</span>
                </div>
              </div>
              {/* <div className="contact__street" >
                <RiMapPin2Line size={28} color={"#a50101"} className="contact__icon" />
                <span style={{ textTransform: "uppercase" }}>
                  SOUTH Mumbai sports pvt. ltd
                  sea view, 6th floor, dongersi rd.
                  malabar hill, mumbai - 400006
                </span>
              </div>

              <div className="contact__street">

              </div>
              <div className="contact__street">
              <FiMail size={20} color={"#a50101"} /> <a href="mailto:southmumbaiunited@gmail.com">southmumbaiunitedfc@gmail.com</a>
                <FiPhone size={20} color={"#a50101"} /> <span>+91 9324686568</span>
              </div> */}
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
