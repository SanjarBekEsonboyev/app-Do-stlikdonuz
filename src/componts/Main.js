import React, {Component} from 'react';

class Main extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-6 bg-white rounded">
                        <ul className="d-flex align-items-center list-unstyled">
                            <li className="mt-4"><h6>Jamiyat haqida</h6></li>
                            <li className="ml-5 mt-3"><span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                           className="bi bi-calendar-event" viewBox="0 0 16 16">
                                      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                      <path
                                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2
                                          2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                    </svg></span> 16:48 / 12.11.20</li>
                            <li className="ml-5 mt-3"><span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                           className="bi bi-eye" viewBox="0 0 16 16">
                                      <path
                                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0
                                           0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133
                                           0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119
                                            12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg></span>321</li>
                            <li className="ml-5 mt-3"><span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                              <path
                                  d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0
                                  0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </span>100</li>
                        </ul>

                        <h2>Eksport qiluvchi tadbirkorlik subektlariga!!!</h2>
                        <p style={{fontSize: "22px",lineHeight:"42px"}}>“O‘zdonmaxsulot” aksiyadorlik kompaniyasi tizim korxonalari tomonidan istisno tariqasida maxalliy tadbirkorlik
                            sub'ektlariga eksport qilish sharti bilan birja savdolari orqali bug’doy sotilmoqda.
                            Bug’doy 2019 yil 1 sentyabrgacha 1 tonnasining boshlangich narxi qo‘shilgan qiymat solig’isiz 1 610 000 so‘mdan,
                            qo‘shilgan qiymat solig’ini xisobga olgan xolda 1 932 000 so‘mdan sotiladi.
                            Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini qo‘llash natijasida xosil bo‘lgan
                            qo‘shilgan qiymat soligining ortiqcha summasi Adliya vazirligi tomonidan 2016 yil
                            7 aprelda 2775-son bilan ro‘yxatga olingan Nizomga asosan qaytarib beriladi.
                        </p>
                        <hr/>

                        <p className="d-flex justify-content-between align-items-center ">
                            <h4>Mavzuga izohlar</h4>
                            <h6>2 ta fikr</h6>
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <img src="../images/Rectangle 64.png" alt=""/>
                            <input type="text" className="form-control btn-block ml-5 " placeholder="Izox qoldirishingiz mumkin" style={{height: "70px"}}/>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <img src="../images/Rectangle 66.png" alt=""/>
                            <div className="mt-3 ml-5 btn-block">
                                <h6>Nigina Karimova</h6>
                                <p>Tushunmovchilik bo’yicha qayerga murojaat qilsam bo’ladi?</p>
                                <span className="d-flex justify-content-between align-items-center">
                                    <span className="d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                              <path
                                                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641
                                                   2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542
                                                   6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8
                                                    2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12
                                                    3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                            </svg><p className="ml-3">Javob yozish</p>
                                    </span>
                                    <p>15 minut avval</p>
                                </span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <img src="../images/Rectangle 67.png" alt=""/>
                            <div className="mt-3 ml-5 btn-block">
                                <h6>Sahar Kenjayev</h6>
                                <p>Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat soligi stavkasini
                                    qo‘llash natijasida xosil bo‘lgan qo‘shilgan qiymat soligining ortiqcha  batafsil</p>
                                <span className="d-flex justify-content-between align-items-center">
                                    <span className="d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                  fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                              <path
                                                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641
                                                   2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542
                                                   6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8
                                                    2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12
                                                    3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                            </svg><p className="ml-3">Javob yozish</p>
                                    </span>
                                    <p>2 soat avval</p>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-3 ml-5 rounded bg-white">
                        <div className="row">
                            <div className="col-12">
                                <h3>Media</h3>
                                <div className="mt-3">
                                    <p className="d-flex justify-content-between ">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                   className="bi bi-calendar-event" viewBox="0 0 16 16">
                                              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                              <path
                                                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2
                                                  2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                               </svg>  16:48 / 12.11.20
                                        </span>
                                        <p className="text-primary">Fota galeriya</p>
                                    </p>
                                    <h6>"DO`STLIKDONMAXSULOTLARI"
                                        AJ boshqaruv raisi...</h6>
                                    <hr/>
                                </div>
                                <div className="mt-3">
                                    <p className="d-flex justify-content-between ">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                   className="bi bi-calendar-event" viewBox="0 0 16 16">
                                              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                              <path
                                                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2
                                                  2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                               </svg>  16:48 / 12.11.20
                                        </span>
                                        <p className="text-primary">Fota galeriya</p>
                                    </p>
                                    <h6>"DO`STLIKDONMAXSULOTLARI"
                                        AJ boshqaruv raisi...</h6>
                                    <hr/>
                                </div>
                                <div className="mt-3">
                                    <p className="d-flex justify-content-between ">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                   className="bi bi-calendar-event" viewBox="0 0 16 16">
                                              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                              <path
                                                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2
                                                  2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                               </svg>  16:48 / 12.11.20
                                        </span>
                                        <p className="text-primary">Fota galeriya</p>
                                    </p>
                                    <h6>"DO`STLIKDONMAXSULOTLARI"
                                        AJ boshqaruv raisi...</h6>
                                    <hr/>
                                </div>
                                <div className="mt-3">
                                    <p className="d-flex justify-content-between ">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                   className="bi bi-calendar-event" viewBox="0 0 16 16">
                                              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                              <path
                                                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2
                                                  2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                               </svg>  16:48 / 12.11.20
                                        </span>
                                        <p className="text-primary">Fota galeriya</p>
                                    </p>
                                    <h6>"DO`STLIKDONMAXSULOTLARI"
                                        AJ boshqaruv raisi...</h6>
                                    <hr/>
                                </div>
                            </div>
                            <div className="col-12 text-center mt-3 bg-light">
                             <div className="container">
                                 <h4 className="mt-5 mb-5">Shikoyatlar mavjudmi?
                                     Onlayn tarzda yuboring
                                 </h4>
                                 <span className="mt-5"> <img src="./images/1.png" alt=""/></span>
                                 <h4 className="mt-5">Davlat interaktiv
                                     xizmatlari yagona portali</h4>
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 mt-5" style={{marginLeft: "115px"}}>
                             <div className="d-flex justify-content-between align-items-center">
                                <h1>So’nggi yangiliklar</h1>
                                <span style={{marginRight: "50px"}}><span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-caret-left" viewBox="0 0 16 16">
                                      <path
                                          d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1
                                           1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                                    </svg>
                                </span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                           className="bi bi-caret-right" viewBox="0 0 16 16">
                                              <path
                                                  d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66
                                                  2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                                            </svg>
                                </span></span>
                            </div>
                        <div className="row">
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <img src="./images/Rectangle 11.png" alt=""/>
                                    <ul className="d-flex justify-content-between list-unstyled">
                                        <li className=" mt-3"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                                              className="bi bi-calendar-event" viewBox="0 0 16 16">
                                      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                      <path
                                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2
                                          2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                    </svg></span> 16:48 / 12.11.20</li>
                                        <li className="mt-3"><span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                                              className="bi bi-eye" viewBox="0 0 16 16">
                                      <path
                                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0
                                           0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133
                                           0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119
                                            12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg></span>321</li>
                                        <li className=" mt-3"><span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                              <path
                                  d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0
                                  0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </span>100</li>
                                    </ul>
                                    <h3 className="ml-2">E'lon!!!</h3>
                                    <p className="ml-2">"DO`STLIKDONMAXSULOTLARI" AJ ning
                                        aksiyadorlari diqqatiga! 2020-yil 27-mart
                                        kuni soat 9:00 dan...
                                    </p>
                                    <button type="button" className="btn w-50 h-50 ml-2 mb-2 btn-outline-success">Batafsil</button>
                                </div>
                            </div>
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <img src="./images/Rectangle 27.png" alt=""/>
                                    <ul className="d-flex justify-content-between list-unstyled">
                                        <li className=" mt-3"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                                          className="bi bi-calendar-event" viewBox="0 0 16 16">
                                      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                      <path
                                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2
                                          2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                    </svg></span> 16:48 / 12.11.20</li>
                                        <li className="mt-3"><span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                                         className="bi bi-eye" viewBox="0 0 16 16">
                                      <path
                                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0
                                           0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133
                                           0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119
                                            12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg></span>321</li>
                                        <li className=" mt-3"><span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                              <path
                                  d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0
                                  0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </span>100</li>
                                    </ul>
                                    <h3 className="ml-2">E'lon!!!</h3>
                                    <p className="ml-2">"DO`STLIKDONMAXSULOTLARI" AJ ning
                                        aksiyadorlari diqqatiga! 2020-yil 27-mart
                                        kuni soat 9:00 dan...
                                    </p>
                                    <button type="button" className="btn w-50 h-50 ml-2 mb-2 btn-outline-success">Batafsil</button>
                                </div>
                            </div>
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <img src="./images/Rectangle 18.png" alt=""/>
                                    <ul className="d-flex justify-content-between list-unstyled">
                                        <li className=" mt-3"><span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                                          className="bi bi-calendar-event" viewBox="0 0 16 16">
                                      <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                      <path
                                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2
                                          2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                    </svg></span> 16:48 / 12.11.20</li>
                                        <li className="mt-3"><span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                                         className="bi bi-eye" viewBox="0 0 16 16">
                                      <path
                                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0
                                           0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133
                                           0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119
                                            12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg></span>321</li>
                                        <li className=" mt-3"><span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-chat-left-dots" viewBox="0 0 16 16">
                              <path
                                  d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0
                                  0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </span>100</li>
                                    </ul>
                                    <h3 className="ml-2">E'lon!!!</h3>
                                    <p className="ml-2">"DO`STLIKDONMAXSULOTLARI" AJ ning
                                        aksiyadorlari diqqatiga! 2020-yil 27-mart
                                        kuni soat 9:00 dan...
                                    </p>
                                    <button type="button" className="btn w-50 h-50 ml-2 mb-2 btn-outline-success">Batafsil</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                
            </div>
        );
    }
}

export default Main;