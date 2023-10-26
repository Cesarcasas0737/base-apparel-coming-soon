
function InfoCard(){
    return(
        <div>
            <div className="card">
                <div className="cardLeftContent">
                    <div className="cardHeader">

                    </div>

                    <div className="cardModalMobile">

                    </div>

                    <div className="cardChildContent">
                        <h1>WE&rsquo;RE</h1>
                        <h1>COMING SOON</h1>
                        <p>
                            Hello fellow shoppers!
                            We&rsquo;re currently building our new fashion store.
                            Add your email below to stay up-to-date
                            with announcements and our launch deals
                        </p>
                        <div className="cardEmailWrapper">
                            <div className="cardemail">
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
        </div>
    )
}

export default InfoCard