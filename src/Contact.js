import { useContext, useEffect } from "react";
import UserContext from "./utils/UserContext";

const Contact = () => {
  const { setUserName } = useContext(UserContext);
  useEffect(() => {
    // setUserName("Dharam");
  }, []);
  return (
    <div className="contact-container">
      <h1 className="contact-heading" >Contact US</h1>
      <input className="contact-input" type="text" placeholder="First Name"></input>
      <input className="contact-input" type="text" placeholder="Last Name"></input>
      <button className="contact-input" type="button">Submit</button>
    </div>
  );
};

export default Contact;
