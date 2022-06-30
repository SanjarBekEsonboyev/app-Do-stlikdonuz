import React, {Component} from 'react';

class NavBarTwo extends Component {
    render() {
        return (
            <div className="container-fluid bg-white">
                <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-8">
                        <ul className="d-flex justify-content-between list-unstyled mt-3 ">
                            <li ><span><svg xmlns="http://www.w3.org/2000/svg"
                                           width="26" height="26" fill="currentColor"
                                           className="bi bi-house-door-fill" viewBox="0 0 16 16">
                                      <path
                                          d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0
                                           .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5
                                            0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0
                                            0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0
                                            0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                                    </svg>  </span><a href="#" className="text-decoration-none text-dark w-25">Jamiyat haqida</a></li>
                            <li><a href="#" className="text-decoration-none text-dark w-25">Struktura</a></li>
                            <li><a href="#" className="text-decoration-none text-dark w-25">Yangiliklar</a></li>
                            <li><a href="#" className="text-decoration-none text-dark w-25">Elektron murojaatlar</a></li>
                            <li><a href="#" className="text-decoration-none text-dark w-25">Interaktiv xizmatlar</a></li>
                            <li><a href="#" className="text-decoration-none text-dark w-25">Aloqa</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                    </div>
                </div>

            </div>
        );
    }
}

export default NavBarTwo;