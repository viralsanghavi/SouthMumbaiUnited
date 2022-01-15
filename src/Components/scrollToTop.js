import React from "react";
class ScrollToTopButton extends React.Component {
  handleOnClickScrollUp = (event, scrollDuration) => {
    event.preventDefault();
    let scrollValue = -window.scrollY / (scrollDuration / 20),
      scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollValue);
        } else clearInterval(scrollInterval);
      }, 15);
  };

  render() {
    return;
    <div></div>;
    // <div className='scroll-to-top' onClick={event => this.handleOnClickScrollUp(event, 1000)}><FontAwesomeIcon icon={faAngleDoubleUp} className="S2top"/></div>
  }
}

export default ScrollToTopButton;
