import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import img1 from "../../images/ico-tabs-01.png";
import img2 from "../../images/ico-tabs-02.png";
const Howit = () => {
  return (
    <>
      <div
        id="block-02"
        className="section section-02 fp-section fp-table active fp-completely"
        data-anchor="anchor3"
        style={{ height: "150px" }}
      >
        <div className="fp-tableCell" style={{ height: "150px" }}>
          <div className="content-holder">
            <h2>How it Works</h2>{" "}
            <div className="sizing">
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Deposits">
                  <div class="yehn">
                    <div
                      style={{
                        width: "80%",
                        margin: "auto",
                      }}
                    >
                      <div className="row">
                        <div className="col-2"></div>
                        <div className="col-3 text-center ">
                          <li
                            style={{
                              textDecoration: "none",
                              listStyleType: "none",
                              marginTop: "20px",
                            }}
                          >
                            <figure>
                              <img src={img1} alt="" />{" "}
                              <figcaption>
                                You deposit your
                                <br /> stablecoins with
                                <br /> Orion Money
                              </figcaption>
                            </figure>
                          </li>
                        </div>
                        <div className="col-3 text-center pt-5 mt-3">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDMyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcgMEwzMiAzLjUwMDAzTDI3IDdWNC4wMDAwM0gwVjMuMDAwMDNIMjdWMFoiIGZpbGw9IiMwMEJGNzIiLz4KPC9zdmc+Cg=="
                            alt=""
                          />
                        </div>
                        <div className="col-4 text-left">
                          <li
                            style={{
                              textDecoration: "none",
                              listStyleType: "none",
                              marginTop: "20px",
                            }}
                          >
                            <figure>
                              <img src={img2} alt="" />{" "}
                              <figcaption>
                                You earn
                                <br /> up to 20% with
                                <br /> Orion Money
                              </figcaption>
                            </figure>
                          </li>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3 text-center">
                          <li
                            style={{
                              textDecoration: "none",
                              listStyleType: "none",
                              marginTop: "20px",
                            }}
                          >
                            <figure>
                              <img src="img/ico-tabs-03.svg" alt="" />{" "}
                              <figcaption>
                                Orion Money
                                <br /> deposits stablecoins
                                <br /> with EthAnchor
                              </figcaption>
                            </figure>
                          </li>
                        </div>
                        <div className="col-1 text-center p-5 mt-3">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDMyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcgMEwzMiAzLjUwMDAzTDI3IDdWNC4wMDAwM0gwVjMuMDAwMDNIMjdWMFoiIGZpbGw9IiMwMEJGNzIiLz4KPC9zdmc+Cg=="
                            alt=""
                          />
                        </div>
                        <div className="col-3 text-center">
                          <li
                            style={{
                              textDecoration: "none",
                              listStyleType: "none",
                              marginTop: "20px",
                            }}
                          >
                            <figure>
                              <img src="img/ico-tabs-04.svg" alt="" />{" "}
                              <figcaption>
                                EthAnchor
                                <br /> converts stablecoins
                                <br /> to UST
                              </figcaption>
                            </figure>
                          </li>
                        </div>
                        <div className="col-1 text-left pt-5 mt-3">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDMyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcgMEwzMiAzLjUwMDAzTDI3IDdWNC4wMDAwM0gwVjMuMDAwMDNIMjdWMFoiIGZpbGw9IiMwMEJGNzIiLz4KPC9zdmc+Cg=="
                            alt=""
                          />
                        </div>
                        <div className="col-3 text-center">
                          <li
                            style={{
                              textDecoration: "none",
                              listStyleType: "none",
                              marginTop: "20px",
                            }}
                          >
                            <figure>
                              <img src="img/ico-tabs-05.svg" alt="" />{" "}
                              <figcaption>
                                EthAnchor
                                <br /> deposits UST to Anchor
                                <br /> on Terra
                              </figcaption>
                            </figure>
                          </li>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Withdrawals">
                  <div class="yehn">
                    <div
                      style={{
                        width: "80%",
                        margin: "auto",
                      }}
                    >
                      <div className="row">
                        <div className="col-2"></div>
                        <div className="col-3 text-center ">
                          <li
                            style={{
                              textDecoration: "none",
                              listStyleType: "none",
                              marginTop: "20px",
                            }}
                          >
                            <figure>
                              <img src="img/ico-tabs-01.svg" alt="" />{" "}
                              <figcaption>
                                You deposit your
                                <br /> stablecoins with
                                <br /> Orion Money
                              </figcaption>
                            </figure>
                          </li>
                        </div>
                        <div className="col-3 text-center pt-5 mt-3">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDMyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcgMEwzMiAzLjUwMDAzTDI3IDdWNC4wMDAwM0gwVjMuMDAwMDNIMjdWMFoiIGZpbGw9IiMwMEJGNzIiLz4KPC9zdmc+Cg=="
                            alt=""
                          />
                        </div>
                        <div className="col-4 text-left">
                          <li
                            style={{
                              textDecoration: "none",
                              listStyleType: "none",
                              marginTop: "20px",
                            }}
                          >
                            <figure>
                              <img src="img/ico-tabs-06.svg" alt="" />{" "}
                              <figcaption>
                                You earn
                                <br /> up to 20% with
                                <br /> Orion Money
                              </figcaption>
                            </figure>
                          </li>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3 text-center">
                          <li
                            style={{
                              textDecoration: "none",
                              listStyleType: "none",

                              marginTop: "20px",
                            }}
                          >
                            <figure>
                              <img src="img/ico-tabs-07.svg" alt="" />{" "}
                              <figcaption>
                                Orion Money
                                <br /> deposits stablecoins
                                <br /> with EthAnchor
                              </figcaption>
                            </figure>
                          </li>
                        </div>
                        <div className="col-1 text-center p-5 mt-3">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDMyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcgMEwzMiAzLjUwMDAzTDI3IDdWNC4wMDAwM0gwVjMuMDAwMDNIMjdWMFoiIGZpbGw9IiMwMEJGNzIiLz4KPC9zdmc+Cg=="
                            alt=""
                          />
                        </div>
                        <div className="col-3 text-center">
                          <li
                            style={{
                              textDecoration: "none",
                              listStyleType: "none",
                              marginTop: "20px",
                            }}
                          >
                            <figure>
                              <img src="img/ico-tabs-04.svg" alt="" />{" "}
                              <figcaption>
                                EthAnchor
                                <br /> converts stablecoins
                                <br /> to UST
                              </figcaption>
                            </figure>
                          </li>
                        </div>
                        <div className="col-1 text-left pt-5 mt-3">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDMyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcgMEwzMiAzLjUwMDAzTDI3IDdWNC4wMDAwM0gwVjMuMDAwMDNIMjdWMFoiIGZpbGw9IiMwMEJGNzIiLz4KPC9zdmc+Cg=="
                            alt=""
                          />
                        </div>
                        <div className="col-3 text-center">
                          <li
                            style={{
                              textDecoration: "none",
                              listStyleType: "none",
                              marginTop: "20px",
                            }}
                          >
                            <figure>
                              <img src="img/ico-tabs-05.svg" alt="" />{" "}
                              <figcaption>
                                EthAnchor
                                <br /> deposits UST to Anchor
                                <br /> on Terra
                              </figcaption>
                            </figure>
                          </li>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howit;
