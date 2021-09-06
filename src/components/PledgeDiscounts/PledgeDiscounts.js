import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function PledgeDiscounts() {
  const { headerImage, newsLetterImage } = useStaticQuery(graphql`
    query PledgeDiscountsPageQuery {
      headerImage: file(relativePath: { eq: "banner/pledge_discount.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="relative lg:h-80 sm:h-64 h-32 overflow-hidden">
        <Img
          style={{ position: "absolute" }}
          className="absolute object-cover object-center h-full w-full"
          fluid={headerImage.childImageSharp.fluid}
        />
        <div className="absolute flex items-center justify-center w-full h-full p-5">
          <h3 className="lg:text-6xl sm:text-5xl text-4xl font-semibold text-black">
            Pledge Discounts
          </h3>
        </div>
      </div>
      <div className="bg-white sm:my-16 my-10">
        <div className="main-container">
          <div className="border sm:p-12 p-6 shadow-xl rounded-xl">
            <div>
              <p className="text-gray-600 mt-4 sm:text-base text-sm">
                IEJL teams up with merchants to provide discounts, deals, and
                other opportunities for Pledges who have attained various Award
                levels.&nbsp;
              </p>
            </div>
            <div>
              <p className="text-gray-600 mt-4 sm:text-base text-sm">
                Merchants who want to team up with IEJL to provide discounts
                will benefit from the ability to market their support of ethical
                business practices to their customers and&nbsp;stakeholders. In
                an environment that is becoming increasingly distraught with the
                culture of corruption, the ability to publicize support for an
                organization dedicated to ethics can go considerably far among
                consumers. Additionally, IEJL will market partner businesses and
                services to its vast community of Pledges.
              </p>
            </div>
            <div>
              <p className="text-gray-600 mt-4 sm:text-base text-sm">
                Click&nbsp;below to learn more about the Pledge Discount
                Program!
              </p>
            </div>
            <div>&nbsp;</div>
            <div className="col-md-12 text-center">
              <a
                href="https://iejl.org/Merchant_signup/discounts"
                className="justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none "
              >
                {" "}
                Pledge Discounts{" "}
              </a>
              &nbsp;
              <a
                href="https://iejl.org/Merchant_signup/details"
                className="justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none "
              >
                {" "}
                Merchant Sign Up{" "}
              </a>
              &nbsp;
              {/* <a href="javascript:void(0);" data-toggle="modal" data-target="#merchantModal" className="justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none "> Merchant Sign In</a> */}
              <a
                href="https://iejl.org/Merchant_signup/discounts"
                className="justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none "
              >
                {" "}
                Merchant Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PledgeDiscounts;
