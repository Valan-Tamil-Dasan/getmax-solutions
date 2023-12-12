import "../BlogPage.css"
function MainBlog(prop){
    return(        
    <div className="BlogSecond">
    <div className="BlogMainPost">
        <div className="MainPostHeader">
            <div className="MainPostDay"><div>TODAY'S POST</div></div>
        </div>
        <div className="MainPostPic">
            <img src={prop.pic} alt={prop.pic}/>
        </div>
        <div className="mainPostFooter">
           <div className="Blogdet">
            <div className="BlogDate"><br/>{prop.month} {prop.day} . {prop.year}</div>
            <div className="BlogHeading">{prop.heading}</div>
            <div className="BlogDesc">{prop.desc}</div>
            </div> 
        </div>
    </div>
</div>)
}
export default MainBlog;