import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Customers.module.css";

const Customers = () => {
  const navigate = useNavigate();

  return (
    <div className={style.main}>
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
          <div className={style.horizontal_line}></div>
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
          <div className={style.horizontal_line}></div>
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
          <div className={style.horizontal_line}></div>
          <div className={style.customer_facts}>
            <div>
              <h2 className={style.fact_font1}>19.6 million</h2>
              <h4 className={style.fact_font2}>invoices paid</h4>
            </div>
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg"
              alt="img"
            />
          </div>
          <div className={style.horizontal_line}></div>
        </div>
        <div className={style.story}>
          <div className={style.story_image}>
            <img
              //   className={style.image}
              src="https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg"
              alt="img"
            />
          </div>
          <div className={style.story_content}>
            <h3>FEATURED STORY</h3>
            <h2>
              Startup studio Dovetail tracks time with Harvest to build trust
              with clients.
            </h2>
            <a href="#">
              <div className={style.story_button}onClick={()=>{navigate("/customers")}}>Read customer story</div>
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
          <nav className={style.nav_span}>
            <span>All Industries</span>
            <span>Architecture</span>
            <span>Creative services</span>
            <span>Engineering & Design</span>
            <span>Management consulting</span>
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
          <div>
            <img
              src="https://www.getharvest.com/hubfs/public-logo.svg"
              alt="img"
            />
            <p>
              An architecture firm focused on the public realm uses Harvest to
              keep fixed-fee projects profitable.{" "}
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/hashrocket/hashrocket-logo.svg"
              alt="img"
            />
            <p>
              Design & development agency Hashrocket uses timers to track time
              throughout their day.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/cooper-perkins/logo-cooper-perkins.svg"
              alt="img"
            />
            <p>
              Engineering practice Cooper Perkins uses Harvest to project future
              needs.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/logo-dovetail.svg"
              alt="img"
            />
            <p>
              Startup studio Dovetail tracks time with Harvest to build trust
              with clients.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/luminary-labs/logo-index-luminarylabs-0fe6b11e1f976e648dc6907ba9a2a677a71ed9013820ed9dba0415aaa4c6bd5a-1.svg"
              alt="img"
            />
            <p>
              Strategy & innovation consultancy Luminary Labs manages team
              utilization with Harvest.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/tekna/tekna-logo.svg"
              alt="img"
            />
            <p>
              Harvest helps product design company Tekna save time by
              streamlining their process.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/thecharles/the-charles-logo.svg"
              alt="img"
            />
            <p>
              The Charles uses time tracking to reinforce client and employee
              happiness.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/clinovations/clinovations-logo-1.svg"
              alt="img"
            />
            <p>
              Healthcare strategists Clinovations streamlined their time
              tracking with Harvest.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/turnstyle/turnstyle-logo.svg"
              alt="img"
            />
            <p>
              Harvest enables design agency Turnstyle to stay mindful of smart
              business practices.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/vayner-media/vayner-media-logo.svg"
              alt="img"
            />
            <p>
              Consulting agency VaynerMedia uses Harvest to surface patterns and
              opportunities.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/yld/yld-logo-1.svg"
              alt="img"
            />
            <p>
              Engineering consultancy YLD relies on Harvest to plan, staff, and
              manage their projects.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/juicyorange/juicyorange-logo-2.svg"
              alt="img"
            />
            <p>
              Harvest helps web design company Juicyorange justify their
              pricing.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/area-17/area-17-logo.svg"
              alt="img"
            />
            <p>
              Interactive design agency Area 17 checks Harvest reports to keep
              tabs on their business.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/adamick/adamick-logo.svg"
              alt="img"
            />
            <p>
              Harvest helps Adamick Architecture speed up invoicing and increase
              profitability.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/ccd-innovation/ccd-logo-1.svg"
              alt="img"
            />
            <p>
              Harvest helped culinary company CCD innovation step up their
              operational efficiency.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/zehner/zehner-logo.svg"
              alt="img"
            />
            <p>
              Digital agency Zehner manages their team's bandwidth with Harvest.
            </p>
          </div>
          <div>
            <img
              src="https://www.getharvest.com/hubfs/customers/crossley-acoustics/crossley-acoustics-logo.svg"
              alt="img"
            />
            <p>
              Acoustic design firm Crossley Acoustics uses Harvest to track time
              from job sites.
            </p>
          </div>
        </div>
      </div>
      <div className={style.horizontal_line}></div>
      <div className={style.bottom_section}>
        <div>
          <h1>Start tracking time today</h1>
          <h2>
            Join 70,000+ companies spending their time wisely with Harvest.
          </h2>
          <div className={style.bottom_button}>
            <div className={style.try_harvest_button} onClick={()=>{navigate("/signup")}}>
                <div>Try Harvest free</div>
            </div>
            <p>Free 30-day trial. No credit card required.</p>
          </div>
        </div>
        <div>
          <img
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
