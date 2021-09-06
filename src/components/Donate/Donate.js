import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import addToMailchimp from "gatsby-plugin-mailchimp";
//import AdddressIcon from "../../assets/ico-address.svg";
//import PhoneIcon from "../../assets/ico-phone.svg";
//import EmailIcon from "../../assets/ico-email.svg";
import Social from "../Social/Social";


function Donate() {
  const { DonateImage, } = useStaticQuery(graphql`
    query DonateImageQuery {
      DonateImage: file(relativePath: { eq: "donate/donate.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

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

  const [donation, setDonation] = useState('other');


  const currencyHandler = e => {
    e.preventDefault();
    setDonation(e.target.value);

  };




  return (
    <>
      <Img
        style={{ position: "absolute" }}
        className="hidden sm:block relative object-cover object-center h-1/2 w-1/2 mt-96 mx-14 z-10"
        fluid={DonateImage.childImageSharp.fluid}
      />
      <div id="two-way divider" className="flex flex-col lg:grid lg:grid-cols-2 xl:gap-5 xl:px-80 bg-format-background">
        <div id="left-side" className="flex flex-col py-10 pl-10 xl:py-20 w-4/5 ">
          <div id="contact-text" className="flex flex-row space-x-8">
            <div className="flex flex-col px-20 sm:px-8 xl:pl-4">
              <div className="flex flex-row">
                <div id="vertical-line" className="bg-format-secondary w-1.5 h-full" />
                <p className="text-heading-2 font-heading px-4 xl:px-10 leading-tight">Support our future leaders</p>
              </div>
              <p className="text-medium mt-10 px-4 xl:px-10">Your generous contributions help
                IEJL create and strengthen a global community with a culture of
                ethical business practices. An ethical culture improves quality of life for all,
                increases economic wealth, stabilizes governments, and creates a foundation
                of trust in society.
              </p>
            </div>

          </div>

        </div>
        <div id="right-side" className="lg:py-20 z-20">
          <div id="form-box" className="mx-5 bg-format-background shadow-xl w-auto justify-start">
            <form className="flex flex-col px-5 space-y-10">
              <div className="flex flex-row justify-between">
                <label>
                  <input type="radio" value="one-time" id="one-time" name="donation type" className="mr-3" checked />
                  One-time donation
                </label>
                <label>
                  <input type="radio" value="monthly" name="donation type" className="mr-3" />
                  Monthly donation
                </label>
              </div>
              <div id="amount" className="flex flex-col sm:flex-row sm:space-x-3">
                <button id="10" name="amount" className="bg-format-primary m-1 py-3 px-4">$10</button>
                <button id="15" name="amount" className="bg-format-primary m-1 py-3 px-4">$15</button>
                <button id="30" name="amount" className="bg-format-primary m-1 py-3 px-4">$30</button>
                <button id="60" name="amount" className="bg-format-primary m-1 py-3 px-4">$60</button>
                <div className="flex items-end text-format-primary m-3"
                >$
                  <input type="number" placeholder="other" min="10.00" step="0.01" value={donation} className="bg-transparent border-b px-2 w-full focus:outline-none"
                    onChange={currencyHandler}
                  />


                </div>
              </div>

              <p>Payment Information</p>
              <div id="name" className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
                <input type="text" placeholder="Username" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="e-mail" placeholder="E-mail" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>
              <div id="contact" className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
                <input type="phone" placeholder="Phone number" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="password" placeholder="Passwords" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>

              <p>Personal Information</p>
              <div id="name" className="flex flex-col lg:grid  lg:grid-cols-2 gap-12">
                <input type="text" placeholder="Name" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="text" placeholder="Last Name" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>
              <div id="contact" className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
                <select id="reason" name="options" className="bg-transparent px-2 focus:outline-none">
                  <option value="" disabled selected>Country</option>
                  <option value="1">Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>
                <input type="text" placeholder="Address" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>
              <div id="name" className="flex flex-col lg:grid  lg:grid-cols-3 gap-12">
                <input type="text" placeholder="State" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="text" placeholder="City" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
                <input type="text" placeholder="Postal Code" className="bg-transparent px-2 border-b border-gray-400 focus:outline-none" />
              </div>

              <div className="flex justify-center">
                <button type="submit" className="bg-format-primary text-white w-1/2 m-4 h-14 hover:bg-format-secondary"
                >Donate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>

  );
}

export default Donate;
