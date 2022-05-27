import "./Social.css"
import pizza from "../img/pizza.png"
import social from "../img/social.png"

function Social() {
  return (
    <div className="ecommerceContainer">
         <h2>Social media Application</h2>
    <p className="ecommereceDetails">Full stack e-commerce appication where the user is authorized and authenticated before sigining up 
    user can create his/her profile share the photos posts and follow their friends and likes the posts.
    Used Context API for the state management </p>
    <h2>Stack</h2>
    <div className="techstacks">
    <button className="btnreact">NextJs</button>
    <button className="btnMongo">MongoDB</button>
    <button className="btnJwt">JWT</button>
    <button  className="btnContext">Context API</button>




    </div>
    <h2>Deployement</h2>
    <p>Link</p>
    <h2>Screenshots</h2>
    <div className="commerceScrenshots">
    <img src={social} alt="" className="commerce-img" />
    <img src={pizza} alt="" className="commerce-img" />
    <img src={pizza} alt="" className="commerce-img" />
    <img src={pizza} alt="" className="commerce-img" />




    </div>
    </div>
  )
}

export default Social