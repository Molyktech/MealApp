import React, { Component } from "react";

const Hero = () => {
  return (
    <div>
      <section className="top_banner_bg secondary-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="top_banner" />
              <div className="text-box">
                <div className="col-md-6 ">
                  <div className="header-text mt-4">
                    <h1 className="mt-4">
                      Grace your Taste Buds with The Best Food Experience
                    </h1>
                    {/* <div className="human-heart">
                      <i className="fa fa-heart-o" />
                    </div> */}
                    <div className="hero_btn ">
                      <a href="#">
                        <button className="btn  outline-btn" type="submit">
                          Order Now
                        </button>
                      </a>

                      <span>
                        <a href="#">
                          <button className="btn  btn-default" type="submit">
                            View Menu
                          </button>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="item">
                    <div className="hero__slideContent text-center">
                      <h1>Molyk Kitchen</h1>
                      <p>
                        Looking to grace your taste buds with the world's
                        finest? Search no more. Lorem ipsum dolor sit amet,
                        consectetur adipisicing eiusmod tempor incididunt.
                      </p>
                      <a className="btn outline-btn" href="#/">
                        Details
                      </a>
                      <span className="hero__slideContent--right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
