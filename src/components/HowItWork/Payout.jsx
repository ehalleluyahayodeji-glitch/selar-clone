// import React from 'react'

const Payout = () => {
    return (
        <>
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
        </>
    )
}

export default Payout