/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Carousal from "../slider/layout";

function LandingPage() {
  const {
    headerImage,
    corruptionImage,
    communityImage,
    joinImage1,
    joinImage2,
    joinImage3,
    joinImage4,
    joinImage5,
    volunteerImage,
    reviewImage1,
    sponsorImage1,
    sponsorImage2,
    sponsorImage3,
    ctaImage,
  } = useStaticQuery(graphql`
    query HomePageQuery {
      headerImage: file(relativePath: { eq: "home/11.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      corruptionImage: file(relativePath: { eq: "home/about3.png" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      communityImage: file(relativePath: { eq: "home/engagement.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      joinImage1: file(relativePath: { eq: "home/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      joinImage2: file(relativePath: { eq: "home/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      joinImage3: file(relativePath: { eq: "home/3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      joinImage4: file(relativePath: { eq: "home/4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      joinImage5: file(relativePath: { eq: "home/5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      volunteerImage: file(relativePath: { eq: "home/7.png" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      reviewImage1: file(relativePath: { eq: "review/7.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sponsorImage1: file(relativePath: { eq: "home/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sponsorImage2: file(relativePath: { eq: "home/logo1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sponsorImage3: file(relativePath: { eq: "home/logo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ctaImage: file(relativePath: { eq: "home/1.png" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <div className="bg-navy">
        <div className="flex">
          <div className="flex lg:justify-end justify-center lg:w-1/2 w-full lg:py-0 py-16">
            <div className="w-full lg:max-w-3xl px-6 flex flex-col justify-center lg:items-start items-center">
              <h3 className="uppercase md:text-3xl text-yellow-500 font-thin">
                WELCOME TO IEJL
              </h3>
              <h4 className="lg:text-left text-center xl:text-5xl xl:leading-tight lg:text-4xl lg:leading-tight text-2xl leading-tight text-white font-thin mt-6 ">
                Empowering Community to Stop Corruption!
              </h4>
              <div>
                <a
                  href="/"
                  className="inline-block bg-yellow-500 text-white md:text-base text-sm uppercase mt-5 px-6 sm:py-2.5 py-2 rounded-md text-center hover:bg-yellow-600 focus:outline-none"
                >
                  What You Can Do
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 xl:h-1/2 h-full relative lg:block hidden">
            <svg className="absolute -left-20  bg-yellow-500 w-20 h-1/3 rounded-tl-full z-0 bottom-0"></svg>
            <Img
              className="rounded-tl-20xl w-full h-full object-cover object-top z-40"
              fluid={headerImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>

      <div className="bg-white lg:my-28 md:my-20 my-16">
        <div className="main-container">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center space-x-1 mb-8">
                <h4 className="text-yellow-500 uppercase text-xl font-thin">
                  Welcome to IEJL
                </h4>
                <div className="w-16 h-0.5 bg-gray-300"></div>
              </div>
              <h3 className="text-black-hakkei sm:text-3xl text-2xl font-thin">
                Corruption is a Culture
              </h3>
              <p className="text-gray-600 mt-4 sm:text-base text-sm italic">
                In many companies and governments, corruption has become a way
                of life. It has become a culture which transcends all economic
                classes, religions, races, and social groups.
              </p>
              <p className="text-gray-600 mt-4 sm:text-base text-sm italic">
                The International Economic Justice League is working to stop
                this culture of corruption.
              </p>
              <p className="text-gray-600 mt-4 sm:text-base text-sm italic">
                Signing up is free, and it comes with a lifetime of rewards.
              </p>
              <a
                href="/"
                className="inline-block text-blue-600 hover:text-blue-700 italic mt-4 focus:outline-none"
              >
                Join us in our effort to stop corruption!
              </a>
            </div>
            <div className="lg:w-1/2 flex lg:justify-end justify-center lg:mt-0 mt-12">
              <Img
                className="lg:max-w-md w-full h-full"
                fluid={corruptionImage.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white lg:my-28 md:my-20 my-16">
        <div className="main-container">
          <div className="flex flex-col">
            <h4 className="text-black-hakkei lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-thin text-center">
              The IEJL Community Engagement
            </h4>
            <Img
              className="sm:mt-16 mt-10 w-full h-full"
              fluid={communityImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>

      <div className="bg-aqua">
        <div className="main-container lg:py-24 md:py-16 py-14">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
            <div className="row-span-2 pr-5">
              <div className="flex items-center space-x-1 mb-8">
                <h4 className="text-white uppercase text-xl font-thin">
                  Join Us
                </h4>
                <div className="w-16 h-0.5 bg-white"></div>
              </div>
              <p className="text-white md:text-4xl text-3xl">
                Check out the following programs to join our fight against
                corruption.
              </p>
            </div>

            <div className="relative h-80 overflow-hidden">
              <Img
                style={{ position: "absolute" }}
                className="absolute object-cover object-center h-full w-full"
                fluid={joinImage1.childImageSharp.fluid}
              />
              <div className="absolute bg-yellow-500 bg-opacity-70 flex flex-col justify-between w-full h-full p-5">
                <div className="flex flex-col mx-auto space-y-2">
                  <h5 className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white lg:text-3xl text-2xl">
                      Become a Pledge
                    </span>
                  </h5>
                  <p className="sm:text-xl text-sm text-white sm:leading-snug leading-snug">
                    Join our community of Pledges by taking our &#8220;IEJL Oath
                    to Ethical Commerce&#8221;.
                  </p>
                </div>
                <a href="/" className="inline-block text-white text-2xl">
                  Read More
                </a>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden">
              <Img
                style={{ position: "absolute" }}
                className="absolute object-cover object-center h-full w-full"
                fluid={joinImage2.childImageSharp.fluid}
              />
              <div className="absolute bg-yellow-500 bg-opacity-70 flex flex-col justify-between w-full h-full p-5">
                <div className="flex flex-col mx-auto space-y-2">
                  <h5 className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white lg:text-3xl text-2xl">
                      Become a Pledge
                    </span>
                  </h5>
                  <p className="sm:text-xl text-sm text-white sm:leading-snug leading-snug">
                    Join our community of Pledges by taking our &#8220;IEJL Oath
                    to Ethical Commerce&#8221;.
                  </p>
                </div>
                <a href="/" className="inline-block text-white text-2xl">
                  Read More
                </a>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden">
              <Img
                style={{ position: "absolute" }}
                className="absolute object-cover object-center h-full w-full"
                fluid={joinImage3.childImageSharp.fluid}
              />
              <div className="absolute bg-yellow-500 bg-opacity-70 flex flex-col justify-between w-full h-full p-5">
                <div className="flex flex-col mx-auto space-y-2">
                  <h5 className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white lg:text-3xl text-2xl">
                      Become a Pledge
                    </span>
                  </h5>
                  <p className="sm:text-xl text-sm text-white sm:leading-snug leading-snug">
                    Join our community of Pledges by taking our &#8220;IEJL Oath
                    to Ethical Commerce&#8221;.
                  </p>
                </div>
                <a href="/" className="inline-block text-white text-2xl">
                  Read More
                </a>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden">
              <Img
                style={{ position: "absolute" }}
                className="absolute object-cover object-center h-full w-full"
                fluid={joinImage4.childImageSharp.fluid}
              />
              <div className="absolute bg-yellow-500 bg-opacity-70 flex flex-col justify-between w-full h-full p-5">
                <div className="flex flex-col mx-auto space-y-2">
                  <h5 className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white lg:text-3xl text-2xl">
                      Become a Pledge
                    </span>
                  </h5>
                  <p className="sm:text-xl text-sm text-white sm:leading-snug leading-snug">
                    Join our community of Pledges by taking our &#8220;IEJL Oath
                    to Ethical Commerce&#8221;.
                  </p>
                </div>
                <a href="/" className="inline-block text-white text-2xl">
                  Read More
                </a>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden">
              <Img
                style={{ position: "absolute" }}
                className="absolute object-cover object-center h-full w-full"
                fluid={joinImage5.childImageSharp.fluid}
              />
              <div className="absolute bg-yellow-500 bg-opacity-70 flex flex-col justify-between w-full h-full p-5">
                <div className="flex flex-col mx-auto space-y-2">
                  <h5 className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white lg:text-3xl text-2xl">
                      Become a Pledge
                    </span>
                  </h5>
                  <p className="sm:text-xl text-sm text-white sm:leading-snug leading-snug">
                    Join our community of Pledges by taking our &#8220;IEJL Oath
                    to Ethical Commerce&#8221;.
                  </p>
                </div>
                <a href="/" className="inline-block text-white text-2xl">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white lg:my-28 md:my-20 my-16">
        <div className="main-container">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex lg:justify-start justify-center lg:mb-0 mb-12">
              <Img
                className="lg:max-w-md h-full w-full"
                fluid={volunteerImage.childImageSharp.fluid}
              />
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center space-x-1 mb-8">
                <h4 className="text-yellow-500 uppercase text-xl font-thin">
                  Volunteer
                </h4>
                <div className="w-16 h-0.5 bg-gray-300"></div>
              </div>
              <h3 className="text-black-hakkei sm:text-3xl text-2xl font-thin">
                Join Us in Our Mission to Abate Corruption
              </h3>
              <p className="text-gray-600 mt-4 sm:text-base text-sm italic">
                Volunteers are the brains and brawn of IEJL! Top volunteers are
                recognized and rewarded at our Galas. Please join us by
                volunteering for one of the activities listed below.
              </p>
              <div>
                <a
                  href="/"
                  className="inline-block bg-yellow-500 text-white sm:text-base text-sm uppercase mt-6 px-6 sm:py-2.5 py-2 rounded-md text-center hover:bg-yellow-600 focus:outline-none"
                >
                  Join our team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousal />

      {/* <div className="bg-gray-100 lg:my-28 md:my-20 py-16">
        <div className="main-container">
          <div className="flex md:flex-row flex-col items-center md:space-x-3 mb-8">
            <h4 className="text-yellow-500 uppercase text-xl font-thin">
             Textimonials
            </h4>
            <div className="w-20 h-0.5 bg-gray-300 md:mt-0 mt-3"></div>
          </div>
          <h3 className="md:text-3xl text-2xl md:text-left text-center font-thin text-black-hakkei md:inline hidden">
            What they say
          </h3>
          <div className="mt-12">
            <div className="flex md:flex-row flex-col-reverse items-center">
              <div className="w-full flex items-center md:border-2 md:border-yellow-500 rounded-3xl md:pl-8 md:pr-56 md:py-8  pt-6 md:-mr-48">
                <div className="space-y-3">
                  <p className="text-yellow-500 text-xl font-thin md:text-left text-center">
                    Jerry Z.
                  </p>
                  <p className="text-gray-600 sm:text-base text-sm pb-2 md:text-left text-center">
                    Volunteering with IEJL has put me in contact with amazing and passionate people to work tirelessly to end corruption. With IEJL, I collaborated and helped put into place a framework to help end corruption.
                  </p>
                </div>
              </div>
              <Img 
                className="md:h-72 md:w-52 sm:w-28 sm:h-28 w-24 h-24 object-cover object-center md:rounded-none rounded-full md:rounded-tl-5xl md:rounded-br-5xl"  
                fluid={reviewImage1.childImageSharp.fluid} 
              /> 
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-white lg:my-28 md:my-20 my-16">
        <div className="main-container">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-black-hakkei md:text-4xl text-3xl font-thin text-center border-b pb-3 mb-5">
                Our Sponsors
              </h4>
              <Img
                className="w-full h-full object-cover"
                fluid={sponsorImage1.childImageSharp.fluid}
              />
            </div>
            <div>
              <h4 className="text-yellow-500 md:text-4xl text-3xl font-thin text-center border-b pb-3 mb-5">
                Platinum
              </h4>
              <Img
                className="w-56 h-56 object-contain mx-auto"
                fluid={sponsorImage2.childImageSharp.fluid}
              />
            </div>
            <div>
              <h4 className="text-yellow-500 md:text-4xl text-3xl font-thin text-center border-b pb-3 mb-5">
                Gold
              </h4>
              <Img
                className="w-56 h-56 object-contain mx-auto"
                fluid={sponsorImage3.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 sm:h-40 h-48">
        <div className="2xl:container mx-auto sm:px-8 px-5 h-full">
          <div className="flex justify-center h-full">
            <div className="flex md:flex-row flex-col items-center md:justify-between justify-center w-full 2xl:-mr-12 lg:-mr-16 z-40">
              <p className="md:text-left text-center text-white 2xl:text-3xl 2xl:leading-tight lg:text-2xl lg:leading-tight sm:text-2xl text-xl font-thin 2xl:max-w-xl xl:max-w-lg md:max-w-md">
                Support us in creating a culture of ethical commerce with our
                future leaders
              </p>
              <a
                href="/"
                className="bg-aqua flex-shrink-0 mt-4 text-white 2xl:text-base text-sm uppercase px-6 md:py-3 py-2 rounded-md text-center hover:bg-aqua-dark focus:outline-none"
              >
                Join Today
              </a>
            </div>
            <Img
              className="xl:max-w-2xl max-w-md h-full object-cover rounded-tl-10xl lg:inline w-full hidden"
              fluid={ctaImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
