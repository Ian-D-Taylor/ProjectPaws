import './sidebar.css'




export default function SideBar() {
    return(
    <div className='sidebar'>
        <div className="sideBarItem">
            <span className='sideBarTitle'>ABOUT US</span>
                <img src="../public/images/MaeSidebar.jpg" alt="" />
            <hr />
            <p>we are an eco friendly and austrlian made fashion accesories brand for your fur-babies

            </p>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                    <i className="sidebarIcon fas fa-paw"></i>
            </div>
        </div>
    </div>
    
    )
}