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
      style={{
        padding: "8px 18px",
        backgroundColor: "#0095f6",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: 600,
      }}
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
        <div className="webinar-cards-row">
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
        }
        .webinars-container {
          max-width: 900px;
          margin: 40px auto;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 24px;
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);
          padding: 40px 32px;
        }
        .webinars-heading {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          letter-spacing: 0.02em;
          color: #1a237e;
          font-family: "Segoe UI", "Inter", Arial, sans-serif;
        }
        .webinar-cards-row {
          display: flex;
          flex-direction: row;
          gap: 15px;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: thin;
        }
        .webinar-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(26, 35, 126, 0.08);
          padding: 28px 20px 20px 20px;
          min-width: 320px;
          max-width: 320px;
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          border: 1.5px solid #ececec;
          color: #000; /* Ensures all text is black */
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
          box-shadow: 0 1px 6px rgba(26, 35, 126, 0.14);
        }
        .webinar-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #000;
        }
        .webinar-meta {
          font-size: 0.98rem;
          color: #000;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .view-details-btn {
          margin-top: 24px;
          align-self: flex-end;
          padding: 9px 22px;
          background: linear-gradient(90deg, #1976d2 60%, #42a5f5 100%);
          color: #fff;
          font-weight: 500;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.18s, box-shadow 0.18s;
          box-shadow: 0 2px 8px rgba(66, 165, 245, 0.09);
        }
        .view-details-btn:hover {
          background: linear-gradient(90deg, #1565c0 60%, #1976d2 100%);
        }
      `}</style>
    </div>
  );
}
