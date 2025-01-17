import Image from 'next/image';
import React from 'react';
import logoLight from "../../public/images/logo-light.svg"
import logox from "../../public/images/x.svg";
import logodiscord from "../../public/images/discord.svg";
import logolink from "../../public/images/linkedin.svg";
import logoinsta from "../../public/images/insta.svg";
import logoyou from "../../public/images/youtube.svg";
import contactphone from '../../public/images/contactphone.svg';
import contactemail from '../../public/images/contactemail.svg';
import contactnum from '../../public/images/contactnum.svg';
import contactweb from '../../public/images/contactweb.svg';
import hearticon from '../../public/images/hearticon.svg';
import LinkButton from './ButtonLink';

const Footer = () => {
  return (
    <footer className="py-12 text-white" style={{background: '#021723', fontFamily: 'Helvetica, Arial, sans-serif'}}>
      <div className="container px-6 mx-auto">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex flex-col w-full mb-6 lg:w-1/4 basis-[30%]"> {/* mainpart */}
            <div className="flex items-center mb-4">
              <Image
                src={logoLight}
                className="inline w-10"
                alt="Logo"
                width={150}
                height={120}
              />
              <span className='ml-4 font-bold' style={{color: "#FFFFFF"}}>
                Boston Innovations<br/>Corporation
              </span>
            </div>
            <div className="flex space-x-3">
              <a href="https://discord.gg/6Z73xt5fWJ" target='_blank' rel="noopener noreferrer"><Image src={logodiscord} className="inline w-7" alt="Discord" /></a>
              <a href=""><Image src={logox} className="inline w-7" alt="Twitter" /></a>
              <a href="https://www.linkedin.com/company/boston-innovations/" target='_blank' rel="noopener noreferrer"><Image src={logolink} className="inline w-7" alt="LinkedIn" /></a>
              <a href=""><Image src={logoinsta} className="inline w-7" alt="Instagram" /></a>
              <a href=""><Image src={logoyou} className="inline w-7" alt="YouTube" /></a>
            </div>
            <span
              className='mt-4'
              style={{fontSize: "16px", lineHeight: "26px"}}
            >
              Designed by Boston Innovations with love
              <Image src={hearticon} className="inline w-8" alt="Heart" width="24px" height="24px" />
            </span>
          </div>
          <div className="flex flex-wrap justify-between w-full lg:w-2/4 basis-[40%]" style={{fontFamily: "Helvetica, Arial, sans-serif"}}>
            <div className="w-full mb-6 sm:w-1/2 lg:w-1/4">
              <h3 className="mb-3 text-lg font-semibold" style={{fontSize: "17px"}}>Overview</h3>
              <ul style={{fontSize: "14px"}}>
                <li className='my-5'><LinkButton title={"Projects"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Partner"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Our Company"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Opportunities"} footer={"1"} linkname={""} /></li>
              </ul>
            </div>
            <div className="w-full mb-6 sm:w-1/2 lg:w-1/4">
              <h3 className="mb-3 text-lg font-semibold" style={{fontSize: "17px"}}>Company</h3>
              <ul style={{fontSize: "14px", lineHeight: "20px"}}>
                <li className='my-5'><LinkButton title={"About Us"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Blogs"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Testimonials"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Careers"} footer={"1"} linkname={""} /></li>
              </ul>
            </div>
            <div className="w-full mb-6 sm:w-1/2 lg:w-1/4">
              <h3 className="mb-3 text-lg font-semibold" style={{fontSize: "17px"}}>Services</h3>
              <ul style={{fontSize: "14px", lineHeight: "20px"}}>
                <li className='my-5'><LinkButton title={"Our AI Model"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"3PL Fulfillment"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Freight & Shipping"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Custom Packaging"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Returns & Reverse Logistics"} footer={"1"} linkname={""} /></li>
              </ul>
            </div>
            <div className="w-full mb-6 sm:w-1/2 lg:w-1/4">
              <h3 className="mb-3 text-lg font-semibold" style={{fontSize: "17px"}}>Legal</h3>
              <ul style={{fontSize: "14px", lineHeight: "20px"}}>
                <li className='my-5'><LinkButton title={"Privacy"} title1={"Policy"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Terms &"} title1={"Conditions"} footer={"1"} linkname={""} /></li>
                <li className='my-5'><LinkButton title={"Help"} footer={"1"} linkname={""} /></li>
              </ul>
            </div>
          </div>
          <div className="w-full mb-6 sm:w-1/2 lg:w-1/4 basis-[25%] lg:ml-auto" style={{fontSize: "17px", fontFamily: "Helvetica, Arial, sans-serif"}}>
            <h3 className="mb-3 text-lg font-semibold">Contact Info</h3>
            <ul style={{fontSize: "14px"}}>
              <li style={{fontSize: "21px", color: "#2596BE"}} className='my-2'>
                <Image src={contactphone}
                  className='inline mr-2'
                  alt="Phone"
                />
                <a href="#" className="hover:underline">Schedule a Demo Today</a>
              </li>
              <li style={{fontSize: "17px"}} className='my-5'>
                <Image src={contactemail}
                  className='inline mr-2'
                  alt="Email"
                  width="27px"
                  height="28px"
                />
                <a href="mailto:info@bostoninnovations.org" className="underline">info@bostoninnovations.org</a>
              </li>
              <li style={{fontSize: "17px"}} className='my-5'>
                <Image src={contactnum}
                  className='inline mr-2'
                  alt="Phone Number"
                />
                +1 (617) 396-0766
              </li>
              <li style={{fontSize: "17px"}} className='my-5'>
                <div className='items-center'>
                  <Image src={contactweb}
                    className='inline mr-2'
                    alt="Address"
                    width="27px"
                    height="28px"
                  />
                  <span>251 Devonshire St, Boston, MA 02110</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 mt-6 text-center border-t border-gray-700">
          <a href='https://www.linkedin.com/company/boston-innovations/' target='_blank' rel="noopener noreferrer"><p className="text-sm">&copy; 2024 Boston Innovations. All Rights Reserved.</p></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
