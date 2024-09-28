import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FaqComponent.css";

const faqData = [
  {
    key: "1",
    question: "Q1- How can I place an order online?",
    answer: "You can place an order through our website by selecting the 'Order Now' button from the navigation bar. Choose either Book A Table, Pick Up, or Delivery, and follow the steps.",
  },
  {
    key: "2",
    question: "Q2 - Do you offer vegan or gluten-free options?",
    answer: "Yes, we offer a variety of Vegan and Gluten-Free options. You can find these under the special diets section of our menu.",
  },
  {
    key: "3",
    question: "Q3 - What are your delivery hours?",
    answer: "We offer delivery during our regular business hours. Please refer to the 'Opening Hours' section for specific times.",
  },
  {
    key: "4",
    question: "Q4 - Is there a discount for pick-up orders?",
    answer: "Yes, we offer a 10% discount for pick-up orders. You can find this option in the 'Pick Up' section of our menu.",
  },
  {
    key: "5",
    question: "Q5 - Can I make a reservation online?",
    answer: "Yes, you can book a table online through our website. Just click on 'Book A Table' from the navigation bar and follow the instructions.",
  },
  {
    key: "6",
    question: "Q6 - How do I know if my booking is confirmed?",
    answer: "Once your booking is confirmed, you will receive a notification in the app or via email with confirmation details.",
  },
  {
    key: "7",
    question: "Q7 - Do you have outdoor seating?",
    answer: "Yes, we have outdoor seating available. Please make sure to mention this preference while booking a table.",
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
