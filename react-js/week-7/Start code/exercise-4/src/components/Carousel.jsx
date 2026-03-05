import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [curImageIndex, setCurImageIndex] = React.useState(0);

  /* You will need to hanle the click on left and right button */
  const handleLeftClick = () => {
    if (curImageIndex > 0) {
      setCurImageIndex(curImageIndex - 1);
    }
  }

  const handleRightClick = () => {
    if (curImageIndex < images.length - 1) {
      setCurImageIndex(curImageIndex + 1);
    }
  }

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeftClick} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[curImageIndex].src} alt={images[curImageIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRightClick} />
    </div>
  );
};
