import React, {Component} from 'react';

class Fotter extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark mt-5 ">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-4 mt-5">
                        <h3 className="text-white">Dustlikdon.uz</h3>
                        <p className="text-light">Jizzax viloyati Do‘stlik tumani <br/>
                            Sanoatchilar MFY Sanoat ko‘chasi 49</p>
                    </div>
                    <div className="col-2 mt-5">
                        <h3 className="text-white">Asosiy</h3>
                       <ul className="list-unstyled">
                           <li> <a href="#" className="text-light">Jamiyat haqida</a></li>
                           <li><a href="#" className="text-light">Struktura</a></li>
                           <li><a href="#" className="text-light">Yangiliklar</a></li>

                       </ul>
                    </div>
                    <div className="col-2 mt-5">
                        <h3 className="text-white">Xizmatlar</h3>
                        <ul className="list-unstyled">
                            <li> <a href="#" className="text-light">Elektron murojaatlar</a></li>
                            <li><a href="#" className="text-light">Interaktiv xizmatlar</a></li>
                            <li><a href="#" className="text-light">Saytdan izlash</a></li>

                        </ul>
                    </div>
                    <div className="col-2 mt-5">
                        <h3 className="text-white">Bog'lanishlar</h3>
                        <ul className="list-unstyled">
                            <li> <a href="#" className="text-light">998 71 335 41 16</a></li>
                            <li><a href="#" className="text-light">info@dustlikdon.uz</a></li>

                        </ul>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        );
    }
}

export default Fotter;