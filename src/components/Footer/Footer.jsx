import './Footer.css'

const Footer = () => {
    return (
        <>
            <section className="footer-head">
                <div className="footer-cover">
                    <div className="footer-1">
                            <img src="/imgi_42_selar-logo-small.png" alt="" className='selar'/>
                        <div className="icon">
                            <img src="/download (29).svg" alt="" />
                            <img src="/download (28).svg" alt="" />
                            <img src="/download (27).svg" alt="" />
                            <img src="/download (26).svg" alt="" />
                        </div>
                        <div className="span-deta">
                            <i className="fa-solid fa-globe"></i>
                            <span>EN</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <p>© 2026 Selar. All Rights Reserved.</p>
                    </div>
                    <div className="footer-2">
                        <h4>Products</h4>
                        <li><a href="#">How it Works</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Sell Courses</a></li>
                        <li><a href="#">Show Love</a></li>
                        <li><a href="#">Tickets</a></li>
                        <li><a href="#">Integrations</a></li>
                        <li><a href="#">Affiliate Network</a></li>
                        <li><a href="#">Community</a></li>
                    </div>
                    <div className="footer-2">
                        <h4>Support & Resources</h4>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Helpdesk & Guides</a></li>
                        <li><a href="#">Creator Academy</a></li>
                        <li><a href="#">Free Product Promotional Canva Templates</a></li>
                        <li><a href="#">Press & Media Kits</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">DMCA Takedown Form</a></li>
                        <li><a href="#">Milestones</a></li>
                    </div>
                    <div className="footer-2">
                        <h4>Legal</h4>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Copyright Policy</a></li>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer