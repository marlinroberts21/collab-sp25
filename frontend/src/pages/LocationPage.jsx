import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function LocationPage() {
    useEffect ( () => {
        document.title = "Location";
    }
    , []);

    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <section className="col p-2">
                        <div className="text-center fs-3 m-0 mt-5 mb-3">
                            <h1 className="">Boise Location</h1>
                            <h2 className="">Visit Us at:</h2>
                            <p className="">5500 E Opportunity Dr, Nampa, ID 83687</p>
                            <iframe className="border border-3 mt-3 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.6341202116396!2d-116.50980592382531!3d43.61415917110404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae4d7b62c56f7f%3A0xd03501e762c399a!2sNampa%20Campus%20Academic%20Building%2C%205500%20E%20Opportunity%20Dr%2C%20Nampa%2C%20ID%2083687!5e0!3m2!1sen!2sus!4v1744835469391!5m2!1sen!2sus"
                             width={500} height={400}  allowfullscreen="" loading="lazy" ></iframe>
                        </div>
                    </section>
                    <section className="col p-2 ">
                        <div className="text-center fs-3 m-0 mt-5 mb-3">
                            <h2 className="">Contact Details</h2>
                            <img src={'/owner_scott.png'} class="img-fluid mx-auto d-block rounded" width={250} alt="Scott's Picture" />                            
                            <p>Scott Didriksen</p>
                            <p><a href="tel:+2087414097">208-562-3174</a></p>
                            <p><a href="mailto:vladkolmorgan@my.cwi.edu">scottdidriksen@cwi.edu</a></p>
                            <div className="text-start mt-5 opsHours">
                                <h2>Hours of Operation</h2>
                                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                                <p>Saturday - Sunday: Closed</p>
                                <p>Holidays: Closed</p>
                                <div className="button-group">
                                    <Link className="btn btn-success me-3 " to="/contact" >Contact us</Link>
                                    <Link className="btn btn-success ms-3 " to="/appointments">Book an appointment</Link>
                                </div>                                
                            </div>                            
                        </div>
                    </section>
                </div>                
            </div> 

             <style>
             {`
               //mobile view (up to 576px)
                @media (max-width: 576px) {
                    
                    iframe, img {
                        width: 100% !important;
                        height: auto;
                    }
                    .button-group {
                        display: flex;
                        flex-direction: column;
                        gap: 0.75rem; /* vertical spacing between buttons */
                        text-align: center;
                    }
                    .button-group .btn {
                        width: 100%;
                    }
                    .opsHours {
                        text-align: center;
                    }
                }

                //tablet (577 to 768px)
                @media (min-width: 577px) and (max-width: 768px) {
                    
                }
                //desktop (769 to 992px)
                @media (min-width: 769px) and (max-width: 992px) {
                    
                }
                `}
            </style>           
        </>
    );
}