import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './SignUp.css'

const allUsers = JSON.parse(localStorage.getItem('myUsers')) || []
const SignUp = () => {
  function createAccount(){
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value
    const userObj = {firstName, lastName, email, password, confirmPassword}

    
    if(firstName.trim() === "" && lastName.trim() === "" && email.trim() === "" && password.trim() === "" && confirmPassword.trim() === ""){
      alert('Please fill all the input!')
    }else if(password !== confirmPassword){
      alert('Password do not match!')
    }else{
      allUsers.push(userObj)
      localStorage.myUsers = JSON.stringify(allUsers)
      setTimeout(() => {
        alert('Signup Successful')
      }, 1500);
    }
  }
  return (
    <>
      <Navbar />
      <section className='signup'>
        <div className="signup-cover">
          <div className="trusted">
            <h1>Over <span>$30m</span> paid to Creators and Affiliates</h1>
            <p>Trusted by over <span>2.6M</span> users</p>
            <h4>Every day, more people are turning their knowledge and skills into income, and you can too! <br />
              A Creator in Lagos is reaching buyers in over <span> 100 countries</span> with Selar.</h4>
          </div>
        </div>
        <div className="page-form-cover">
          <div className="pageFormInput">
            <h1>Create your Selar account</h1>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
            <div className="firstName">
              <div className="first-name1">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" placeholder='Enter your first name' />
              </div>
              <div className="first-name1">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" placeholder='Enter your last name' />
              </div>
            </div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" placeholder='Enter your email address' />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Enter your password' />
            <a href="#" className='truth'>Forgot Password?</a>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm your password' />
            <div className="terms">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
            </div>
            <button onClick={createAccount}>Create account</button>
            <div className="space">
              <hr /><span>OR</span><hr />
            </div>
            <div className="button-image">
              <button className='btn-space'><img src="/download (34).svg" alt="" />Sign up with Google</button>
                <button className='btn-space'><img src="/download (35).svg" alt="" />Sign up with X (or Twitter)</button>
                <button className='btn-space'><img src="/download (1).svg" alt="" />Sign up with Facebook</button>
            </div>
          </div>
          <div className="imageForm">
            <h1>Join 2,600,000 + Selar users today!</h1>
            <p>Selar allows you to buy and sell any kind of digital product or service anywhere in the world seamlessly.</p>
            <img src="/imgi_2_store-mockup.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp