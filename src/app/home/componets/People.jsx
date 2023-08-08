import React from "react";

const People = () => {
  return (
    <div className="container bg-[#FBF6EA]">
      <div className="flex pb-[74px] flex-col lg:flex-row xl:flex-row    ">
        <div className=" pl-[112px]  pt-[92px] pb-[74px] pr-[80px]  ">
          <div className=" ">
            <p className="cap1 text-[#232536]">TESTIMONIALS</p>
            <h2 className="pt-[12px]">What people say about our blog</h2>
            <p className="body1 pt-[16px] text-[#232536] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>

        <div className="pt-[80px] ">
          <div className="pl-[80px] xl:pl-[0px] lg:pl-[0px]">
            <div className=" xl:pl-[96px] xl:border-l-2 xl:border-gray-300">
              <h4 className="text-[#232536] pr-[174px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h4>
              <div>
                <div className="flex gap-[141px] pt-[141px]">
                  <div>
                    <div className="flex gap-[16px] ">
                      <img src="/image/Profile picture.png" alt="" />
                      <div>
                        <h4>Jonathan Vallem</h4>
                        <p className="body1 text-[#6D6E76]">New york, USA</p>
                      </div>
                    </div>
                  </div>
                  {/* icon  */}
                  <div className="flex gap-[24px] ">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="24"
                          transform="rotate(-180 24 24)"
                          fill="white"
                        />
                        <path
                          d="M34.2852 25C34.8374 25 35.2852 24.5523 35.2852 24C35.2852 23.4477 34.8374 23 34.2852 23L34.2852 25ZM13.449 23.2929C13.0585 23.6834 13.0585 24.3166 13.449 24.7071L19.813 31.0711C20.2035 31.4616 20.8367 31.4616 21.2272 31.0711C21.6177 30.6805 21.6177 30.0474 21.2272 29.6569L15.5703 24L21.2272 18.3431C21.6177 17.9526 21.6177 17.3195 21.2272 16.9289C20.8367 16.5384 20.2035 16.5384 19.813 16.9289L13.449 23.2929ZM34.2852 23L14.1561 23L14.1561 25L34.2852 25L34.2852 23Z"
                          fill="#232536"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="62"
                        height="62"
                        viewBox="0 0 62 62"
                        fill="none"
                      >
                        <circle cx="31" cy="31" r="31" fill="#232536" />
                        <path
                          d="M18 31C17.4477 31 17 31.4477 17 32C17 32.5523 17.4477 33 18 33V31ZM44.7071 32.7071C45.0976 32.3166 45.0976 31.6834 44.7071 31.2929L38.3431 24.9289C37.9526 24.5384 37.3195 24.5384 36.9289 24.9289C36.5384 25.3195 36.5384 25.9526 36.9289 26.3431L42.5858 32L36.9289 37.6569C36.5384 38.0474 36.5384 38.6805 36.9289 39.0711C37.3195 39.4616 37.9526 39.4616 38.3431 39.0711L44.7071 32.7071ZM18 33H44V31H18V33Z"
                          fill="#F4F4F4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
