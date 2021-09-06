import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "../Pledge/BecomePledge.css";
import CardText from "../Card/CardText";

function BecomePledge() {
  const pledgeText = "IT ALL STARTS WITH YOU";
  const { pledgeImage, becomePledgeImage } = useStaticQuery(graphql`
    query BecomePledgePageQuery {
      becomePledgeImage: file(
        relativePath: { eq: "banner/become-a-pledge-hero3.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pledgeImage: file(relativePath: { eq: "home/11.png" }) {
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
      <div className="relative md:h-150 sm:h-120 h-150 lg:150 overflow-hidden">
        <Img
          className="absolute  object-scale-down h-full w-full"
          style={{ position: "absolute" }}
          fluid={becomePledgeImage.childImageSharp.fluid}
        />
        <div className="absolute flex  justify-center  ml-10 mt-24">
          <div className="grid grid-rows-2 gap-20">
            <div>
              <div className="yellow text-xs">BECOME A PLEDGE</div>
              <div>
                <CardText description={pledgeText}></CardText>
              </div>
            </div>
            <div className="grid grid-rows-4  white">
              <div>
                Superheroes in training are called &quot;Pledges&quot; because
              </div>
              <div>
                you take IEJL&apos;s Oath of Ethical Commerce when you Sign Up
              </div>
              <div>
                After you sign up, you begin your training to grow your strength
              </div>
              <div>in our culture of ethical business practices.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-hakkei white">
        <div className="grid">
          <div className="flex flex-col items-center max-w-2xl mx-auto mt-10">
            <div className="text-center font-bold lg:text-2xl sm:3xl md:3xl">
              Your Engaging Experience And Rewards with IEJL
            </div>
            <div className="text-center font-bold lg:text-2xl sm:3xl md:3xl">
              Increase With Your involvement
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-black-hakkei">
        <div className="container  mx-auto  px-2 py-1">
          <div className="pb-0.5 bg-white w-full mt-5"></div>
          <div className="grid grid-cols-3 white gap-4 mt-6">
            <div>
              Enter the IEJL Library. Build your awareness of corruption and its
              impact on society with our online library. Explore our Library
              content to find engaging, and sometimes entertaining content.
              Expand your search and strengthen your knowledge and culture of
              ethical business practices.
            </div>
            <div>
              Join a local Chapter. Meet new friends. Enjoy great outings.
              Strengthen your bond with like-minded superheroes. Join the team
              to help stop corruption and promote ethical business practices.
            </div>
            <div>
              Communicate with IEJL Live!. Connect with your fellow chapter
              members. Meet other members near you or in another country.
              <p>
                The world is your village. If you have super energy, Volunteer
                with IEJL. We have great positions for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-black-hakkei lg:h-80 sm:h-64 h-32 overflow-hidden">
        <Img
          style={{ position: "absolute" }}
          className="absolute object-cover object-center h-full w-full"
          fluid={pledgeImage.childImageSharp.fluid}
        />
        <div className="absolute flex items-center justify-center w-full h-full p-5">
          <div className="flex flex-wrap justify-center">
            <div
              className="flex flex-col  bg-white md:flex-nowrap lg:flex-nowrap lg:w-2/5 lg:h-2/5
                    lg:mt-2  lg:p-1 md:w-2/5 md:h-1/3 md:p1 sm:h-full sm:w-5/6"
            >
              <div className="text-left sm:text-2xl xs:text-xs lg:text-2xl md:txt-2xl text-yellow-400 sm:pb-2 lg:px-2">
                Don&apos;t Forget Your Rewards. As You Progress In Training Your
                Rewards Get Bigger!
              </div>
              <div className="text-left text-yellow-400 px-2">
                Discounts At Your Favorite Retailer
              </div>
              <div className="text-left text-yellow-400 px-2">
                Access To Your Dream Jobs
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BecomePledge;
