import Footer from '../Footer/Footer'
import Payout from '../HowItWork/Payout'
import Navbar from '../Navbar/Navbar'
import Selling from '../Selling/Selling'
import './Pricing.css'
import Price from './Pricing.module.css'

const Pricing = () => {
    return (
        <>
            <Navbar />
            <div className="pricing-container">
                <div className="pricing-grid top-grid">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="plan-title">STARTER</h3>
                            <p className="plan-desc">
                                <strong>YES, IT'S FREE FOREVER!</strong> With the Starter plan, you can get started selling any kind of product on Selar for Free.
                            </p>
                            <div className="price-box">
                                <span className="price">Free</span>
                            </div>
                            <a href="#" className="btn btn-outline-purple">Get started</a>
                        </div>
                        <ul className="features-list">
                            <li>10 Products</li>
                            <li>Sell Ebooks</li>
                            <li>Sell services</li>
                            <li>Sell Physical products</li>
                            <li>Sell Read online only Ebooks</li>
                            <li>Sell Digital products</li>
                            <li>Sell Subscriptions</li>
                            <li>Sell Tickets</li>
                            <li>Pre order products</li>
                            <li>CRM</li>
                            <li>Coupons – Limited</li>
                            <li>Automated Abandoned Cart Emails</li>
                            <li>Cross-selling</li>
                            <li>Sell with Affiliates – Limited</li>
                            <li>Mailchimp Integration</li>
                            <li>Facebook pixel</li>
                            <li>Multi-currency store – six currencies</li>
                            <li>Google Tag Manager Integration</li>
                            <li>QR Codes (Products & Coupons)</li>
                            <li>2 Bundle Products</li>
                            <li>2 Booking Products</li>
                        </ul>
                    </div>
                    <div className="card card-featured">
                        <div className="badge badge-purple">
                            <span>✨ RECOMMENDED PLAN</span>
                        </div>
                        <div className="card-header">
                            <h3 className="plan-title">PRO</h3>
                            <p className="plan-desc">
                                <strong>Host your courses & webinar replay videos & files, directly on Selar</strong>, prevent theft and 10X your sales with our more robust features and integrations.
                            </p>
                            <div className="price-box">
                                <span className="price">₦ 12,000</span>
                                <span className="period">every month</span>
                            </div>
                            <a href="#" className="btn btn-solid-purple">Get started</a>
                        </div>
                        <ul className="features-list">
                            <li>Everything in Starter Plan</li>
                            <li>Unlimited products</li>
                            <li>Upload up to 10 courses (Unlimited videos)</li>
                            <li>Priority support</li>
                            <li>Pay what you want product</li>
                            <li>Zapier</li>
                            <li>Sell with Affiliates – Unlimited</li>
                            <li>Coupons – Unlimited</li>
                            <li>Wordpress Learndash Integration</li>
                            <li>Kartra Integration</li>
                            <li>Paypal + Stripe for verified merchants</li>
                            <li>Custom Domain (E.g gameofthrones.com)</li>
                            <li>Upselling</li>
                            <li>Custom subdomain (E.g demo.selar.com)</li>
                            <li>Sell 10 single videos/webinar replays (Stream online only)</li>
                            <li>Sales Pages/Landing Pages – Unlimited</li>
                            <li>Affiliate Sales Pages</li>
                            <li>Drip Course content</li>
                            <li>Course Certificates</li>
                            <li>Unlimited Bundle products</li>
                            <li>Unlimited Booking products</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="plan-title">TURBO</h3>
                            <p className="plan-desc">
                                Supercharge your Selar experience; host more courses, webinar replays, and <strong>host membership sites.</strong>
                            </p>
                            <div className="price-box">
                                <span className="price">₦ 22,500</span>
                                <span className="period">every month</span>
                            </div>
                            <a href="#" className="btn btn-outline-purple">Get started</a>
                        </div>
                        <ul className="features-list">
                            <li>Everything in Pro Plan</li>
                            <li>Sell 3 Membership (Subscription) courses (Unlimited videos)</li>
                            <li>Sell 25 single videos/webinar replays (Stream online only)</li>
                            <li>Drip Membership Content</li>
                            <li>Upload up to 25 courses (Unlimited videos)</li>
                            <li>Custom Course Certificates</li>
                        </ul>
                    </div>
                </div>
                <div className="pricing-grid bottom-grid">
                    <div className="card">
                        <div className="badge badge-green">
                            <span>⚡ FOR POWER CREATORS</span>
                        </div>
                        <div className="card-header center-header">
                            <h3 className="plan-title">TURBOPLUS</h3>
                            <p className="plan-desc">
                                For power creators that have a lot of courses and memberships to sell, now you can do so much more!
                            </p>
                            <div className="price-box center">
                                <span className="price">₦ 50,000</span>
                                <span className="period">every month</span>
                            </div>
                            <a href="#" className="btn btn-outline-green">Get started</a>
                        </div>
                        <ul className="features-list">
                            <li>Upload up to 60 courses (Unlimited videos)</li>
                            <li>Sell 60 single videos/webinar replays (Stream online only)</li>
                            <li>Everything in Turbo Plan</li>
                            <li>Sell 10 Membership (Subscription) courses (Unlimited videos)</li>
                            <li>Free wallet withdrawals (for NGN only, more currencies soon)</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="badge badge-blue">
                            <span>🌟 FOR POWER CREATORS WITH UNIQUE NEEDS</span>
                        </div>
                        <div className="card-header center-header">
                            <h3 className="plan-title">ENTERPRISE</h3>
                            <p className="plan-desc">
                                For high-growth creators and organizations with advanced needs. <strong>Request a custom solution</strong> built to scale with your business goals.
                            </p>
                            <div className="price-box center">
                                <span className="price">Custom</span>
                            </div>
                            <a href="#" className="bts btn-outline-blue">Contact Sales</a>
                        </div>
                        <ul className="features-list">
                            <li>Your business is different. Let's build a plan that matches.</li>
                            <li>Includes everything in the TurboPlus Plan and additional enterprise features.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Payout />
            <section className="everything-cover">
                <div className={Price.everythingChange}>
                    <h1>Never lose an international customer again!</h1>
                    <p>We've integrated multiple payment gateways to ensure you can receive payments from anywhere in the world. We've also added support for local payment methods for our 14 supported currencies, including PayPal and Stripe for verified merchants, so all your international customers can truly pay without any hassle.</p>
                    <h3>Some of our supported payment options</h3>
                    <div className="everything-image">
                        <img src="/imgi_24_supported payments_mobile (1).png" alt="" />
                    </div>
                </div>
            </section>
            <Selling />
            <Footer />
        </>
    )
}

export default Pricing