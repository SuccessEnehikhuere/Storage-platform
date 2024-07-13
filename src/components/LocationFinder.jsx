import { IoSearch } from 'react-icons/io5'
import { links } from '../utils'
import line from '../assets/images/hero/line.svg'

const LocationFinder = () => {
  return (
    <main className="bg-cream px-4 md:px-16">
      <div className="bg-white rounded-lg lg:rounded-b-lg border custom-button-border absolute top-[350px] md:top-[768px] w-full max-w-[400px] md:max-w-[80%] left-1/2 transform -translate-x-1/2">
        <div className="p-4">
          <div className="flex items-center justify-center gap-2 py-4">
            <img
              src={line}
              className="w-[40.5px] h-[1px] md:w-[311px] md:h-[1px] border custom-button-border"
            />
            <h2 className="text-center font-helvetica font-[700]  text-main text-[18px] md:text-[24px] leading-[28px] md:leading-[32px]">
              Search our locations
            </h2>
            <img
              src={line}
              className="w-[40.5px] h-[1px] md:w-[311px] md:h-[1px] border custom-button-border"
            />
          </div>

          <div className="flex items-center justify-center gap-x-4 px-8 ">
            <input
              className=" py-3 w-full border rounded-md pl-2"
              placeholder="Search locations by postcode"
            />
            <button className="bg-main py-3 px-8 rounded-md flex gap-x-4 items-center">
              <span className=" hidden md:flex font-helvetica font-[700] leading-[24px] text-[16px] text-white">
                Search
              </span>
              <IoSearch className="w-[15.6px] h-[15.7px] md:w-[16px] md:h-[16px] text-white font-[700]" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 py-4">
            <img
              src={line}
              className="w-[40.5px] h-[1px] md:w-[311px] md:h-[1px] border custom-button-border"
            />
            <h2 className="text-center font-helvetica font-[700]  text-main text-[16x] leading-[24px] ">
              Or find by town
            </h2>
            <img
              src={line}
              className="w-[40.5px] h-[1px] md:w-[311px] md:h-[1px] border custom-button-border"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
            {links.map((link, index) => {
              const IconComponent = link.img
              return (
                <a
                  href={link.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="rounded-md px-4 py-3 border custom-button-border font-helvetica font-[700] bg-white  flex items-center gap-3 justify-center text-main leading-[24px]"
                >
                  <span>{link.text}</span>
                  <IconComponent />
                </a>
              )
            })}
            {/* <button className="flex items-center rounded-md py-2 px-3 border custom-button-border font-helvetica font-[700] text-$">
              <FaArrowRightLong />
            </button> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default LocationFinder
