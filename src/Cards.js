import React from 'react'
import { data } from './data'

function Cards() {
    return (
        <>
          {data.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">{item.title}</h5>
                  <h6 className="card-price text-center">${item.cost}<span className="period">/month</span></h6>
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.user}</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.storage} Storage</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>{item.access}</li>
                    <li className={item.title === "FREE" ? "text-muted" : ""}>
                    <span className="fa-li">
                        <i className={item.title === "FREE" ? "fas fa-times" : "fas fa-check"}></i>
                    </span>
                    {item.projects}
                    </li>
                    <li className={item.title === "FREE" ? "text-muted" : ""}><span className="fa-li"><i className={item.title === "FREE" ? "fas fa-times" : "fas fa-check"}></i></span>{item.support}</li>
                    <li className={item.title === "FREE" ? "text-muted" : ""}><span className="fa-li"><i className={item.title === "FREE" ? "fas fa-times" : "fas fa-check"}></i></span>{item.domain}</li>
                    <li className={item.title === "PRO" ? "" : "text-muted"}><span className="fa-li"><i className={item.title === "PRO" ? "fas fa-check" : "fas fa-times"}></i></span>{item.report}</li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
    )
}

export default Cards