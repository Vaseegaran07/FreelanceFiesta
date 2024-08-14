import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            {/* <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span> */}
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling</span>
            <span>Buying on</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            {/* <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span> */}
            <span>Affiliates</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Us</h2>
            <span>Business</span>
            <span>Workspace</span>
            <span>Logo Maker</span>
            <span>Guides</span>
            {/* <span>Get Inspired</span>
            <span>ClearVoice</span>
            <span>Learn</span>
            <span>Pro</span>
            <span>Working Not Working</span> */}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <img src="./img/Logo3.png" className="imgg" alt=""/>
            <h2>reelance Fiesta</h2>
            <span>© Freelance Fiesta International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            {/* <div className="link"> */}
              {/* <img src="/img/coin.png" alt="" /> */}
              {/* <span>USD</span> */}
            {/* </div> */}
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
