import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import logo from "./logo.png"

export function Footer() {
  return (
    <div className={style.Footer}>
      <div className={style.footer}>
        <div className={style.sitemap}>
        <div className={style.harvest}>
           <img src={logo} alt="" />
          </div>
          <div className={style.harvest}>
            <h4>Harvest</h4>
            <div>
              {" "}
              <Link>Home</Link>
            </div>
            <div>
              <Link>Why Harvest?</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Features</Link>
              <br />
            </div>
            <div>
              <Link>Pricing</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Integrations</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Apps</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Security</Link>
              <br />
            </div>
          </div>

          <div className={style.harvest}>
            <h4>Community</h4>
            <div>
              {" "}
              <Link>Customer Stories</Link>
            </div>
            <div>
              <Link>Resources</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Webinars</Link>
              <br />
            </div>
            <div>
              <Link>Help & Support</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Integrate with Harvest</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Time Well Spent</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Time in This Time</Link>
              <br />
            </div>
          </div>

          <div className={style.harvest}>
            <h4>Comapny</h4>
            <div>
              {" "}
              <Link>About Us</Link>
            </div>
            <div>
              <Link>Blogs</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Press</Link>
              <br />
            </div>
            <div>
              <Link>Careers</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Legal</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Contact Us</Link>
              <br />
            </div>
          </div>
        </div>
        

        <div className={style.forcast}>
        We also make: Harvest Forecast – the fast and simple way to schedule your team across projects.
        </div>


        <div className={style.copyright}>
          <div cl>
            <Link>© 2006-2022 Harvest</Link>
          </div>
          <div>
            <div>
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            <Link>Twitter</Link>
            </div>

            <div>
            <img src="https://cdn-icons-png.flaticon.com/128/4008/4008233.png" alt="LinkedIn" />
            <Link>LinkedIn</Link>
            </div>

            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" />
            <Link>Instagram</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
