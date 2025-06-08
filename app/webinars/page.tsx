"use client";

import React from "react";

const webinars = [
  {
    id: 1,
    title: "Caring for Your Newborn: The First 30 Days",
    speaker: "Dr. Sumitra Meena",
    date: "6/10/2025",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    title: "Feeding Fundamentals: Best Practices for Babies",
    speaker: "Dr. Rohan Patel",
    date: "6/15/2025",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    title: "Understanding Infant Sleep Patterns",
    speaker: "Dr. Neha Sharma",
    date: "6/20/2025",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    title: "Early Signs of Developmental Milestones",
    speaker: "Dr. Karan Verma",
    date: "6/25/2025",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const WebinarCard: React.FC<(typeof webinars)[0]> = ({
  id,
  title,
  speaker,
  date,
  avatar,
}) => (
  <div className="webinar-card">
    <div className="webinar-card-header">
      <img src={avatar} alt={speaker} className="avatar" />
      <div>
        <h2 className="webinar-title">{title}</h2>
        <div className="webinar-meta">
          <span>
            <strong>Speaker:</strong> {speaker}
          </span>
          <span>
            <strong>Date:</strong> {date}
          </span>
        </div>
      </div>
    </div>
    <button
      className="view-details-btn"
      onClick={() => {
        console.log(`Viewing details for webinar ID: ${id}`);
      }}
    >
      View Details
    </button>
  </div>
);

export default function WebinarsPage() {
  return (
    <div className="webinars-bg">
      <div className="webinars-container">
        <h1 className="webinars-heading">🎥 Upcoming Live Webinars</h1>
        <div className="webinar-cards-scroll">
          {webinars.map((webinar) => (
            <WebinarCard key={webinar.id} {...webinar} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .webinars-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #f3f8ff 0%, #e8f0fe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 16px;
        }

        .webinars-container {
          width: 100%;
          max-width: 1200px;
          background: #ffffffee;
          border-radius: 24px;
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
          padding: 40px 24px;
        }

        .webinars-heading {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          letter-spacing: 0.02em;
          color: #1a237e;
          font-family: "Segoe UI", "Inter", Arial, sans-serif;
        }

        .webinar-cards-scroll {
          display: flex;
          flex-direction: row;
          gap: 20px;
          overflow-x: auto;
          padding-bottom: 10px;
          scrollbar-width: thin;
          -webkit-overflow-scrolling: touch;
        }

        .webinar-card {
          background: rgba(33, 150, 243, 0.85); /* Opaque blue */
          border: 2px solid #000;
          border-radius: 16px;
          padding: 24px 20px;
          min-width: 300px;
          max-width: 300px;
          flex: 0 0 auto;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #fff;
        }

        .webinar-card-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        }

        .webinar-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #fff;
        }

        .webinar-meta {
          font-size: 0.95rem;
          color: #f1f1f1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .view-details-btn {
          margin-top: 20px;
          align-self: flex-start;
          padding: 9px 20px;
          background: #000;
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.2s ease;
        }

        .view-details-btn:hover {
          background: #333;
        }
      `}</style>
    </div>
  );
}
