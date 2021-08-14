import React from 'react'
import '../css/Community.css'
import Profile from '../../static/robert.jpg'
import Sidebar from '../../components/Sidebar/Sidebar'
const Community = () => {
    return (
        <>
            <Sidebar/>
            <div className="community">
                <h1>Community</h1>
                <p>Chat with fellow pet parents and animal lovers</p>
                <div className="searchflex">
                <span><i class="fa fa-search fa-2x"></i></span><input type="text" placeholder="Search"/>
                </div>
                <div className="community_cards">
                    <div className="photo">
                    <img src={Profile} alt="hmmmm" /><h5 className="names">Peter Parker</h5><h6 className="boys">20 hours ago</h6><i class="fas fa-share-alt fa-2x"></i>
                    </div>
                        <div className="description">
                    <p>Cheddar ingested the infintiy stones once during the heist, Kevin was so mad at me, but I told him that it was for the heist! Sometimes it’s like he doesn’t even understand me!
                        </p>
                        <p>Sincerely,
Capt. Raymond Holt</p>

                    </div>
                    <div className="likes">
                        <span><i class="fas fa-comment"></i></span><span>Comment</span>
                        <span><i class="fas fa-thumbs-up"></i></span><span>Likes</span>
                        <span><i class="far fa-bookmark"></i></span><span>Save</span>
                    </div>
                </div>
                 <div className="community_cards">
                    <div className="photo">
                    <img src={Profile} alt="hmmmm" /><h5 className="names">Peter Parker</h5><h6 className="boys">20 hours ago</h6><i class="fas fa-share-alt fa-2x"></i>
                    </div>
                        <div className="description">
                    <p>Gloria gets so mad at me when I let Stella sleep on the bed, it’s like she doesn’t even love her!</p>

                    </div>
                    <div className="likes">
                        <span><i class="fas fa-comment"></i></span><span>Comment</span>
                        <span><i class="fas fa-thumbs-up"></i></span><span>Likes</span>
                        <span><i class="far fa-bookmark"></i></span><span>Save</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Community
