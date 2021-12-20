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
  const [select, setSelect] = useState("impDivSelect");
  const [xy1, setXy1] = useState(false);
  const changeSelect = () => {
    // const xy = true;
    if (xy1 === false) {
      setXy1(true);
    } else {
      setXy1(false);
    }
    if (xy1 === false) {
      setSelect("impDivSelect1");
    } else {
      setSelect("impDivSelect");
    }
  };
  const data = [
    { id: "1", h: "Tether ", p: "USDT" },
    { id: "2", h: "USD Coin ", p: "USDC" },
    { id: "3", h: "Binance USD ", p: "BUSD" },
    { id: "4", h: "DAI ", p: "DAI" },
    { id: "5", h: "UST ", p: "UST" },
  ];
  const passingVal = (eab) => {};
  const passingVal1 = (eab) => {};
  const passingVal2 = (eab) => {};
  const passingVal3 = (eab) => {};
  const passingVal4 = (eab) => {};
  return (
    <>
      <div
        className="section fp-section fp-table"
        data-anchor="anchor1"
        style={{ height: "150px" }}
      >
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
                        <span
                          className="drop dropdownMenu"
                          onClick={changeSelect}
                        >
                          USDT
                          <div
                            className={
                              xy1 === false ? "impDivSelect" : "impDivSelect1"
                            }
                          >
                            {/* <ul
                              class="list-unstyled"
                              // onClick={passingVal(data)}
                            >
                              {value.map((val, index) => (
                                <li
                                  key={val.id}
                                  // data-value="value 1"
                                >
                                  <div
                                    onClick={passingVal(val, index)}
                                    className="wda"
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <h5>{val.h}</h5>
                                    <p>{val.p}</p>
                                  </div>
                                </li>
                              ))}
                            </ul> */}
                            <ul class="list-unstyled">
                              <li onClick={passingVal("USDT")}>
                                <div
                                  className="wda"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <h5>Tether</h5>
                                  <p>USDT</p>
                                </div>
                              </li>
                              <li onClick={passingVal1("USDC")}>
                                <div
                                  className="wda"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <h5>USD Coin</h5>
                                  <p>USDC</p>
                                </div>
                              </li>
                              <li onClick={passingVal2("BUSD")}>
                                <div
                                  className="wda"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <h5>Binance USD</h5>
                                  <p>BUSD</p>
                                </div>
                              </li>
                              <li onClick={passingVal3("DAI")}>
                                <div
                                  className="wda"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <h5>DAI</h5>
                                  <p>DAI</p>
                                </div>
                              </li>
                              <li
                                data-value="value 1"
                                onClick={passingVal4("UST")}
                              >
                                <div
                                  className="wda"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <h5>UST</h5>
                                  <p>UST</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </span>

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
