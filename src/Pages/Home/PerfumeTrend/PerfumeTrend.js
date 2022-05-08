import React from 'react';
import { Link } from 'react-router-dom';
import momBanner from '../../../images/mom-banner.PNG';
import springBanner from '../../../images/spring-banner.PNG';

const PerfumeTrend = () => {
    return (
      <div className="container mb-5">
        <h2 className="text-center">PERFUMES & COSMETICS TRENDS</h2>
        <div className="mothers-day mt-5">
          <div className="row gx-5 d-flex align-items-center justify-content-center">
            <div className="col">
              <img className="img-fluid" src={momBanner} alt="" />
            </div>
            <div className="col">
              <h2>BEST PERFUME FOR MOTHER'S DAY</h2>
              <p className="my-3">
                <small className=" fw-bold">Feb 22 2022</small>
              </p>
              <p className="text-muted">
                Mother's Day is around the corner but you still don't know what
                Mother's Day gift to buy for your beloved and cherished mom to
                tell her how much she means to you?
              </p>
              <p className="mb-5">
                We’ve rounded up the best perfumes for Mother's Day to help you
                gift the superwoman in your life. Check our amazing selection of
                Mother's Day gifts!
              </p>
              <p className="fs-2">PERFUME FOR MOTHER'S DAY</p>
            </div>
          </div>
        </div>

        <div className="spring-men mt-5">
          <div className="row gx-5 d-flex align-items-center justify-content-center">
            <div className="col">
              <h2>BEST SPRING FRAGRANCES FOR MEN</h2>
              <p className="my-3">
                <small className=" fw-bold">MAR 14 2022</small>
              </p>
              <p className="text-muted">
                If you’re wondering what scents are associated with spring,
                well, spring and summer scents are fresh, floral, and fruity.
                Look for ingredients like mandarin and orange, vetiver and
                bergamot; the best spring colognes will freshen you up, in a
                reviving kind of way.
              </p>
              <p className="mb-5">
                So, It is time to find your new Spring perfumes to fit your new
                mood. Discover here the best perfumes to wear for Spring.
              </p>
              <p className="fs-2">SPRING PERFUMES FOR MEN</p>
            </div>
            <div className="col">
              <img className="img-fluid" src={springBanner} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default PerfumeTrend;