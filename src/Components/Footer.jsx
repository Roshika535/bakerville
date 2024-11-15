import React from 'react'

const Footer = () => {
  return (
    <>
    <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <span className="ml-4 mt-20 text-3xl font-bold text-orange-400 font-bold font-serif ">BAKERVILLE</span>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Need Help?
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Customer Care
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Store locator
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    B2B Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Navigation
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Baker Catalog
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Our Story
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Social
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                   Facebook 
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="#">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  )
}

export default Footer