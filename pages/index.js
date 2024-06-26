import React from "react";
import Link from "next/link.js";

export default function LandingPage() {
  return (
    <section className="min-h-screen w-screen px-60 z-20 bg-gradient-to-r from-black to-transparent bg-no-repeat bg-cover" style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('https://finkraft.ai/assets/images/benefits.jpg')`}}>
      <header className="flex flex-col py-4 gap-4 mb-40 z-100">
        <div className="flex gap-2 justify-end items-center">
          <a
            href="https://www.facebook.com/people/Finkraft/100069918660246/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/finkraft1" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/finkraft.ai/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"></path>
            </svg>
          </a>
          <a href="https://in.linkedin.com/company/finkraft-ai" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
            </svg>
          </a>
        </div>
        <hr className="w-full" />
        <nav className="flex justify-between gap-48">
          <span className="flex gap-0 text-3xl text-white">
            Fin<p className="text-gray-200 font-extralight">kraft.</p>
          </span>
          <div className="flex justify-between items-center grow">
            <div className="left-menu">
              <ul className="flex gap-6 items-center text-xl text-white">
                <li className="group hover:text-blue-400">
                  Solutions
                  <ul className="hidden group-hover:flex flex-col gap-2 bg-white p-4 items-left h-max absolute border-t-2 border-t-blue-500">
                    <li>
                      <a href="https://finkraft.ai/solutions/airline-&amp;-hotel-gst-itc-automation.html">
                        Airline &amp; Hotel ITC Automation
                      </a>
                    </li>
                    <li className="my-3">
                      <a href="https://finkraft.ai/solutions/gst-invoice-distribution.html">
                        GST Invoice Distribution
                      </a>
                    </li>
                    <li>
                      <a href="https://finkraft.ai/solutions/gst-invoice-automation.html">
                        QR Invoice Automation
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group hover:text-blue-400">
                  Compliance
                  <ul className="hidden group-hover:flex flex-col gap-2 bg-white p-4 items-left h-max absolute border-t-2 border-t-blue-500">
                    <li>
                      <a href="https://finkraft.ai/compliance/compliance-overview.html">
                        Compliance Overview
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group hover:text-blue-400">
                  Resources
                  <ul className="hidden group-hover:flex flex-col gap-2 bg-white p-4 items-left h-max absolute border-t-2 border-t-blue-500">
                    <li>
                      <a href="https://finkraft.ai/resources/case-studies.html">
                        Case Studies
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group hover:text-blue-400">
                  About
                  <ul className="hidden group-hover:flex flex-col gap-2 bg-white p-4 items-left h-max absolute border-t-2 border-t-blue-500">
                    <li>
                      <a href="https://finkraft.ai/about/partners.html">
                        Partners
                      </a>
                    </li>
                    <a href="#">News</a>
                    <li className="mt-3">
                      <a href="https://finkraft.ai/about/offices.html">
                        Offices
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group hover:text-blue-400">
                  <a href="https://careers.finkraft.ai/">Careers</a>
                </li>
              </ul>
            </div>
            <div className="right-menu">
              <ul className="flex items-center gap-6 text-xl text-white">
                <li className="hover:text-blue-400">
                  <a href="https://finkraft.ai/get-in-touch.html">
                    Get In Touch
                  </a>
                </li>
                <li className="hover:text-blue-400">
                  <a href="https://finkraft.ai/book-a-demo.html">Book a Demo</a>
                </li>
                <li className="bg-black rounded text-white py-2 px-4">
                  <Link href="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="w-2/5">
        <div className="row">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-white leading-12 mb-10">
              $25m in annual savings extracted from unstructured data. Imagine
              how much money are you losing ?
            </span>
            <span className="mb-10 text-gray-100 text-xl font-light">
              <i>
                Learn how Finkraft solved travel linked GST Input challenges for
                the world’s 6th largest IT services firm
              </i>
            </span>
            <a
              href="https://finkraft.ai/resources/case-studies.html"
              className="py-3 px-4 rounded bg-green-500 w-max text-white text-xl"
            >
              <button className="green-btn">VIEW CASE STUDY</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
