import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import reviews from "./data";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = reviews[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return reviews.length - 1;
    }
    if (index > reviews.length - 1) {
      return 0;
    }
    return index;
  };

  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextReview = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkIndex(randomIndex));
  };

  return (
    <div className="review-container">
      <div className="img-container">
        <img src={image} alt="person-pic" />
      </div>

      <h2 className="font-bold author">{name}</h2>
      <p className="job">{job}</p>
      <div className="quote">
        <span className="quote-icon quote-left">
          <FaQuoteLeft />
        </span>
        <span className="quote-icon quote-right">
          <FaQuoteRight />
        </span>
        <p className="text">{text}</p>
      </div>
      <div className="buttons-container">
        <button className="btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        Suprise me
      </button>
    </div>
  );
}
