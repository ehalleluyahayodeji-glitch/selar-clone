import Footer from '../Footer/Footer'
import KindProduct from '../KindProduct/KindProduct'
import Navbar from '../Navbar/Navbar'
import Selling from '../Selling/Selling'
import './HowItWork.css'

const HowItWork = () => {
    return (
        <>
            <Navbar />
            <section className="page-how-work">
            <div className="how_it_work">
                <h1>How it Works</h1>
            </div>
            </section>
            <section className="selling-work">
            <div className="started-selling">
                <h1>In less than 5 minutes, you can get started selling your digital products and services for free.</h1>
            </div>
            <section class="container">
                <div class="steps-column">
                    <div class="step-item">
                        <div class="step-number-container">
                            <span class="step-number">1</span>
                            <svg class="step-connector" viewBox="0 0 20 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0 C 25 30, -5 70, 10 100" stroke="#8A385A" stroke-width="1.5" stroke-dasharray="3 3" />
                            </svg>
                        </div>
                        <div class="step-content">
                            <h3>Sign up and set up your payouts</h3>
                            <p>Create your Selar account in minutes and add your bank details. Choose how you want to get paid and set your preferred currencies for selling locally or globally.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number-container">
                            <span class="step-number">2</span>
                            <svg class="step-connector" viewBox="0 0 20 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0 C 25 30, -5 70, 10 100" stroke="#8A385A" stroke-width="1.5" stroke-dasharray="3 3" />
                            </svg>
                        </div>
                        <div class="step-content">
                            <h3>Create and upload your products</h3>
                            <p>Add your products to Selar by uploading your files, setting prices, and filling in product details. Customize your product page and link to match your brand.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number-container">
                            <span class="step-number">3</span>
                        </div>
                        <div class="step-content">
                            <h3>Share your link and start selling</h3>
                            <p>Share your store or product link anywhere you have an audience. After a purchase, Selar automatically gives the buyer access to your product and handles your payout.</p>
                        </div>
                    </div>
                </div>
                <div class="image-column">
                    <div class="pink-accent-box"></div>
                    <svg class="corner-dashed corner-top-left" viewBox="0 0 40 40" fill="none">
                        <path d="M 0 35 A 25 25 0 0 1 35 0" stroke="#8A385A" stroke-width="1.5" stroke-dasharray="3 3" />
                    </svg>
                    <div class="image-wrapper">
                        <img src="/imgi_2_digital_products_img1.png" alt="Woman working on laptop" />
                    </div>
                    <svg class="corner-dashed corner-bottom-right" viewBox="0 0 40 40" fill="none">
                        <path d="M 5 40 A 25 25 0 0 1 40 5" stroke="#8A385A" stroke-width="1.5" stroke-dasharray="3 3" />
                    </svg>
                </div>
            </section>
                <div className="more">
                    <button>Start Selling with Selar</button>
                </div>
                </section>

            <KindProduct />
            <section className="everything">
                <div className="everything-cover">
                    <h1>Everything is done for you</h1>
                    <p>We've integrated multiple payment gateways to ensure you can receive payments from anywhere in the world. Once you receive a payment, we pay you based on the settlement sechedule.</p>
                    <div className="everything-image">
                        <img src="/imgi_5_paypal.png" alt="" />
                        <img src="/imgi_6_mpesa.png" alt="" />
                        <img src="/imgi_16_mtn_logo.svg" alt="" />
                        <img src="/imgi_8_airtel_logo.png" alt="" />
                        <img src="/imgi_9_tigo_logo.png" alt="" />
                        <img src="/imgi_10_stripe_logo.png" alt="" />
                        <img src="/imgi_11_mc.png" alt="" />
                        <img src="/imgi_12_visa.png" alt="" />
                        <img src="/imgi_14_verve.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="page-howItWorks">
                <div className="howCover">
                    <div className="how">
                        <h1>Payouts</h1>
                        <p>We work with multiple payment providers to facilitate payouts to bank accounts, mobile money wallets and paypal in all <span>14 countries</span> we support. You get to sell in any currency and have the amount converted and credited in your country's local currency.</p>
                    </div>
                    <div className="selectOption">
                        <label htmlFor="select the country">Select the country you're in</label>
                        <select>
                            <option value="">Nigeria</option>
                            <option value="">Benin Republic</option>
                            <option value="">Cameroon</option>
                            <option value="">Ghana</option>
                            <option value="">Kenya</option>
                        </select>
                        <label htmlFor="select the country">When you make a sale in</label>
                        <select>
                            <option value="">Nigeria</option>
                            <option value="">Benin Republic</option>
                            <option value="">Cameroon</option>
                            <option value="">Ghana</option>
                            <option value="">Kenya</option>
                        </select>
                        <div className="bank-account">
                            <h1>When you make a sale in <span>bank account</span></h1>
                            <p>1 day</p>
                            <h3>after the sale</h3>
                        </div>
                    </div>
                </div>
            </section>
            <div className="workVideo">
                <div className="videoWork">
                    <h1>Multicurrency & international payments</h1>
                    <p>We handle multicurrency payments so seamlessly you never have to worry about losing an international client again! Here's a video breaking down how multicurrency payments work on Selar.</p>
                    <iframe width="1337" height="753" src="https://www.youtube.com/embed/-CeiF1wSQhs" title="How Multicurrency payment works on Selar - Everything you need to know." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <Selling />
            <Footer />
        </>
    )
}

export default HowItWork