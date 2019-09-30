import React from 'react'
import FacebookIcon from '@/components/svg/FacebookIcon'

const Footer = () => (
  <footer className="bg-white py-5">
    <div className="container">
      <div className="row flex sm:flex-row items-center flex-wrap flex-col flex-col-reverse">
        <div className="col sm:w-1/2">
          <p className="opacity-50 font-medium">© 2019 Golang Vietnam</p>
        </div>
        <div className="col sm:w-1/2 sm:mb-0 mb-4 leading-none">
          <a href="https://facebook.com/golang.org.vn" className="flex items-center justify-end ">
            <FacebookIcon />
            <span className="ml-4 text-primary leading-tight font-medium">
              golang.org.vn
            </span>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
