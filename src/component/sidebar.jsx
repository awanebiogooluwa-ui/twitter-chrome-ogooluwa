import "./sidebar.css";
import{
    Rssfed,
    chat,
    PlayCircleFilledOutlined,
       Group,
       Bookmark,
     HelpOutline,
     WorkOutline,
     Event,
     school,

}  from "@material-ui/icons" ;
import{users} from  "../..dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
export default function  sidebar(){
    return(
    < div  className="sidebar">
        < div className="siderbarList">
           <ul  className="sidebarList">
              <li  className="sidebarListItem">
                 <RssFeed className="Iconsidebar"/>
                 <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
           < chat className="sidebarIcon"/>
           <span  className="sidebarListItemText">chats</span>
                 </li>
                 <li className="sidebarListText">
                    <PlayCircleFilledOutlined className="sidebarIcon"/>
                    <Group className="sidebarIcon"/>
                    <span  className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="siderbarListItem">
                        <Bookmark  className="siderbarIcon"/>
                        <span  className="sidebarListItemText">Bookmarks</span>
                        
                        </li>
                        <li className="sidebarListItem">
<WorkOutline className="sidebarIcon"/>
<span className="sideListItemText">Events</span>

                        </li>

                        <li  className="sidebarListItem">
                            <school className="sidebarIcon"/>
                            <span className="sidebarListItemText">Courses</span>
                        </li>
           </ul>
           <button className="sidebarButton">Shiw more</button>
           <hr    className="sidebarHr"/>
           <ul className="sidebarFriendList">
            
                {users.map((u)=> (
                    <CloseFriend key ={u.id} user ={u}/>
                ))}
            
            
           </ul>
    </div>
    </div>
)
}

