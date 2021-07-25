import './home.css'
import Header from '../../compenents/header/Header'
import SideBar from '../../compenents/sidebar/SideBar'
import Posts from '../../compenents/posts/Posts'


export default function Home() {
    return (
        <>
                <Header />
            <div className='home'>
                <Posts />
                <SideBar />
            </div>
        </>
    )
}