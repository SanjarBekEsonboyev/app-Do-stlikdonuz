import React, {Component} from 'react';
import "../css/main.css"

class NavBar extends Component {
    render() {
        return (
            <nav className="nav navbar-expand-md">
                    <div className="container-fluid">
                       <div className="row">
                           <div className="col-1">

                           </div>
                           <div className="col-6  d-flex justify-content-between align-items-center">
                               <a href="#" className="navbar-brand  text-success mt-2">Dustlikdon.uz</a>
                                   <div className="input-group mt-3 ml-5">
                                       <div className="input-group-prepend">
                                           <span className="input-group-text bg-white"><svg xmlns="http://www.w3.org/2000/svg"
                                                                                   width="16" height="16"
                                                                                   fill="currentColor"
                                                                                   className="bi bi-search"
                                                                                                                           viewBox="0 0 16 16">
                                                                                      <path
                                                                                          d="M11.742 10.344a6.5 6.5 0 1 0-1.397
                                                                                           1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0
                                                                                           1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12
                                                                                            6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                                                                    </svg>
                                           </span>
                                       </div>
                                       <input type="text" className="form-control" placeholder="Search file"/>
                                   </div>

                           </div>
                           <div className="col-4 d-flex justify-content-center  align-items-center">
                                    <p className="mt-3">На русском</p>
                               <button type="button" className="btn btn-outline-success h-50  ml-5 d-flex justify-content-between"><span><svg xmlns="http://www.w3.org/2000/svg"
                                                                                      width="16" height="16"
                                                                                      fill="currentColor"
                                                                                      className="bi bi-telephone"
                                                                                      viewBox="0 0 16 16">
                                                                                  <path
                                                                                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605
                                                                                       2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568
                                                                                        0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608
                                                                                         4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678
                                                                                          0 0 0-.063-1.015l-2.307-1.794a.678.678
                                                                                          0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0
                                                                                           1-1.657-.459L5.482 8.062a1.745 1.745
                                                                                           0 0 1-.46-1.657l.548-2.19a.678.678 0
                                                                                            0 0-.122-.58L3.654 1.328zM1.884.511a1.745
                                                                                            1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315
                                                                                             1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457
                                                                                              2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745
                                                                                               1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905
                                                                                                1.87.163 2.611l-1.034 1.034c-.74.74-1.846
                                                                                                 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42
                                                                                                  18.634 18.634 0 0 1-4.42-7.009c-
                                                                                                  .362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                                                                </svg>
                               </span><p className="ml-3">998 72 335-41-16</p>
                               </button>
                           </div>
                       </div>


                    </div>
            </nav>
        );
    }
}

export default NavBar;