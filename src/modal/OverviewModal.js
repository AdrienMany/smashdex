import React from "react";
import { Fade } from 'react-slideshow-image';
import SkinSlideshow from '../assets/SkinSlideshow';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const fadeImages = [
  'src/assets/smash-ultimate-assets-master/renders/fighters/01/01.png',
  'images/slide_6.jpg',
  'images/slide_7.jpg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true
}
 
const data = [
  {
    data: {
      strength: 0.7,
      speed: .8,
      air: 0.9,
      recovery: 0.67,
      weight: 0.8
    },
    meta: { color: 'blue' }
  }
];

const captions = {
  // columns
  strength: 'Strength',
  speed: 'Speed',
  air: 'Air power',
  recovery: 'Recovery ',
  weight: 'Weight'
};

class OverviewModal extends React.Component {

  changeAlt() {
    console.log('toto');
  }

  render() {

    return (
      <div className="row">
        <div className="col-5">
          <SkinSlideshow image={this.props.image} />
        </div>
        <div className="col-7 text-center">
          <RadarChart
            captions={captions}
            data={data}
            size={300}
            className="w-100"
          />
          <div className="font-weight-bold text-center border mt-2 py-2">
            RUSHDOWN / ZONER
          </div>
        </div>
      </div>
    )
  }
}

export default OverviewModal;
