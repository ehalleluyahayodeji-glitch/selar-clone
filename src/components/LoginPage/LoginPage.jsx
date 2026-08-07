
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './LoginPage.css'

const LoginPage = () => {
    return (
        <>
        <Navbar/>
        <section className="loginPage">
            <img src="/imgi_2_HandsPhone.png" alt="" />
            <div className="login-cover">
                <h1>Log in to Selar</h1>
                <p>Don’t have an account? <Link >Create one for free.</Link></p>
                <label htmlFor="username">Username or Email</label>
                <input type="text" placeholder='Username or Email address' />
                <button disabled>Continue</button>
                <div className="space">
                <hr /><span>or continue with</span><hr />
                </div>
                <button className='btn-space'><img src="/download (34).svg" alt="" />Login with Google</button>
                <button className='btn-space'><img src="/download (35).svg" alt="" />Login with X (or Twitter)</button>
                <button className='btn-space'><img src="/download (1).svg" alt="" />Login with Facebook</button>
            </div>
        </section>
        
        </>
    )
}

export default LoginPage