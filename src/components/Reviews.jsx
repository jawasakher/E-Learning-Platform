import { ratingData } from "../../data";
import Review from "./Review";
import SectionHeader from "./SectionHeader";
function Reviews () {
    return(
    <section id="reviews">
        <div className="container">
            <SectionHeader title={"What Our Students Say"} description={"Hear from our students about their learning experience and success stories."} />
        <div className="ratings">
            {ratingData.map((rating) => {
            const { id, img, job, description, stars, name } = rating;
            return<Review key={id} img={img} job={job} description={description} name={name} stars={stars} />
           
           })}
           </div>
            </div>
    </section>
    );

}
export default Reviews;