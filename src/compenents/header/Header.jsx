import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitle">
                <span className='headerTitleLarge'>Project Paw</span>
                <span className='headerTitleSmall'>Melbourne</span>
            </div>
            <img 
            className='headerImg' 
                src="https://www.weekendnotes.com/im/005/07/dogfriendly-state-forests-and-parks-in-queensland-1.jpeg"
            alt="" />
        </div>
    )
    
}