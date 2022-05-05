import React from 'react';
import banner from '../../images/about-banner.png';


const About = () => {
    return (
      <div className="container">
        <div className="row justify-content-md-between align-items-center my-5">
          <div className="col-8 content-container">
            <h1>ABOUT US</h1>
            <div className='justify'>
              <p>
                Scentitude the Royal Name of Perfumes, an Emirates company that
                was established by the Chairman Abdulla Al Qaisieh and co-
                founder Abdul Aziz Al Qaisieh early 1999 as a retailer of high
                quality Oriental and Arabian Fragrances. Scentitude Perfumes
                captures the essence of glorious times in its captivating
                fragrance.
              </p>
              <p>
                Scentitude conducted extensive studies on the ancient perfumer’s
                art and evolved methods to create amazingly authentic
                traditional fragrance employing modern techniques. It also
                succeeded in blending Oriental and Arabian fragrances to create
                its many signature scents and symbolized the perfect fusion of
                the Mystic East and the Modern West.
              </p>
              <p>
                Scentitude established an extensive network of outlets across
                the region. Founded in Abu Dhabi in year 1999 and currently
                there are 19 Scentitude Outlets in The United Arab Emirates, 4
                Outlets in KSA, 1 in Bahrain, 2 in Kuwait, 2 in Qatar, 1 in
                Poland an 1 in Africa.
              </p>
              <p>
                All outlets have been given a magnificent corporate look fitted
                with an amazing new design adopting modernized look.
              </p>
              <p>
                At Scentitude Perfumes, we have a variety of perfumes, Oud
                Moattar, Mukhalalats , Dehn Oud presented in luxurious crystal
                bottles, Dukhouns, Attr Frash, Corporate Gifts and accessories
                catering to the multitude of preferences of our customers.
                Creating masterpieces under our Oriental and Arabian Lines.
              </p>
              <p>
                Emirates Perfumes also created several French eau de parfum that
                are made in FRANCE for Scentitude Perfumes exclusively. It also
                succeeded in blending oriental and French fragrances to create
                its own many signature scents.
              </p>
            </div>
          </div>
          <div className="col-3 banner-container">
            <img className="img-fluid"  src={banner} alt="" />
          </div>
        </div>
      </div>
    );
};

export default About;