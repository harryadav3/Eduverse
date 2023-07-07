function Course({id,imageLink,title, instructor, duration, description,price, rating}) {

    const colors = [ '#F99090', "#ABDEB6", '#C0C891','#BCCEE4' ]
    let cardColor;
        Array.from({ length: 8 }, (_, index) => {
        const randomColorIndex = Math.floor(Math.random() * colors.length);
         cardColor = colors[randomColorIndex]; })
    return (
        <div className="course" style={{backgroundColor : cardColor}}>
            <div>
                <img className="course-img" src={imageLink} alt="" />
            </div>
            <div className="details">
                <h4 className="title">{title}</h4>
                <h5 className="instructor">{instructor}</h5>
                <div className="extra">
                    <h5>{rating} ⭐⭐⭐⭐</h5>
                    <h5>{duration}hrs</h5>
                </div>
                <div className="main-info">
                    <h3>${price}</h3>
                    <span>Buy Now</span>
                </div>
            </div>
        </div>
    )
}

export default Course
