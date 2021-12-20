import React, { useState } from "react";
import About from "./sections/About";
import Apylevel from "./sections/Apylevel";
import Earlysupporters from "./sections/Earlysupporters";
import Howit from "./sections/Howit";
import Oriontoken from "./sections/Oriontoken";
import OurInvestors from "./sections/OurInvestors";
import Ourpartners from "./sections/Ourpartners";
import { useRanger } from "react-ranger";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./bb.css";
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
  const [state, setState] = useState("USDT");
  const handleSelect = (e) => {
    setState(e);
    console.log(state);
  };
  return (
    <>
      <div
        className="section fp-section fp-table"
        data-anchor="anchor1"
        style={{ height: "10px" }}
      >
        <div className="container">
          <a href="#block-01" className="ab">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <img src="img/scroll-down-icon.svg" alt="" />
              </div>
              <div>
                <p>Scroll down</p>
              </div>
            </div>
          </a>
        </div>
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
                        {/* <input type="select" onclick={changeSelect}></input> */}
                        <DropdownButton
                          alignRight
                          title={state}
                          id="dropdown-menu-align-right"
                          onSelect={handleSelect}
                        >
                          <Dropdown.Item eventKey="USDT">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="zzz">Tether</div>
                              <div className="zzz">USDT</div>
                            </div>
                          </Dropdown.Item>

                          <Dropdown.Item eventKey="USDC">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="zzz">USD Coin</div>
                              <div className="zzz">USDC</div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="BUSD">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="zzz">Binance USD</div>
                              <div className="zzz">BUSD</div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="DAI">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="zzz">DAI</div>
                              <div className="zzz">DAI</div>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="UST">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <div className="zzz">UST</div>
                              <div className="zzz">UST</div>
                            </div>
                          </Dropdown.Item>
                        </DropdownButton>
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
                          <span className="symbol">{state}</span>
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
                          <span className="symbol">{state}</span>
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
