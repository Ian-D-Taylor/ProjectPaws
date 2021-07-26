import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className='postImage' src="https://www.weekendnotes.com/im/005/07/dogfriendly-state-forests-and-parks-in-queensland-1.jpeg" alt="" />
            <img src=".src/images/20201011_102017.jpg" alt="" />
            
            <div className="postInfo">
                <div className="postCats">
                    <span className='postCat'>Puppies</span>

                </div>
                    <span className='postTitle'>The reason we get up in the morning</span>
                    <span className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum, modi corporis iste ipsa facilis dolorem eligendi tempore ex odit magni, optio recusandae quia 
                    temporibus fugiat amet neque, sint quidem in.</span>
                <hr />
                    <span className="postDate">Posted Today</span>
            </div>
        </div>
    )
}