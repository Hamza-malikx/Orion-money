import React, { useState } from "react";
import About from "./sections/About";
import Apylevel from "./sections/Apylevel";
import Earlysupporters from "./sections/Earlysupporters";
import Howit from "./sections/Howit";
import Oriontoken from "./sections/Oriontoken";
import OurInvestors from "./sections/OurInvestors";
import Ourpartners from "./sections/Ourpartners";
import { useRanger } from "react-ranger";

const Fullpage = () => {
  const [values, setValues] = useState([10]);

  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 100,
    stepSize: 1,
    values,
    onChange: setValues,
  });

  // let [value, setValue] = useState([10]);
  // const handleChange = () => {
  //   setValue((value) => {
  //     return value++;
  //   });
  // };
  return (
    <>
      <div
        className="section fp-section fp-table"
        data-anchor="anchor1"
        style={{ height: "150px" }}
      >
        <div className="fp-tableCell" style={{ height: "150px" }}>
          <div className="content">
            <div className="main">
              <div className="text">
                <h1>
                  Earn up to <strong>20%</strong>*&nbsp;
                  <br />
                  interest on your&nbsp;
                  <br />
                  favorite stablecoins
                </h1>
                <a href="//app.orion.money" className="btn big">
                  Deposit Now
                </a>
                <div className="desc">
                  <p>
                    * Earn now 15% stable APY on USDT / USDC / DAI / BUSD / FRAX
                    in kind. Soon higher APY levels augmented by ORION token.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="form-block">
                  <h2>How much can I earn?</h2>
                  <form action="//app.orion.money">
                    <dl>
                      <dt>
                        {/* <span
                          className="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="select2-data-2-8w61"
                          style={{ width: "24px" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="0"
                              aria-disabled="false"
                              aria-labelledby="select2-select-gd-container"
                              aria-controls="select2-select-gd-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-select-gd-container"
                                role="textbox"
                                aria-readonly="true"
                                title="USDT"
                              >
                                USDT
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span> */}
                        <select
                          name="select"
                          className="drop dropdownMenu"
                          data-select2-id="select2-data-1-fdxy"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option
                            value="1"
                            data-select2-id="select2-data-3-w0be"
                          >
                            USDT
                          </option>
                          <option
                            value="2"
                            data-select2-id="select2-data-4-mnn7"
                          >
                            USDC
                          </option>
                          <option
                            value="2"
                            data-select2-id="select2-data-5-xrzb"
                          >
                            BUSD
                          </option>
                          <option
                            value="3"
                            data-select2-id="select2-data-6-j16d"
                          >
                            DAI
                          </option>
                          <option
                            value="4"
                            data-select2-id="select2-data-7-jshi"
                          >
                            UST
                          </option>
                        </select>
                        <small>Your Stablecoin</small>
                      </dt>
                      <dd style={{ display: "none" }}>
                        <p>$0.0</p> <small>USD Interest per year</small>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <input
                          id="summ"
                          type="text"
                          value={values}
                          className="summ"
                        />
                        <small>Amount</small>
                      </dt>
                      <dd id="interest_crypto">
                        <p>
                          <span className="symbol">USDT</span>
                          <span className="amount">2,000</span>
                        </p>
                        <small>Interest Earned</small>
                      </dd>
                    </dl>
                    <dl>
                      <div className="holder">
                        <h1>Basic Range</h1>
                        <br />
                        <br />
                        <div
                          {...getTrackProps({
                            style: {
                              height: "4px",
                              background: "#ddd",
                              boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
                              borderRadius: "2px",
                            },
                          })}
                        >
                          {handles.map(({ getHandleProps }) => (
                            <button
                              {...getHandleProps({
                                style: {
                                  width: "14px",
                                  height: "14px",
                                  outline: "none",
                                  borderRadius: "100%",
                                  background:
                                    "linear-gradient(to bottom, #eee 45%, #ddd 55%)",
                                  border: "solid 1px #525569",
                                },
                              })}
                            />
                          ))}
                        </div>
                      </div>

                      <dd id="total">
                        <p>
                          <span className="symbol">USDT</span>
                          <span className="amount">12,000</span>
                        </p>
                        <small>Total</small>
                      </dd>
                    </dl>
                    <div className="form-holder">
                      <dd style={{ display: "block" }}>
                        <p>$0.0</p> <small>USD Interest per year</small>
                      </dd>
                      <dd id="interest_crypto">
                        <p>
                          <span className="symbol">USDT</span>
                          <span className="amount">2,000</span>
                        </p>
                        <small>Interest Earned</small>
                      </dd>
                      <dd id="total">
                        <p>
                          <span className="symbol">USDT</span>
                          <span className="amount">12,000</span>
                        </p>
                        <small>Total</small>
                      </dd>
                    </div>
                  </form>
                </div>
                <div className="form-desc">
                  <ul></ul>
                </div>
              </div>
            </div>
            <a href="#block-01" className="scroll">
              <img
                src="img/scroll-down-icon.svg"
                width="20"
                height="48"
                alt=""
              />
              Scroll down
            </a>
          </div>
        </div>
      </div>

      <About />

      <Howit />

      <div className="section-all">
        <Apylevel />

        <Oriontoken />

        <Ourpartners />

        <OurInvestors />

        <Earlysupporters />
      </div>
    </>
  );
};

export default Fullpage;
