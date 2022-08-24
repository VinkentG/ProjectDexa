import React, { useEffect } from "react";
import Guest from "@/Layouts/Guest2";
import logo from "./Logo/login.png";
import stars from "./Home/stars.png";
import front from "./Home/mountains_front.png";
import behind from "./Home/mountains_behind.png";
import moon from "./Home/moon.png";
import "../../css/home.css";
// import Parallax from "react-scroll-parallax";

export default function Home(props) {
    window.addEventListener("scroll", function () {
        const value = window.scrollY;
        stars1.style.left = value * 0.25 + "px";
        moon1.style.top = value * 1.05 + "px";
        behind1.style.top = value * 0.5 + "px";
        front1.style.top = value * 0 + "px";
        text.style.marginRight = value * 4 + "px";
        text.style.marginTop = value * 1.5 + "px";
        btn.style.marginTop = value * 1.5 + "px";
    });

    return (
        <Guest>
            <header>
                <a className="logo">Logo</a>
                {/* <Link href="/">
                    <img src={logo} className=" logo" alt="" srcSet=""></img>
                </Link> */}
                <ul>
                    <li>
                        <a className="active">Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Work</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </header>
            <section>
                <img src={stars} id="stars1"></img>
                {/* <Parallax speed={-10}> */}
                <img src={moon} id="moon1"></img>
                {/* </Parallax> */}
                <img src={behind} id="behind1"></img>
                <h2 className="font-poppin" id="text">
                    Moon Light
                </h2>
                <a id="btn" href="#sec">
                    Explore
                </a>
                <img src={front} id="front1"></img>
            </section>
            <div className="sec" id="sec">
                <h2>Test</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam beatae minima sit obcaecati sapiente placeat qui
                    dicta hic, animi tempore exercitationem dolore doloribus quo
                    quisquam ullam! Ducimus mollitia maxime quaerat! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dolorem magnam
                    saepe eum quaerat quod ab repellat consequatur esse alias
                    animi error nulla, explicabo vitae nihil et maxime suscipit,
                    soluta veritatis! Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Nam, delectus veritatis. Possimus tenetur
                    fugit, quas vitae in quod. Commodi quaerat maxime
                    voluptatibus rerum magnam amet molestias laborum suscipit
                    tempora dignissimos.<br></br>
                    <br></br>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Doloremque obcaecati ullam fugit nemo ipsa nostrum
                    odio, minima est assumenda fugiat optio illum, quas
                    architecto nulla aspernatur. Alias iure earum provident?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta tempora nisi molestias fugit doloribus neque
                    similique, repellat commodi sapiente! Iusto mollitia qui
                    saepe repellendus repellat corporis aperiam? Tempora,
                    similique iusto. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Explicabo nulla tempore deserunt culpa
                    incidunt! Nemo est corrupti facere maxime, placeat esse sunt
                    recusandae expedita, voluptatum quod ratione soluta
                    aspernatur non!
                    <br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, ratione iste! Nostrum, repellat quae itaque earum
                    reiciendis inventore tempora autem excepturi, voluptates
                    possimus id in praesentium soluta veritatis eveniet
                    recusandae. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Architecto consectetur dolorum officiis
                    officia et aspernatur voluptas? Laudantium, distinctio,
                    voluptatem sint quis in, praesentium neque sunt sit dolorem
                    qui assumenda eaque! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ex aperiam nostrum maiores nihil
                    laudantium id culpa necessitatibus soluta ratione veniam
                    atque natus laboriosam, adipisci impedit. Nostrum nam
                    distinctio ut maiores!
                </p>
            </div>
        </Guest>
    );
}
