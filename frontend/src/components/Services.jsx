import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div class="section section-3 mt-4" id="services">
     <div class="d-flex flex-column gap-3 col-12 col-md-12 col-lg-11 col-xl-8 mx-auto">

        <h2 class="text-center my-4">Services that we offer</h2>
        
        {/* Collision Repair  */}
        <div class="card mb-3" id="collision-repair">
            <div class="row g-0">
              <div class="services col-md-4">
                <img src={'./collision-repair.jpg'} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">Collision Repair</h3>
                  <p class="card-text">Our team specializes in collision repair to restore your vehicle's original condition. We guarantee efficient and great customer service, providing a flawless restoration of your car's appearance and functionality.</p>
                    <Link to='/collision-repair'> <button type="button" class="btn btn-primary rounded">Read More</button> </Link>

                </div>
              </div>
            </div>
        </div>

        {/* Painting  */}
        <div class="card mb-3" id="painting">
            <div class="row g-0">
              <div class="services col-md-4">
                <img src={'./painting.jpg'} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">Painting</h3>
                  <p class="card-text"> Our team specializes in precision paint repair 
                    to restore your car’s original shine. We guarantee quick,
                     affordable and customer-focused service providing a reliably flawless finish.</p>
                    <Link to='/PaintDetailsPage'> <button type="button" class="btn btn-primary rounded">Read More</button> </Link>
                </div>
              </div>
            </div>
        </div>

        {/* Specialty Painting  */}
        <div class="card mb-3" id="specialty-painting">
            <div class="row g-0">
                <div class="services col-md-4">
                <img src={'./specialty-painting.jpg'} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8 m-0 p-0">
                <div class="card-body m-0">
                    <h3 class="card-title">Specialty Painting</h3>

                    <p class="card-text">Our team specializes in custom specialty painting to enhance your vehicle's unique style.</p>
                    <Link to='/CustPaintPage'> <button type="button" class="btn btn-primary rounded">Read More</button> </Link>

                </div>
                </div>
            </div>
        </div>

     </div>   
    </div>    
  )
}
