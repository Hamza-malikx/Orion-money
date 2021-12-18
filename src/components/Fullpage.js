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
  const [values, setValues] = useState([1]);
  const [cd, setcd] = useState([10000]);
  const setVal = 10000;
  const ab = 2200;
  const xy = ab * values;
  const setXX = (e) => {
    setcd(e.target.value);
  };
  const { getTrackProps, handles } = useRanger({
    min: 1,
    max: 6,
    stepSize: 1,
    values,
    onChange: setValues,
  });
  return (
    <>
      <div
        className="section fp-section fp-table"
        data-anchor="anchor1"
        style={{ height: "150px" }}
      >
        <a href="#block-01" className="ab">
          <img src="img/scroll-down-icon.svg" alt="" />
          Scroll down
        </a>
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
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <dl>
                      <dt>
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
                          value={cd}
                          className="summ"
                          onChange={(e) => {
                            setXX(e);
                          }}
                        />
                        <small>Amount</small>
                      </dt>
                      <dd id="interest_crypto">
                        <p>
                          <span className="symbol">USDT</span>
                          <span className="amount">
                            {values == 1 ? 2000 : xy}
                          </span>
                        </p>
                        <small>Interest Earned</small>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <div className="holder">
                          <h1 className="yearHeader">{`${values}`} Year</h1>
                          <br />
                          <br />
                          <div className="yu">
                            <div
                              className="ranger"
                              {...getTrackProps({
                                style: {
                                  height: "1px",
                                  width: "210px",
                                  background: " #525569",
                                  borderRadius: "2px",
                                  marginBotton: "20px",
                                },
                              })}
                            >
                              {handles.map(({ getHandleProps }) => (
                                <button
                                  // onChange={handleChange(values)}
                                  {...getHandleProps({
                                    style: {
                                      width: "100%",
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
                        </div>
                      </dt>

                      <dd id="total">
                        <p>
                          <span className="symbol">USDT</span>
                          <span className="amount">
                            {values == 1 ? cd : setVal + xy}
                          </span>
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
