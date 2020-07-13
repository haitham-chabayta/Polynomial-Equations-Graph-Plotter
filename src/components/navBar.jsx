import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <link href="../../dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <div className="bg-dark collapse" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">
                  Graph plotter allows you to draw the graph of any polynomial
                  function by just identifying the slope and y-intercept.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="mailto: haithamchabayta@gmail.com"
                      className="text-white"
                    >
                      Email me
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/haitham-chabayta-0654681b1/"
                      className="text-white"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <svg
                id="Capa_1"
                enable-background="new 0 0 512 512"
                height="60"
                viewBox="0 0 512 512"
                width="60"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <circle
                                      cx="256"
                                      cy="256"
                                      fill="#7584f2"
                                      r="256"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <path
                    d="m512 256c0-12.577-.907-24.943-2.659-37.034l-66.986-66.986-84.386 127.307-81.186-81.186-12.964 23.875-127.508-127.508-30 300.393 114.779 114.778c11.414 1.557 23.068 2.361 34.91 2.361 141.385 0 256-114.615 256-256z"
                    fill="#4855b7"
                  />
                  <g>
                    <path
                      d="m333.412 332.403-77.086-92.576-62.428 76.918-23.294-18.906 85.425-105.252 74.603 89.594 79.125-119.784 25.032 16.535z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m409.757 162.397-79.125 119.784-74.512-89.485v47.384l.206-.253 77.086 92.576 101.377-153.471z"
                      fill="#e9edf5"
                    />
                  </g>
                  <g>
                    <path
                      d="m424.297 394.861h-317.986v-300.393h30v270.393h287.986z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m256.12 364.861h168.176v30h-168.176z"
                      fill="#e9edf5"
                    />
                  </g>
                  <g>
                    <circle
                      cx="182.252"
                      cy="307.292"
                      fill="#ffce00"
                      r="27.435"
                    />
                  </g>
                  <g>
                    <circle
                      cx="332.022"
                      cy="307.292"
                      fill="#fdba12"
                      r="27.435"
                    />
                  </g>
                  <g>
                    <circle
                      cx="256.178"
                      cy="216.207"
                      fill="#ffce00"
                      r="27.435"
                    />
                  </g>
                  <g>
                    <path
                      d="m256.178 188.772c-.019 0-.038.001-.057.001v54.867c.019 0 .038.001.057.001 15.152 0 27.435-12.283 27.435-27.435 0-15.151-12.283-27.434-27.435-27.434z"
                      fill="#fdba12"
                    />
                  </g>
                  <g>
                    <circle
                      cx="422.273"
                      cy="170.664"
                      fill="#fdba12"
                      r="27.435"
                    />
                  </g>
                </g>
              </svg>
              <strong>Graph plotter</strong>
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script>
          window.jQuery || document.write('
          <script src="../../assets/js/vendor/jquery-slim.min.js"></script>')
        </script>
        <script src="../../assets/js/vendor/popper.min.js"></script>
        <script src="../../dist/js/bootstrap.min.js"></script>
        <script src="../../assets/js/vendor/holder.min.js"></script>
      </React.Fragment>
    );
  }
}

export default NavBar;
