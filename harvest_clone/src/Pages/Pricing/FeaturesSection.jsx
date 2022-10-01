import React from 'react'
import style from "./Pricing.module.css"
const FeaturesSection = () => {
  return (
    <div className={style.Features_container}>
        <div>
            <h1>Features</h1>
            <div className={style.Features_grid}>
            <div>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1655459455/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/time-tracking.svg"
                    alt="img" />
                <h2>Time Tracking</h2>
                <p>
                Start and stop tracking with 1-click. Apps for desktop, mobile, and web browser.
                </p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1655459455/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Reminders.svg"
                    alt="img" />
                <h2>Reminders</h2>
                <p>Subtle reminders to track time. Never lose another hour.</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Invoicing.svg"
                    alt="img" />
                <h2>Invoicing</h2>
                <p>
                Automatically create invoices from tracked time and expenses.
                </p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Online-Payments.svg"
                    alt="img" />
                <h2>Online Payments</h2>
                <p>Accept online payments. Sync with QuickBooks and Xero.</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Reporting.svg"
                    alt="img" />
                <h2>Reporting</h2>
                <p>
                Create reports across projects. Budgets, time, team capacity, cost breakdowns, etc.
                </p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Integrations.svg"
                    alt="img" />
                <h2>Integrations</h2>
                <p>Integrate with 50+ apps including Asana, Basecamp, Trello, Slack, and more.</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Budgets.svg"
                    alt="img" />
                <h2>Budgets</h2>
                <p>
                Monitor project budgets. Get early alerts when projects take longer than budgeted.
                </p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1655459456/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Cost-Tracking.svg"
                    alt="img" />
                <h2>Cost Tracking</h2>
                <p>See how much every project costs to complete. Drill down into details.</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Expenses.svg"
                    alt="img" />
                <h2>Expenses</h2>
                <p>Add project expenses in just a few clicks. Easily attach photos of receipts.</p>
            </div>
            </div>
            <div className={style.horizontal_line}></div>
        </div>
        
    </div>
  )
}

export default FeaturesSection;