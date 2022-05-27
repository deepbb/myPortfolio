import "./Product.css";
import { Link } from "react-router-dom"
import port from "../img/weather.png"
import blog from "../img/blog.png"
import pizza from "../img/pizza.png"
import social from "../img/social.png"
import commerce from "../img/commerce.png"

function Product() {
    return (
        <>
        <div className="productPage">
        <h3 className="heading">PROJECTS</h3>
        <h4 className="text">I have worked on recently</h4>
        </div>

        <div className="productsegment">
        <div className="prod">
            <a href=" " target="_blank" rel="noreferrer">
                <img src={commerce} alt="" className="p-img" />
            </a>
            <p className="projectpara">Full stack e-commerce appication where the user is authorized and authenticated before sigining up</p>
            <Link className="linkProject" to="/projects/ecommerce">
            <p className="learn">Learn More</p>
            </Link>
            

        </div>
        <div className="prod">
            <a href=" " target="_blank" rel="noreferrer">
                <img src={social} alt="" className="p-img" />
            </a>
            <p className="projectpara">Full stack a social media appication where the user is authorized and authenticated before sigining up</p>
            <Link className="linkProject" to="/projects/social">
            <p className="learn">Learn More</p>
            </Link>

            
        </div>
       
    
        
        <div className="prod">
            <a href="https://food-one-rho.vercel.app/ " target="_blank" rel="noreferrer">
                <img src={pizza} alt="" className="p-img" />
            </a>
            <p className="projectpara">Full stack a social media appication where the user is authorized and authenticated before sigining up</p>
            <Link className="linkProject" to="/projects/food">
            <p className="learn">Learn More</p>
            </Link>
            </div>
            
        <div className="prod">
            <a href=" " target="_blank" rel="noreferrer">
                <img src={blog} alt="" className="p-img" />
            </a>
            <p className="projectpara">Full stack a social media appication where the user is authorized and authenticated before sigining up</p>
            <Link className="linkProject" to="/projects/blog">
            <p className="learn">Learn More</p>
            </Link>
            
            

            
        </div>

    
        <div className="prod">
            <a href=" " target="_blank" rel="noreferrer">
                <img src={port} alt="" className="p-img" />

            </a>
            

            
        </div>
        </div>
        </>
       
    )
}

export default Product
