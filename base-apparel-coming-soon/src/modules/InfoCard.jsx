import '../styles/styles.css'

function InfoCard(){
    return(
        <div className="card">
            <div className="cardLeftContent">
                <div className="cardHeader">
                    <div className="cardLogo">

                    </div>
                </div>

                <div className="cardModalMobile">

                </div>

                <div className="cardChildContent">
                    <h1>WE&rsquo;RE</h1>
                    <h1>COMING</h1>
                    <h1>SOON</h1>
                    <p>
                        Hello fellow shoppers!
                        We&rsquo;re currently building our new fashion store.
                        Add your email below to stay up-to-date
                        with announcements and our launch deals
                    </p>
                    <div className="cardEmailWrapper">
                        <div className="cardEmail">
                            <form>
                                <input placeholder="Email Address"/>
            
                                <button></button>
                            </form>
                        </div>
                        <div className="error"></div>
                    </div>
                </div>
            </div>
            <div className="cardRightContent cardModalDesktop">

            </div>
        </div>
    )
}

export default InfoCard