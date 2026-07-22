// eslint-disable-next-line-react/prop-types

function Card({ img, title, description, color, bgcolor})  {
    return(
    <div className="Card">
        <span className="icon" style={{color: color, backgroundColor: bgcolor}}>
            {img}
        </span>
        <h2>{title}</h2>
        <span className="line"></span>
        <p>{description}</p>
    </div>
    );
}
export default Card;