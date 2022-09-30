import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import style from "./Intregations.module.css";
import img from './int.png'
const Intregations = () => {
return (
<div className={style.main}>
    <div className={style.customer_top}>
        <div>
            <div className={style.customer_top1}>
                <h2>Time tracking integrated with your team’s favorite apps</h2>
            </div>
            <div className={style.customer_top2}>
                <h3>
                Harvest works with the most popular tools so your team can track time effortlessly.
                </h3>
            </div>
        </div>
        <div>
            <img src={img} alt="img" />
        </div>
    </div>
    <div className={style.horizontal_line}></div>
    <div style={{backgroundColor:'#fff4ec', paddingTop:'60px'}}>
        <InputGroup w="90%" m='auto'>
            <InputLeftElement pointerEvents='none' children={<SearchIcon color='black.300' />}
            />
            <Input type='tel' placeholder='Phone number' bg='white' padding='20px 15px 20px 60px' />
        </InputGroup>
    </div>
    <div className={style.story_team}>
        <div className={style.story_team_nav}>
            <nav className={style.nav_span}>
                <span>All Integrations</span>
                <span>Analytics & reporting</span>
                <span>Creative services</span>
                <span>Browser extensions</span>
                <span>Communication & CRM</span>
                <span>Contracts & proposals</span>
                <span>Development & connectivity</span>
                <span>Featured integrations</span>
                <span>Finance & payments</span>
                <span>Issue tracking & support</span>
                <span>Productivity</span>
                <span>Project management</span>
            </nav>
        </div>
        <div className={style.story_team_grid}>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/asana.png?width=300&name=asana.png"
                    alt="img" />
                <h2>Asana</h2>
                <p>
                    Track time right from your Asana tasks without switching to
                    Harvest.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/basecamp.png?width=300&name=basecamp.png"
                    alt="img" />
                <h2>Basecamp</h2>
                <p>Track time from your to-dos with a Harvest browser extension.</p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/github.png?width=300&name=github.png"
                    alt="img" />
                <h2>GitHub</h2>
                <p>
                    Track time from issues and pull requests with a Harvest browser
                    extension.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/slack.png?width=300&name=slack.png"
                    alt="img" />
                <h2>Slack</h2>
                <p>
                    Start timers, check someone's status, and keep track of project budgets.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/trello.png?width=300&name=trello.png"
                    alt="img" />
                <h2>Trello</h2>
                <p>
                    Track time from cards with the Harvest Power-Up or browser extension.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/qbo.png?width=300&name=qbo.png"
                    alt="img" />
                <h2>QuickBooks Online</h2>
                <p>
                    Copy Harvest invoices and recorded payments right into this accounting tool.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/xero.png?width=300&name=xero.png"
                    alt="img" />
                <h2>Xero</h2>
                <p>
                    Copy Harvest invoices and payments to this accounting app, eliminating double entry.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/stripe.png?width=300&name=stripe.png"
                    alt="img" />
                <h2>Stripe</h2>
                <p>
                    Receive invoice payments online by credit card or ACH payment.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/paypal.png?width=300&name=paypal.png"
                    alt="img" />
                <h2>PayPal</h2>
                <p>
                    Accept online payments through PayPal Standard.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/chrome.png?width=300&name=chrome.png"
                    alt="img" />
                <h2>Chrome</h2>
                <p>
                    Track time right from your browser and popular project management tools.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/jira.png?width=300&name=jira.png"
                    alt="img" />
                <h2>Jira</h2>
                <p>
                    Track time right from the issue and project tracking software Jira.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/outlook.png?width=300&name=outlook.png"
                    alt="img" />
                <h2>Outlook.com</h2>
                <p>
                    Pull your Outlook calendar events into your Harvest timesheet.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/google-calendar.png?width=300&name=google-calendar.png"
                    alt="img" />
                <h2>Google Calendar</h2>
                <p>
                    Pull your Google Calendar events into your Harvest timesheet.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/zapier.png?width=300&name=zapier.png"
                    alt="img" />
                <h2>Zapier</h2>
                <p>
                    Connect Harvest to 1,000+ apps with automated workflows using Zapier.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/ifttt.png?width=300&name=ifttt.png"
                    alt="img" />
                <h2>IFTTT</h2>
                <p>
                    Create simple connections between Harvest and the apps you use every day.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/zendesk.png?width=300&name=zendesk.png"
                    alt="img" />
                <h2>Zendesk</h2>
                <p>
                    A professional help desk tool where you can track time spent on tickets for billing.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/alfred.png?width=300&name=alfred.png"
                    alt="img" />
                <h2>Alfred</h2>
                <p>

                    Control your Harvest timers using keyboard shortcuts with this Alfred workflow.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/workspace.png?width=300&name=workspace.png"
                    alt="img" />
                <h2>Google Workspace</h2>
                <p>

                    Sign in with your Google account and export time data into Google Drive.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/teamwork.png?width=300&name=teamwork.png"
                    alt="img" />
                <h2>Teamwork Projects</h2>
                <p>

                    Track time and export invoices right from this collaboration platform.


                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/flow.png?width=300&name=flow.png"
                    alt="img" />
                <h2>Flow</h2>
                <p>

                    Start and stop timers from this project management tool.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations/apollo-icon@2x.png?width=300&name=apollo-icon@2x.png"
                    alt="img" />
                <h2>Apollo</h2>
                <p>

                    A great all-in-one project management and CRM solution for your business.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/firefox.png?width=300&name=firefox.png"
                    alt="img" />
                <h2>Firefox</h2>
                <p>

                    Track time right from your browser and popular project management tools.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/edge.png?width=300&name=edge.png"
                    alt="img" />
                <h2>Edge</h2>
                <p>

                    Track time right from your browser and popular project management tools.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations/akita-icon@2x.png?width=300&name=akita-icon@2x.png"
                    alt="img" />
                <h2>Akita</h2>
                <p>

                    View a complete project and invoice history for each Harvest client.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations/beanstalk-icon@2x.png?width=300&name=beanstalk-icon@2x.png"
                    alt="img" />
                <h2>Beanstalk</h2>
                <p>

                    Add time entries as you check in your changes to this hosted Subversion system.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations/bidsketch-icon@2x.png?width=300&name=bidsketch-icon@2x.png"
                    alt="img" />
                <h2>Bidsketch</h2>
                <p>

                    Create and track beautiful proposals, which can then be invoiced from Harvest.
                </p>
            </div>

            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations/breeze-icon@2x.png?width=300&name=breeze-icon@2x.png"
                    alt="img" />
                <h2>Breeze</h2>
                <p>

                    See who's working on what and track time directly from your tasks.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations/brightpod-icon@2x.png?width=300&name=brightpod-icon@2x.png"
                    alt="img" />
                <h2>Brightpod</h2>
                <p>

                    Project management for digital teams, with Harvest time tracking built in.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations/clickup-icon@2x.png?width=300&name=clickup-icon@2x.png"
                    alt="img" />
                <h2>ClickUp</h2>
                <p>

                    Hassle-free time tracking synced to every task on the productivity platform, ClickUp.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/outlook.png?width=300&name=outlook.png"
                    alt="img" />
                <h2>Outlook.com</h2>
                <p>
                    Pull your Outlook calendar events into your Harvest timesheet.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/google-calendar.png?width=300&name=google-calendar.png"
                    alt="img" />
                <h2>Google Calendar</h2>
                <p>
                    Pull your Google Calendar events into your Harvest timesheet.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/zapier.png?width=300&name=zapier.png"
                    alt="img" />
                <h2>Zapier</h2>
                <p>
                    Connect Harvest to 1,000+ apps with automated workflows using Zapier.
                </p>
            </div>
            <div>
                <img src="https://www.getharvest.com/hs-fs/hubfs/integrations-new/outlook.png?width=300&name=outlook.png"
                    alt="img" />
                <h2>Outlook.com</h2>
                <p>
                    Pull your Outlook calendar events into your Harvest timesheet.
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
                <div className={style.try_harvest_button}>
                    <a href="/signin">
                        <div>Try Harvest free</div>
                    </a>
                </div>
                <p>Free 30-day trial. No credit card required.</p>
            </div>
        </div>
        <div>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg"
                alt="img" />
        </div>
        
    </div>
</div>
);
};

export default Intregations;