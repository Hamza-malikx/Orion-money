import React from "react";
import img from "../../quickswap-logo.png";
import img2 from "../../CoinMarketCap.png";
import img3 from "../../CoinGecko.png";
const Oriontoken = () => {
  return (
    <>
      <section className="content-holder slider-section">
        <h2 className="slider-header orion-token-header">Orion token</h2>{" "}
        <div className="orion-token-section">
          <img
            src="./img/trade/orion-token-illustration@2x.png"
            className="orion-token"
          />
          <img
            src="./img/trade/orion-token-illustration-mob@2x.png"
            className="orion-token orion-token-mobile"
          />{" "}
          <span className="orion-token-trade">Trade $ORION on:</span>
          {/* <embed src="./img/trade/trade-lines.svg" className="orion-token-lines"/> */}
          <div className="Wrapper">
            <div className="azab">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="571"
                height="363"
                viewBox="0 0 571 60"
                fill="none"
              >
                <path
                  d="M285 1.99999L285 38M285 38L285 58.5M285 38L143.75 38M285 38L565 38C567.209 38 569 39.7909 569 42L569 58.5M2 58.5L2 42C2 39.7908 3.79086 38 6 38L143.75 38M427.25 38L427.25 58.5M143.75 38L143.75 58.5"
                  stroke="url(#paint0_linear_3301_6020)"
                  stroke-opacity="0.1"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3301_6020"
                    x1="324"
                    y1="2.49999"
                    x2="321.98"
                    y2="30.3535"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD600" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>

              <embed
                src="./img/trade/lines-mobile.svg"
                className="orion-token-lines orion-token-lines-mobile"
              />
              <div className="orion-token-links">
                <a
                  id="linkOne"
                  href="https://www.gate.io/trade/ORION_USDT"
                  target="_blank"
                  className="orion-token-link"
                >
                  <img src="./img/trade/gateio-logo.svg" />
                  <span className="link-name">Gate.io</span>
                </a>
                <a
                  id="linkTwo"
                  href="https://pancakeswap.finance/swap?outputCurrency=0x5530ec23f4eE1521182bd158C09F4CA7efEC1ef0"
                  target="_blank"
                  className="orion-token-link"
                >
                  <img src="./img/trade/pancakeswap-logo.svg" />
                  <span className="link-name">Pancakeswap</span>
                </a>
                <a
                  id="linkThree"
                  href="https://app.uniswap.org/#/swap?outputCurrency=0x727f064A78DC734D33eEc18d5370aef32Ffd46e4"
                  target="_blank"
                  className="orion-token-link"
                >
                  <img src="./img/trade/uniswap-logo.svg" />
                  <span className="link-name">Uniswap</span>
                </a>
                <div className="raw-wrapper">
                  <span className="one-line">
                    <svg
                      width="4"
                      height="24"
                      viewBox="0 0 4 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 1.75L1.75 22.25"
                        stroke="url(#paint0_linear_3312:6083)"
                        stroke-opacity="0.1"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>{" "}
                      <defs>
                        <linearGradient
                          id="paint0_linear_3312:6083"
                          x1="1.75001"
                          y1="-33.75"
                          x2="-0.269726"
                          y2="-5.89646"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFD600"></stop>{" "}
                          <stop offset="1" stop-color="white"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>{" "}
                  <div style={{ display: "flex" }}>
                    <div>
                      <a
                        id="linkFour"
                        href="https://app.terraswap.io/#Swap"
                        target="_blank"
                        className="orion-token-link"
                      >
                        <img src="./img/trade/terraswap-logo.svg" />
                        <span className="link-name">TerraSwap</span>
                      </a>
                    </div>
                    <div>
                      <a
                        id="linkFive"
                        href="https://quickswap.exchange/#/swap?outputCurrency=0x5E0294Af1732498C77F8dB015a2d52a76298542B&amp;inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
                        target="_blank"
                        rel="noreferrer noopener"
                        class="orion-token-link"
                      >
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div>
                            <img src={img} class="orion-token-link-image" />
                          </div>
                          <div>
                            <span class="link-name">QuickSwap</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightContent">
              <h5 className="orions">Info On Orions</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="223"
                height="61"
                viewBox="0 0 223 61"
                fill="none"
              >
                <path
                  d="M221 59L221 42.5C221 40.2908 219.209 38.5 217 38.5L64.5 38.5M2 1.99999L2 34.5C2 36.7091 3.79086 38.5 6 38.5L64.5 38.5M64.5 38.5L64.5 59"
                  stroke="url(#paint0_linear_3760_6871)"
                  stroke-opacity="0.1"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3760_6871"
                    x1="175"
                    y1="2.99999"
                    x2="172.98"
                    y2="30.8535"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD600" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="wrap">
                <div>
                  <a
                    href="https://coinmarketcap.com/currencies/orion-money/"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="orion-token-link mr-78px"
                  >
                    <div className="img2">
                      <div>
                        <img src={img2} class="orion-token-link-image" />
                      </div>
                      <div>
                        <p class="img2Text">CoinMarketCap</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.coingecko.com/en/coins/orion-money"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="orion-token-link"
                  >
                    <div className="img2">
                      <div>
                        <img src={img3} class="orion-token-link-image" />
                      </div>
                      <div>
                        <span class="img2Text">CoinGecko</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Oriontoken;
