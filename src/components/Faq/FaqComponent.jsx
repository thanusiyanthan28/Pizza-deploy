import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FaqComponent.css";

const faqData = [
  {
    key: "1",
    question: "Q1- How can I place an order online?",
    answer: "FREE wireless internet is available throughout.",
  },
  {
    key: "2",
    question: "Q2 - Do you offer vegan or gluten-free options?",
    answer: "The Check-in at Bridge Park Hotel is from 14:00 and Check-out is until 11:00.",
  },
  {
    key: "3",
    question: "Q3 - What are your delivery hours?",
    answer: "Please visit our location page to get directions to the property.",
  },
  {
    key: "4",
    question: "Q4 - Is there a discount for pick-up orders?",
    answer: "There is FREE parking at The Bridge Park Hotel.",
  },
  {
    key: "5",
    question: "Q5 - Can I make a reservation online?",
    answer: "At Bridge Park Hotel, we offer Room Only options or Continental Breakfast options, or once you check in you can request to pay extra for a cooked breakfast.",
  },
  {
    key: "6",
    question: "Q6 - How do I know if my booking is confirmed?",
    answer: "You will receive a confirmation email upon booking.",
  },
];

const FaqComponent = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const handleViewDetails = (key) => {
    navigate(`/faq/${key}`, { state: { from: 'faq' } });
  };

  return (
    <div className="faq-container">
      <div className="faq-row">
      </div>
      <div className="faq-content">
        {faqData.map(({ key, question, answer }) => (
          <div key={key} className="faq-panel" style={{ maxHeight: activeKey === key ? '300px' : '200px' }}>
            <div className="faq-header" onClick={() => handleToggle(key)}>
              <h2>{question}</h2>
              <span className="faq-icon">{activeKey === key ? '-' : '+'}</span>
            </div>
            {activeKey === key && (
              <div className="faq-answer">
                <p>
                  {answer}{" "}
                  <button
                    className="faq-view-full-text"
                    onClick={() => handleViewDetails(key)}
                  >
                    View full details
                  </button>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
