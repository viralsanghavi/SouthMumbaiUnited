import React, { useState } from 'react'
import './Slideshow.css'
import HoverVideoPlayer from 'react-hover-video-player';


const SlideItem = ({ className, team, imgon, year, src }) => (
    <div className={className}>
        <div className='Content'>
            <div>
                <h2>{team} <br />{year}</h2>
            </div>
        </div>
        <div className="ImageContent">
            <img alt="" src={src} onMouseEnter={() => imgon(false)}
                onMouseLeave={() => imgon(true)} />
        </div>
    </div>
)

const Slideshow = () => {
    const [isShown, setIsShown] = useState(true);
    // useEffect(() => {
    //     let interval;
    //     var num = 0

    //     if (isShown) {
    //         interval = window.setInterval(function () {
    //             // increase by num 1, reset to 0 at 4
    //             num = (num + 1) % 4;
    //             document.getElementById(`r${num + 1}`).checked = true


    //             // -600 * 1 = -600, -600 * 2 = -1200, etc 
    //             // style.marginLeft = (-600 * num) + "px";
    //         }, 3000) // repeat forever, polling every 3 seconds
    //     }

    //     return () => clearInterval(interval)

    // }, [isShown])
    console.log(isShown);

    return (



        <div className='slideshow'>

            <input type="radio" className="sliderNudge" name="r" id='r1' defaultChecked />
            <input type="radio" className="sliderNudge" name="r" id='r2' />
            <input type="radio" className="sliderNudge" name="r" id='r3' />
            <input type="radio" className="sliderNudge" name="r" id='r4' />

            <div className='Slider'>
                <SlideItem src={require("../../assets/BoysTeam.jpg")} imgon={setIsShown} className="slide One" team="Boys Team" year="FY 2019-2020" />
                <SlideItem src={require("../../assets/GirlsTeam.jpg")} imgon={setIsShown} className="slide Two" team="Girls Team" year="FY 2019-2020" />
                <SlideItem src={require("../../assets/CoachesTeam.jpg")} imgon={setIsShown} className="slide Three" team="Staff" />

                <div className='slide Foor'>
                    <div className='Content'>
                        <div>
                            <h2>Boys Team Promoted to 2nd Division</h2>
                            <h5>Congratulations on the promotion to 2nd division.</h5>
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
