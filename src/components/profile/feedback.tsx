"use client";

import React, { useState } from "react";

const FeedbackForm = () => {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleRatingClick = (value: any) => {
    setRating(value);
  };

  const handleFeedbackChange = (e: any) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
  };

  return (
    <div className="w-full md:w-4/5 lg:3/5 mx-auto  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Rate your experience
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-4">
          <p className="mb-2">
            How likely are you to recommend our service to a friend or
            colleague?
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 mb-2 border">
            {/* <div className="flex justify-center gap-2 mb-2 border"> */}
            {[...Array(11).keys()].map((num) => (
              <button
                key={num}
                type="button"
                className={`w-10 h-10 border rounded-full flex items-center justify-center transition-colors ${
                  rating === num
                    ? "bg-blue-500 text-white"
                    : "border-blue-500 text-blue-500"
                }`}
                onClick={() => handleRatingClick(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="flex justify-between px-4 text-sm text-gray-600">
            <span>0 - Extremely Unlikely</span>
            <span>10 - Extremely Likely</span>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="feedback"
            className="block mb-2 font-medium text-gray-700"
          >
            What is the main reason for the score?
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Your feedback is valuable to us"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="text-center mt-4 text-sm text-gray-500">
        <p>
          Powered by{" "}
          <a href="https://usersnap.com" className="text-blue-500 underline">
            usersnap
          </a>
        </p>
      </div>
    </div>
  );
};

export default FeedbackForm;
