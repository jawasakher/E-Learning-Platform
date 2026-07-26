import { cardDate } from "../../data";
<<<<<<< HEAD
import Card from "./Card";
=======
import Card from "./card";
>>>>>>> dd3ec5ff26d337f47e521d1a26be2b33ad48fbe3


function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-header">
          <span>Join Us</span>
          <h1>Best Learning Opportunities</h1>
          <p>
            We know how large objects will act, but things on a small scale
            just do not act that way.
          </p>
          <a href="#" className="btn btn-red">Get Quote Now</a>
          <a href="#" className="btn btn-transparent">Learn More</a>
        </div>

        <div className="card-container">
          {cardDate.map((card) => {
            const { title, id, bgcolor, color, description, img } = card;
           
            return (
              <Card
                key={id}
                title={title}
                bgcolor={bgcolor}
                color={color}
                description={description}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;