// import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "../styles/owl.css"; // Import the updated CSS file

const Review: React.FC = () => {
  // Owl Carousel settings
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  return (
    <div className="containerb">
      <div className="row">
        <div className="col-md-offset-2 col-md-10">
          <OwlCarousel className="owl-theme" {...options}>
            {/* Testimonial Item 1 */}
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                JohnDoe
                  <small>Tech Solutions</small>
                </div>
                <div className="description">
                Amazing platform! Easy to navigate, great deals, and fast shipping. Highly recommended for tech lovers!                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                SarahSmith                  <small> Home Decor Hub</small>
                </div>
                <div className="description">
                Fantastic shopping experience! The quality of products is excellent, and customer support is very helpful
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                Hassan Javed     
                             <small>Photographer</small>
                </div>
                <div className="description">
                Wide variety of fitness gear at affordable prices. Quick delivery and smooth checkout process!
                </div>
              </div>
            </div>

            
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                Mehwish Alam
                  <small>Makeup Artist</small>
                </div>
                <div className="description">
                Trendy clothing at great prices! The website is user-friendly, and delivery is always on time.
                </div>
              </div>
            </div>
            {/* Testimonial Item 2 */}
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                OliviaWhite
                  <small>Book Haven</small>
                </div>
                <div className="description">
                Perfect for book lovers! Huge collection, amazing discounts, and hassle-free ordering process.
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Review;
