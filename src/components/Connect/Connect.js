import { Link } from "gatsby";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Connect() {
  const { header } = useStaticQuery(graphql`
    query ConnectPageQuery {
      header: file(relativePath: { eq: "connect/job_connect.png" }) {
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
          className="absolute object-cover object-center h-full w-full"
          style={{ position: "absolute" }}
          fluid={header.childImageSharp.fluid}
        />
        <div className="absolute flex items-center justify-center w-full h-full p-5">
          <h3 className="lg:text-6xl sm:text-5xl text-4xl font-semibold text-black-hakkei">
            Job Connect
          </h3>
        </div>
      </div>
      <div className="bg-white sm:my-16 my-10">
        <div className="main-container">
          <div className="border sm:p-12 p-6 shadow-xl rounded-xl">
            <p className="text-gray-600  sm:text-base text-sm italic text-justify">
              One very public way for businesses to advertise their support and
              show definitive action towards our mission to abate corruption is
              to hire IEJL Pledges. To that end, IEJL has created &quot;IEJL Job
              Connect&quot; to connect its ethically conscious community of
              Pledges with companies who would like to promote ethical business
              practices.
            </p>
            <p className="text-gray-600  sm:text-base text-sm italic text-justify mt-3">
              IEJL Job Connect operates very similarly to well-known job sites
              with the added benefits that the job candidates will have
              distiguished themselves by attaining Bronze, Silver, Gold, or
              Platinum status in regards to ethically-based activities
              associated with IEJL. Employers can expect that Pledges will share
              their ethical business practices among other employees with the
              hope of transforming (or maintaining) the company&apos;s ethics
            </p>
            <p className="text-gray-600  sm:text-base text-sm italic text-justify mt-3">
              Click the button below to be redirected to the IEJL Job Connect
              website!
            </p>
            <div className="text-center mt-6">
              <a
                href="https://colorlib.com/etc/cs/comingsoon_02/index.html"
                className="bg-yellow-500 text-white mt-3 px-3 py-1.5 rounded-md hover:bg-yellow-600 focus:outline-none"
              >
                Job Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;
