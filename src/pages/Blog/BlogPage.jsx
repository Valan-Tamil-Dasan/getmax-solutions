import pic1 from "./Assets/pic1.jpg"
import pic2 from "./Assets/pic2.avif"
import BlogCard from "./Components/BlogCard.jsx";
import MainBlog from "./Components/MainBlog.jsx";
import "./BlogPage.css"
import {NavBar} from '../../components'
import {Contact} from '../../containers'

function BlogPage() {
    return (<div >
    
        <div className="BlogMain">
        <NavBar/>

            <div className="Blogfirst">
                <p className="BlogThought">Cascade Of Thoughts</p><br/>
                <p className="BlogSubtitle">Branching into subtlety, a sub line emerged as a supplementary thread weaving through<br/>
                the main narrative, adding depth and nuance to the overarching story.</p>
            </div>
            <MainBlog
                month="Dec"
                day="01"
                year="2023"
                pic={pic1}
                heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <div className="BlogThird">
               <div className="BlogFRow">
                 <BlogCard
                    month="Dec"
                    day="01"
                    year="2023"
                    pic={pic2}
                    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    likes="300"
                    comments="30"
                    emoji="400"
                 />
                <BlogCard
                    month="Dec"
                    day="01"
                    year="2023"
                    pic={pic2}
                    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    likes="300"
                    comments="30"
                    emoji="400"
                 />
               </div>
               <div className="BlogSRow">
               <BlogCard
                    month="Dec"
                    day="01"
                    year="2023"
                    pic={pic2}
                    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    likes="300"
                    comments="30"
                    emoji="400"
                 />
                <BlogCard
                    month="Dec"
                    day="01"
                    year="2023"
                    pic={pic2}
                    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    likes="300"
                    comments="30"
                    emoji="400"
                 />
               </div>
            </div>
            <div className="BlogFourth"><button>Read More..</button></div>
            <hr/>
            <div className="BlogFifth">
                <div className="BlogMessage"><h1>Keep yourself up-to date</h1></div>
                <div className="BlogNewsletter"><input type="text" placeholder="Enter email*"></input><button>subscribe</button></div>
            </div>
        </div>
        <Contact/>
    </div>

    );
  }
  
  export default BlogPage;
  