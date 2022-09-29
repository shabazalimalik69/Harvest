import React from 'react'
import WhyHarvest from "./WhyHarvest.module.css";
import { Link } from 'react-router-dom';

const WhyHarvests = () => {


  return (
    <div className={WhyHarvest.body}>

      {/* firstDiv */}
    <div className={WhyHarvest.main_div}>
      <div>
      <h1 className={WhyHarvest.h1}>Help your team spend time wisely</h1>
      <h3 className={WhyHarvest.h3}>Harvest time tracking makes it easy to capture time, gain insights from past projects, and get paid for your work.</h3>
      <div className={WhyHarvest.btn_And_p_div}>

      <div className={WhyHarvest.btn_div}>
      <Link to="/signin"><button className={WhyHarvest.btn}>Try Harvest Free</button></Link>
      </div>

      <div className={WhyHarvest.p_div}>
        <p className={WhyHarvest.p}>Free 30-day trial. No credit card required.</p>
        </div>

      </div>
      </div>
    </div>

    {/* secondDiv */}

      <div className={WhyHarvest.second_div}>
        <div className={WhyHarvest.second_div__first_div}>

          <p className={WhyHarvest.h4}>Empower your team with insight</p>
          <p className={WhyHarvest.p1}>By tracking time and expenses in Harvest, you capture critical project data that allows you to learn from the past, keep current projects on track, and better estimate future projects.</p>

          <p className={WhyHarvest.p1}>Review past data to improve how you scope and price work</p>
          <p className={WhyHarvest.p2}>Understand which projects are profitable — and why</p>
          <p className={WhyHarvest.p2}>Know when to take on new business (or grow your team)</p>
          <div className={WhyHarvest.btn_div2}>
      <Link to="/features"><button className={WhyHarvest.btn2}>Browse features</button></Link>
      </div>
        </div>

        <div className={WhyHarvest.second_div__second_div}>

          <div className={WhyHarvest.right_img_div}>
          <img   src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-reflect.svg" alt="photo" />
          <p className={WhyHarvest.bellow_picture_text}>"As a growing business, with Harvest we get a lot of insights and intelligence that we couldn’t get before."</p>
          <p className={WhyHarvest.bellow_picture_text}>Ben Graham, Turnstyle</p>
          </div>



        </div>
        </div>
        {/* secondDiv_End */}

        {/* third_div_start */}

        <div className={WhyHarvest.second_div}>

        <div className={WhyHarvest.second_div__second_div}>

          <div className={WhyHarvest.right_img_div}>
              <img   src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-keep.svg" alt="photo" />
                  <p className={WhyHarvest.bellow_picture_text}>"We needed something super simple because we don’t want to have to teach people how to use it as part of onboarding."</p>
                  <p className={WhyHarvest.bellow_picture_text}>Nick Frandsen, Dovetail</p>
          </div>
        </div>

          {/* /// */}
        <div className={WhyHarvest.second_div__first_div}>

          <p className={WhyHarvest.h4}>Time tracking that works the way your team works</p>
          <p className={WhyHarvest.p1}>Time tracking software is only useful if it’s actually used. That’s why we designed Harvest to be easy to adopt, integrated with your favorite apps, and flexible enough for all types of teams.</p>

                    <p className={WhyHarvest.p1}>Integrated with the tools your team already knows and loves</p>
                    <p className={WhyHarvest.p2}>Track time wherever you work - desktop, browser, and mobile</p>
                    <p className={WhyHarvest.p2}>Intuitive and easy to learn</p>
          <div className={WhyHarvest.btn_div2}>
                    <Link to="/features"><button className={WhyHarvest.btn2}>Browse features</button></Link>
          </div>
          </div>

          {/* /// */}
        </div>


        {/* third_div_end */}

        {/* forth_div_start */}

        <div className={WhyHarvest.second_div}>
        <div className={WhyHarvest.second_div__first_div}>

          <p className={WhyHarvest.h4}>Keep your projects on track</p>
          <p className={WhyHarvest.p1}>Harvest provides visibility into the key aspects of your projects—budget, team capacity, and costs—enabling you to keep everything on time and on budget.</p>

          <p className={WhyHarvest.p1}>Clear visual reports allow you to compare actual time vs. budget</p>
          <p className={WhyHarvest.p2}>Get more accurate timesheet and cost data</p>
          <p className={WhyHarvest.p2}>Pinpoint which tasks are impacting costs</p>
          <div className={WhyHarvest.btn_div2}>
      <Link to="/features"><button className={WhyHarvest.btn2}>Browse features</button></Link>
      </div>
        </div>

        <div className={WhyHarvest.second_div__second_div}>

          <div className={WhyHarvest.right_img_div}>
          <img   src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-track.svg" alt="photo" />
          <p className={WhyHarvest.bellow_picture_text}>"We can see if a project is in danger of going off track and course-correct way before it actually becomes a problem."</p>
          <p className={WhyHarvest.bellow_picture_text}>Michael Kucera, Zehner</p>
          </div>



        </div>
        </div>



        {/* fourth_div_start */}

        {/* fifth_div_start */}

        <div className={WhyHarvest.second_div}>

        <div className={WhyHarvest.second_div__second_div}>

          <div className={WhyHarvest.right_img_div}>
              <img  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-invest.svg" alt="photo" />
                  <p className={WhyHarvest.bellow_picture_text}>"Harvest gives us feedback on how we’re doing so we can be competitive, make a profit, and keep ourselves afloat."</p>
                  <p className={WhyHarvest.bellow_picture_text}>John Wall, Public</p>
          </div>
        </div>

          {/* /// */}
        <div className={WhyHarvest.second_div__first_div}>

          <p className={WhyHarvest.h4}>Trusted by thousands of teams worldwide</p>
          <p className={WhyHarvest.p1}>We’ve been serving teams of all sizes, across all types of industries for over 15 years. Today, with more than 70,000 customers, you can be sure that Harvest will work for your team’s unique needs.</p>

                    <p className={WhyHarvest.p1}>Flexible timekeeping and invoicing, whether you bill by time or by project</p>
                    <p className={WhyHarvest.p2}>Scalable one-product-fits-all approach, that can grow with your team</p>
                    <p className={WhyHarvest.p2}>Used by companies of all types, from creative agencies to management consulting</p>
          <div className={WhyHarvest.btn_div2}>
                    <Link to="/features"><button className={WhyHarvest.btn2}>Browse features</button></Link>
          </div>
          </div>

          {/* /// */}
        </div>


        {/* fifth_div_end */}

        {/* sixth_div_start */}

        <div className={WhyHarvest.company_name}>
          <img  className={WhyHarvest.company_name_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize" alt="logo" />
          <img  className={WhyHarvest.company_name_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize" alt="logo" />
          <img  className={WhyHarvest.company_name_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize" alt="logo" />
          <img  className={WhyHarvest.company_name_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize" alt="logo" />
          <img  className={WhyHarvest.company_name_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize" alt="logo" />
          <img  className={WhyHarvest.company_name_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize" alt="logo" />
          <img  className={WhyHarvest.company_name_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize" alt="logo" />
          <img  className={WhyHarvest.company_name_img} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize" alt="logo" />


        </div>
        {/* sixth_div_end */}

        {/* seventh_div_start */}

        <div className={WhyHarvest.main_div2}>
      <div>
      <h1 className={WhyHarvest.h1}>Start tracking time today</h1>
      <h3 className={WhyHarvest.h3}>Join 70,000+ companies spending their time wisely with Harvest.</h3>
      <div className={WhyHarvest.btn_And_p_div}>

      <div className={WhyHarvest.btn_div}>
      <Link to="/signin"><button className={WhyHarvest.btn}>Try Harvest Free</button></Link>
      </div>

      <div className={WhyHarvest.p_div}>
        <p className={WhyHarvest.p}>Free 30-day trial. No credit card required.</p>
        </div>

      </div>
      </div>
    </div>

        


        {/* seventh_div_end */}



        


    </div>

    
    


  )
}

export default WhyHarvests;