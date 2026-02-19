import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-row">

          {/* Column 1 */}
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>

            <div className="social">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col">
            <h2>Company Info</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col">
            <h2>Features</h2>
            <ul>
              <li><a href="#">Business Marketing</a></li>
              <li><a href="#">User Analytics</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li><a href="#">iOS & Android</a></li>
              <li><a href="#">Watch a Demo</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            Copyright 2026 | All rights reserved by{" "}
            <a href="https://jawasakher.com" target="_blank">
              <strong className="jawa-sakher">Jawa Sakher</strong>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;