import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
             <div className="row">
             {/* column1 */}
             <div className="col">
             <h4>THICC Memes IC</h4>
             <ul className="list-unstyled">
                 <li>230-453-5678</li>
                 <li>HSR Layout, Bangalore</li>
                 <li>24th coross,PSR PG</li>
             </ul>
             </div>
             {/* column2 */}
             <div className="col">
             <h4>STUFF</h4>
             <ul className="list-unstyled">
                 <li>DANK Memes</li>
                 <li>Other STUFF</li>
                 <li>Good STUFF</li>
             </ul>
             </div>
             {/* column3 */}
             <div className="col">
             <h4>WELL ANOTHER COLUMN</h4>
             <ul className="list-unstyled">
                 <li>Jamshed</li>
                 <li>Amit</li>
                 <li>Samshed</li>
             </ul>
             </div>
             </div>
             <hr />
             <div className="row">
             <p className="col-sm">
              &copy;THICC MEMES INC | All right reserved | terms of service | privacy
             </p>
             {/* {new Date().getFullYear()}  */}
             </div>
            </div>  
        </div>
    )
}

export default Footer

