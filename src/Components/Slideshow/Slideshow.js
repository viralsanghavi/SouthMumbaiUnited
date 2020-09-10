import React from 'react'
import './Slideshow.css'
const Slideshow = () => {
    for (let index = 1; index < 5; index++) {
        setTimeout(() => {
            document.getElementById(`r${index}`).checked = true
        }, index * 3000)
    }
    return (



        <div className='slideshow'>

            <input type="radio" name="r" id='r1' defaultChecked />
            <input type="radio" name="r" id='r2' />
            <input type="radio" name="r" id='r3' />
            <input type="radio" name="r" id='r4' />

            <div className='Slider'>
                <div className='slide One'>
                    <div className='Content'>
                        <div>
                            <h2>This Is Title Section One</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="ImageContent">
                        <img alt="" src={require("../../assets/boyWhole.jpeg")} />
                    </div>
                </div>
                <div className='slide Two'>
                    <div className='Content'>
                        <div>
                            <h2>This Is Title Section Two</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="ImageContent">
                        <img alt="" src={require("../../assets/girlWhole.jpeg")} />
                    </div>
                </div>
                <div className='slide Three'>
                    <div className='Content'>
                        <div>
                            <h2>This Is Title Section Three</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="ImageContent">
                        <img alt="" src="https://3.bp.blogspot.com/-_HHywRbdSvs/XwygqxQom9I/AAAAAAAAAHI/wasuf6tD9FgfWAuqvLXh729-myCavjnCQCPcBGAYYCw/s1600/image11.jpg" />
                    </div>
                </div>
                <div className='slide Foor'>
                    <div className='Content'>
                        <div>
                            <h2>This Is Title Section Foor</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="ImageContent">
                        <img alt="" src="https://1.bp.blogspot.com/-Ra13YXIWa44/XxDC37uvHxI/AAAAAAAAAHc/-u3dbTuI_O871A0b0uK03bkVqkXAkf2EwCNcBGAsYHQ/s320/image04.jpg" />
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
