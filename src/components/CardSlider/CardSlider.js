import React, {Component} from 'react';
import SingleCard from "./components/SingleCard";
import '../../css/card_slider.scss'

const sliderStep = 320;

class CardSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: 0,
      touchStartX: 0,
      originalOffset: 0,
      beingTouched: false
    };

    this.sliderWrapperRef = React.createRef();
  }

  handleMouseDown(mouseDownEvent) {
    mouseDownEvent.preventDefault();
    this.handleStart(mouseDownEvent.clientX);
  }

  handleMouseMove(mouseMoveEvent) {
    this.handleMove(mouseMoveEvent.clientX);
  }

  handleTouchStart(touchStartEvent) {
    this.handleStart(touchStartEvent.targetTouches[0].clientX);
  }

  handleTouchMove(touchMoveEvent) {
    this.handleMove(touchMoveEvent.targetTouches[0].clientX);
  }

  handleStart(clientX) {
    this.setState({
      originalOffset: this.state.left,
      touchStartX: clientX,
      beingTouched: true,
    });
  }

  handleMove(clientX) {
    if (this.state.beingTouched) {
      const rightEdge = this.sliderWrapperRef.current.offsetWidth - this.sliderWrapperRef.current.scrollWidth;
      const leftEdge = 0;
      let deltaX = clientX - this.state.touchStartX + this.state.originalOffset;
      //handle max and min scroll as to edges
      deltaX = Math.max(rightEdge, Math.min(deltaX, leftEdge));

      this.setState({
        left: deltaX,
      });
    }
  }

  handleEnd() {
    this.setState({
      beingTouched: false,
    });
  }

  handlePrev() {
    const rightEdge = this.sliderWrapperRef.current.offsetWidth - this.sliderWrapperRef.current.scrollWidth;

    if (this.state.left >= 0) {
      this.setState({
        left: rightEdge,
      });
    } else if (this.state.left >= -sliderStep) {
      this.setState({
        left: 0,
      });
    } else {
      this.setState({
        left: this.state.left + sliderStep,
      });
    }
  }

  handleNext() {
    const rightEdge = this.sliderWrapperRef.current.offsetWidth - this.sliderWrapperRef.current.scrollWidth;
    if (this.state.left <= rightEdge) {
      this.setState({
        left: 0,
      });
    } else if (this.state.left <= rightEdge + sliderStep) {
      this.setState({
        left: rightEdge,
      });
    } else {
      this.setState({
        left: this.state.left - sliderStep,
      });
    }
  }

  render() {
    const {left, beingTouched} = this.state;

    // generate random images
    const randomImages = [];
    for (let i = 0; i < 20; i++) {
      randomImages.push(i);
    }

    return (
      <div className={'card_slider_wrapper'}>
        <div onClick={() => this.handlePrev()} className="card_slider_controls __left"/>
        <div
          onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
          onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => this.handleEnd()}
          onMouseDown={mouseDownEvent => this.handleMouseDown(mouseDownEvent)}
          onMouseMove={mouseMoveEvent => this.handleMouseMove(mouseMoveEvent)}
          onMouseUp={() => this.handleEnd()}
          className={'card_slider_component'}
        >
          <div
            ref={this.sliderWrapperRef}
            style={{transform: 'translateX(' + left + 'px)'}}
            className={`card_wrapper ${beingTouched ? "__no_transition" : ''}`}
          >
            {randomImages.map(e => (
                <SingleCard key={e} imgId={e}/>
              )
            )}
          </div>
        </div>
        <div onClick={() => this.handleNext()} className="card_slider_controls __right"/>
      </div>
    );
  }
}

export default CardSlider;