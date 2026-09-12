import  "./profile.css";
import Sidebar from "../../component/sidebar/Sidebar";
import  Topbar from"../../component/topbar/Topbar";
import  feed  from "../../component/feed/Feed";
import   Rightbar from"../../component/rightbar/Rightbar";

export default function profile() {

    return(
        <>
        <Topbar/>
           <div className="profile">
          <sidebar/>
         <div className="profileRight">
         <div className="profileRightTop">
         < className="profileCover">
         <img className="profileCover">
         <img
         className="profileCloseImg"
         src="assets/person/7.jpeg"
         alt=""
         />
         </div>
         < className="profileInfo">
         <h4   className ="profileInfoName">jane Doe</h4>
         <div span className="profileRightBottom">
         <feed/>
         <Rightbar profile/>
         </div>
         </div>
         </div>
         </>
    );
}
        
         
        
        
    
