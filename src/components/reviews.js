import React from 'react';
import Rater from 'react-rater';

const reviews = () => (
    <div className="reviews">
      <div className="reviews__review">
        <Rater style={{ 'margin-bottom': '1em'}} total={5} rating={5} interactive={false} />
        <blockquote cite="https://www.amazon.co.uk/gp/customer-reviews/R4EQ3OUYDN7KB/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B00J9UMY2O">
          <p>...Strong on information, obviously well researched and very readable.</p>
          <strong> - Nick</strong>
        </blockquote>
      </div>
      <div className="reviews__review">
        <Rater style={{'margin-bottom': '1em'}} total={4} rating={5} interactive={false} />
        <blockquote cite="https://www.amazon.co.uk/gp/customer-reviews/R1SDFJBY3A2XK0/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B00J9UMY2O">
          <p>...Leo Balai has managed to write a book about the life of a propose built slave ship, from why it was built to its tragic end with a great loss of life, that reads like a block buster script for a movie...</p>
          <strong> - Peter Allan</strong>
        </blockquote>
      </div>
      <div className="reviews__review">
        <Rater style={{'margin-bottom': '1em'}} total={4} rating={5} interactive={false} />
        <blockquote cite="https://www.amazon.co.uk/gp/customer-reviews/RC45300502C1P/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B00J9UMY2O">
          <p>...Powerful analysis of a harrowing event...Well researched and well written.</p>
          <strong> - Gordon</strong>
        </blockquote>
      </div>
    </div>
);

export default reviews;