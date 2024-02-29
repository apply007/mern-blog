import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook,BsYoutube,BsTwitter,BsInstagram, BsGithub} from "react-icons/bs"
export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                Ashif's
              </span>
              Blog
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 js Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ashif's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">GitHub</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider></Footer.Divider>
        <div className="w-full sm:flex sm:justify-between sm:items-center">
        <Footer.Copyright
          href="#"
          by="Ashif"
          year={new Date().getFullYear()}
        ></Footer.Copyright>
        <div className="flex justify-center items-center gap-8 sm:mt-2 mt-4">
          <Footer.Icon href="https://facebook.com" className="bg-red-900" icon={BsFacebook}/>
          <Footer.Icon href="#" icon={BsYoutube}/>
          <Footer.Icon href="#" icon={BsTwitter}/>
          <Footer.Icon href="#" icon={BsInstagram}/>
          <Footer.Icon href="#" icon={BsGithub}/>
        </div>
      </div>
      </div>
    </Footer>
  );
}
