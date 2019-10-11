import React from 'react'
import { FaFacebookF as FacebookIcon } from 'react-icons/fa'

const Footer = () => (
  <footer className="bg-secondary py-5">
    <div className="container">
      <div className="row flex sm:flex-row items-center flex-wrap flex-col flex-col-reverse">
        <div className="col sm:w-1/2">
          <p className="text-white font-medium">© 2019 GopherCon Vietnam</p>
        </div>
        <div className="col sm:w-1/2 sm:mb-0 mb-4 leading-none">
          <a
            href="https://facebook.com/golang.org.vn"
            className="flex items-center justify-end "
          >
            <FacebookIcon className="text-white" />
            <span className="ml-2 text-blue font-medium">@gophercon.vn</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
