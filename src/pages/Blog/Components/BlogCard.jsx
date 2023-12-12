import "../BlogPage.css"
function BlogCard(prop){

    return(<div className="BlogCardMain">
        <img src={prop.pic} alt={prop.pic} className="BlogPic"/>
        <div className="BlogDescription">
        <div className="BlogDate"><br/>{prop.month} {prop.day} . {prop.year}</div>
                    <div className="BlogHeading">{prop.heading}</div>
                    <div className="BlogDesc">{prop.desc}</div><br/><br/><br/><br/><br/>
                    <hr/><br/>
                    <pre className="Blogactivity">{prop.likes} likes   {prop.comments} comments               {prop.emoji}</pre>
        </div>
        <div className="blank"></div>
    </div>)

}

export default BlogCard;