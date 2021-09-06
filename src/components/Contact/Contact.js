import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";
import ReCAPTCHA from "react-google-recaptcha";
//import AdddressIcon from "../../assets/ico-address.svg";
//import PhoneIcon from "../../assets/ico-phone.svg";
//import EmailIcon from "../../assets/ico-email.svg";
import Social from "../Social/Social";

function Contact() {

  function onChange(value) {
    console.log('Captcha value:', value);
  }
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mailChimpRes, setMailChimpRes] = useState();

  const _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email, {
      NAME: name,
      MESSAGE: message,
    })
      .then(data => {
        setMailChimpRes(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div id="two-way divider" className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-2 xl:gap-10 lg:px-80 bg-format-background ">
        <div id="left-side" className="flex flex-col py-20">
          <div id="contact-text" className="flex flex-row">
            <div className="flex flex-row space-x-8 px-20">
              <div id="vertical-line" className="bg-format-secondary w-1.5 h-14" />
              <div className="flex flex-col flex-shrink">
                <p className="text-heading-3 font-heading">Contact Us</p>
                <p className="text-medium">Please use the form to react out with any questions or inquiries
                  you may have. Looking for a quick answer? Visit our&nbsp;
                  <span><a href="/FAQ" className="text-format-secondary no-underline">FAQ Page</a></span>.
                </p>
              </div>    
            </div>           
            </div>
            <div id="contact-form" className="my-10 overflow-hidden">
              <div id="form-box" className="bg-format-background shadow-lg py-10 w-full">
               <form className="grid grid-rows-6 px-10 text-medium h-2/5">
                <div id="name" className="flex flex-col lg:grid  lg:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="bg-transparent px-2 h-1/2 border-b border-gray-400 focus:outline-none"/>                  
                  <input type="text" placeholder="Last name" className="bg-transparent px-2 h-1/2  border-b border-gray-400 focus:outline-none"/>
                </div>
                <div id="contact" className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                  <input type="text" placeholder="Phone number" className="bg-transparent px-2 h-1/2 border-b border-gray-400 focus:outline-none"/>                  
                  <input type="text" placeholder="E-mail" className="bg-transparent px-2 h-1/2 border-b border-gray-400 focus:outline-none"/>
                </div>
                <select id="reason" name="options" className="bg-transparent px-2 h-1/2 focus:outline-none">
                  <option value="" disabled selected>Select your reason for contact</option>
                  <option value="1">Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>
                <input type="text" placeholder="Message" className="bg-transparent px-2 h-1/2 border-b border-gray-400 focus:outline-none" />
                <div id="pledge-captcha" className="flex flex-col xl:flex-row xl:space-x-16 mb-4">
                  <input type="text" placeholder="Pledge ID (optional)" className="bg-transparent px-2 h-1/2 border-b border-gray-400 focus:outline-none mb-4" />
                  <ReCAPTCHA
                    sitekey="6Lca0zccAAAAAG9HHSR3GAjVnSynPqepQyVOwwpp"
                    onChange={onChange}
                  />
                </div>
                <div className="px-20 py-4">
                <button type="submit" className="bg-format-primary text-white w-80 h-14">Send</button>
                </div>
                </form>            
            </div>
          </div>
        </div>
        <div id="right-side" className="p-20">
          <div className="grid grid-rows-2 gap-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.470482956157!2d-117.86699118483875!3d33.670879780711445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdef77e371a91%3A0xfaf4ab895b7ebdd9!2sInternational%20Economic%20Justice%20League%2C%20Inc.!5e0!3m2!1sen!2str!4v1630416056176!5m2!1sen!2str" 
            className="w-full h-96"
            />
            <div>          
            <p className="font-heading text-heading-3">Never miss an update</p>
            <p className="text-medium">Enter your e-mail to receive the IEJL newsletter</p>
          <form>
            <input type="e-mail" className="py-2 px-4 focus:outline-none"/><button type="submit" className="py-2 px-3 bg-format-secondary text-white text-medium focus:outline-none">SUBSCRIBE</button>
          </form>
          </div>
          <div>
          </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default Contact;
