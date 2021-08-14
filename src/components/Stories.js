import React from 'react'
import './Stories.css'
import Story1 from '../static/user1.jpg'
import Story2 from '../static/user2.png'
const Stories = () => {
    return (
        <>
            <div className="stories">
                <h1>User Stories</h1>
                <div className="storycard">
                    <div className="infoflex">
                        <div className="imog">
                            <img src={Story1} alt="" />
                        </div>
                        <div className="info">
                        <h3>Inesh Tickoo</h3>
                        <h5>Vice President, CORE</h5>
                        </div>
                    </div>
                    <div className="explain">
                        <p>Usually I like to forget stuff like a cool person, but I didn’t wanna forget anything important about Arlo, so after Amy (senior queen, organisation lover) told me about this website, I had to try it and honestly it was a great decision because anything related to Arlo is always present at just a touch, and the website and app is hella user friendly. <br />10/10 would recommend.</p>
                    </div>
                </div>
                <div className="storycard">
                    <div className="infoflex">
                        <div className="imog">
                            <img src={Story2} alt="" />
                        </div>
                        <div className="info">
                        <h3>Hitarth Tickoo</h3>
                        <h5>President, CORE</h5>
                        </div>
                    </div>
                    <div className="explain">
                        <p>When Ro Ro (Rosa) recommended this website and app  in the office text chain, I immediately knew that I had to try it and god bless Ro Ro, because this website is amazing ! It helps me keep track of both my dogs (Cheddar’s puppies) and I just love its design! Right after that i texted how great this app was in the office text chain and because i overtexted... I was removed from the office text chain. But still the app is great though.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stories
