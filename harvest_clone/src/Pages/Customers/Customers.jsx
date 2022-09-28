import React from "react";
import style from "./Customers.module.css";
const Customers = () => {
  return (
    <div>
      <div className={style.customer_top}>
        <div className={style.customer_top1}>
          <h2>See how Harvest helps teams like yours thrive</h2>
        </div>
        <div className={style.customer_top2}>
          <h3>
            Teams of all sizes, across industries, and around the world track
            time with Harvest.
          </h3>
        </div>
        <div className={style.customer_top3}>
          <div className={style.customer_facts}>
            <div>
              <h2 className={style.fact_font1}>70,000+</h2>
              <h4 className={style.fact_font2}>customers</h4>
            </div>
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg"
              alt="img"
            />
          </div>
          <div className={style.customer_facts2}>
            <div>
              <h2 className={style.fact_font1}>2 billion</h2>
              <h4 className={style.fact_font2}>hours tracked</h4>
            </div>
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg"
              alt="img"
            />
          </div>
          <div className={style.customer_facts}>
            <div>
              <h2 className={style.fact_font2}>19.6 million</h2>
              <h4 className={style.fact_font1}>invoices paid</h4>
            </div>
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg"
              alt="img"
            />
          </div>
        </div>
        <div className={style.story}>
          <div className={style.story_image}>
            <img
              src="https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg"
              alt="img"
            />
          </div>
          <div className={style.story_content}>
            <h3>FEATURED STORY</h3>
            <h2>Startup studio Dovetail tracks time with</h2>
            <h2>Harvest to build trust with clients.</h2>
            <a href="#">
              <div className={style.story_button}>Read customer story</div>
            </a>
          </div>
        </div>
        <div className={style.customer_logos}>
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize"
            alt="img"
          />
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize"
            alt="img"
          />
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize"
            alt="img"
          />
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize"
            alt="img"
          />
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize"
            alt="img"
          />
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize"
            alt="img"
          />
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize"
            alt="img"
          />
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"
            alt="img"
          />
        </div>
      </div>
      <div className={style.horizontal_line}></div>
      <div className={style.story_team}>
        <div className={style.story_team_nav}>
          <nav>
            <span>All Industries</span>
            <span>Architecture</span>
            <span>Creative services</span>
            <span>Engineering & Design</span>
            <span>MAnagement consulting</span>
            <span> Web development &IT</span>
          </nav>
        </div>
        <div className={style.story_team_grid}>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/rana/rana-logo.svg"
              alt="img"
            />
            <p>
              Rana, an ecological design company, uses Harvest to keep track of
              their projects and billable hours in one place.{" "}
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg"
              alt="img"
            />
            <p>
              Digital transformation company Centric Digital relies on Harvest’s
              reports and invoicing.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/mutual-mobile/mutual-mobile-logo.svg"
              alt="img"
            />
            <p>
              Harvest supported mobile development agency Mutual Mobile in their
              recent growth.
            </p>
          </div>
        </div>
      </div>
      <div className={style.customer_bottom}>Bottom</div>
    </div>
  );
};

export default Customers;
