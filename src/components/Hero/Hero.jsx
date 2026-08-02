import './Hero.css'
const Hero = () => {
    return (
        <>
        <section className="page-1">
        <div className="hero-head">
            <h5>THE <span>LARGEST</span>CREATOR PLATFORM IN AFRICA</h5>
            <h1>The best way to sell your digital products online</h1>
            <p>Selar is your all-in-one e-commerce store builder to sell any kind of digital product or service to anyone anywhere in the world.</p>
            <button>Start Selling with Selar</button>
        </div>
        <div className="hero-img">
            <img src="/imgi_6_hero_web.png" alt="" />
        </div>
        <div className="trusted-img">
            <img src="/imgi_8_person_1.jpeg" alt="" />
            <img src="/imgi_9_person_2.jpeg" alt="" className='pos-2' />
            <img src="/imgi_10_person_3.jpeg" alt="" className='pos-3'/>
        </div>
            <div className="trusted-p">
            <p>Trusted by over <span>2,600,000</span> users all over the world.</p>
            </div>
        </section>
        </>
    )
}

export default Hero