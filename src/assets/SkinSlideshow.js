import React from 'react'; 
import Carousel from "react-bootstrap/Carousel";

class SkinSlideshow extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      images: [
        "https://www.smashbros.com/assets_v2/img/fighter/" + this.props.image + "/main.png",
        "https://www.smashbros.com/assets_v2/img/fighter/" + this.props.image + "/main2.png",
        "https://www.smashbros.com/assets_v2/img/fighter/" + this.props.image + "/main3.png",
        "https://www.smashbros.com/assets_v2/img/fighter/" + this.props.image + "/main4.png",
        "https://www.smashbros.com/assets_v2/img/fighter/" + this.props.image + "/main5.png",
        "https://www.smashbros.com/assets_v2/img/fighter/" + this.props.image + "/main6.png",
        "https://www.smashbros.com/assets_v2/img/fighter/" + this.props.image + "/main7.png",
        "https://www.smashbros.com/assets_v2/img/fighter/" + this.props.image + "/main8.png",
      ],
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        fade={true}
        controls={true}
        indicators={false}
        slide={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.images[0]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.images[1]}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.images[2]}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.images[3]}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.images[4]}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.images[5]}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.images[6]}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.images[7]}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default SkinSlideshow;