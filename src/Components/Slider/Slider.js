import "./Slider.css";
import SliderText from "./SliderText";
import SliderSlides from "./SliderSlides";
const Slider = () => {
  return (
    <div className="slider">
      <SliderText></SliderText>
      <SliderSlides></SliderSlides>
    </div>
  );
};

export default Slider;
