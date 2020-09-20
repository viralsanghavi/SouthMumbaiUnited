import React from 'react'
import './Slideshow.css'
import HoverVideoPlayer from 'react-hover-video-player';


const SlideItem = ({ className, team, year, src }) => (
    <div className={className}>
        <div className='Content'>
            <div>
                <h2>{team} <br />{year}</h2>
            </div>
        </div>
        <div className="ImageContent">
            <img alt="" src={src} />
        </div>
    </div>
)

const Slideshow = () => {
    // for (let index = 1; index < 5; index++) {
    //     setTimeout(() => {
    //         document.getElementById(`r${index}`).checked = true
    //     }, index * 3000)
    // }
    return (



        <div className='slideshow'>

            <input type="radio" name="r" id='r1' defaultChecked />
            <input type="radio" name="r" id='r2' />
            <input type="radio" name="r" id='r3' />
            <input type="radio" name="r" id='r4' />

            <div className='Slider'>
                <SlideItem src={require("../../assets/BoysTeam.jpg")} className="slide One" team="Boys Team" year="FY 2019-2020" />
                <SlideItem src={require("../../assets/GirlsTeam.jpg")} className="slide Two" team="Girls Team" year="FY 2019-2020" />
                <SlideItem src={require("../../assets/CoachesTeam.jpg")} className="slide Three" team="Staff" />

                <div className='slide Foor'>
                    <div className='Content'>
                        <div>
                            <h2>Boys Team Promoted to 2nd Division</h2>
                        </div>
                    </div>
                    <div className="ImageContent">
                        <HoverVideoPlayer
                            style={{ zIndex: 0, }}
                            className="hoverPlayer"
                            videoSrc={require('../../assets/final.mp4')}
                            muted={false}

                            restartOnPaused={false}
                            pausedOverlay={
                                <img src={'https://i.ytimg.com/vi/jOX-nbRy9kA/sddefault.jpg '} alt=""
                                    style={{
                                        // Make the image expand to cover the video's dimensions
                                        width: "100%",
                                        height: "100%",
                                    }} />
                            }
                            loadingOverlay={
                                <div className="loading-spinner-overlay" />
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="Navigation">
                <label htmlFor='r1'><span></span></label>
                <label htmlFor='r2'><span></span></label>
                <label htmlFor='r3'><span></span></label>
                <label htmlFor='r4'><span></span></label>
            </div>
        </div>


    )
}

export default Slideshow
