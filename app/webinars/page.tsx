"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  PlayCircle,
  ChevronRight,
  Star,
  Users,
  Video,
  Eye,
} from "lucide-react";

const webinars = [
  {
    id: 1,
    title: "Caring for Your Newborn: The First 30 Days",
    speaker: "Dr. Sumitra Meena",
    date: "6/10/2025",
    time: "2:00 PM EST",
    duration: "45 mins",
    attendees: 1234,
    rating: 4.9,
    tags: ["Newborn Care", "First Month"],
    avatarColor: "#FF6B6B",
    featured: true,
  },
  {
    id: 2,
    title: "Feeding Fundamentals: Best Practices for Babies",
    speaker: "Dr. Rohan Patel",
    date: "6/15/2025",
    time: "1:30 PM EST",
    duration: "50 mins",
    attendees: 987,
    rating: 4.8,
    tags: ["Nutrition", "Feeding"],
    avatarColor: "#4ECDC4",
    featured: false,
  },
  {
    id: 3,
    title: "Understanding Infant Sleep Patterns",
    speaker: "Dr. Neha Sharma",
    date: "6/20/2025",
    time: "3:00 PM EST",
    duration: "40 mins",
    attendees: 1456,
    rating: 4.9,
    tags: ["Sleep", "Development"],
    avatarColor: "#45B7D1",
    featured: false,
  },
  {
    id: 4,
    title: "Early Signs of Developmental Milestones",
    speaker: "Dr. Karan Verma",
    date: "6/25/2025",
    time: "11:00 AM EST",
    duration: "55 mins",
    attendees: 2103,
    rating: 4.9,
    tags: ["Development", "Milestones"],
    avatarColor: "#96CEB4",
    featured: true,
  },
];

const WebinarCard = ({
  webinar,
  index,
}: {
  webinar: (typeof webinars)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewMore = () => {
    console.log(`Viewing details for webinar ID: ${webinar.id}`);
  };

  return (
    <div
      className={`webinar-card ${webinar.featured ? "featured" : ""}`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {webinar.featured && (
        <div className="featured-badge">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}

      <div className="card-header">
        <div className="speaker-info">
          <div className="avatar-container">
            <div
              className="avatar"
              style={{ backgroundColor: webinar.avatarColor }}
            >
              {webinar.speaker
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </div>
            <div className="avatar-ring"></div>
          </div>
          <div className="speaker-details">
            <h3 className="speaker-name">{webinar.speaker}</h3>
            <div className="rating">
              <Star className="w-3 h-3 fill-current text-amber-400" />
              <span>{webinar.rating}</span>
            </div>
          </div>
        </div>
        <Video className={`video-icon ${isHovered ? "hovered" : ""}`} />
      </div>

      <div className="card-content">
        <h2 className="webinar-title">{webinar.title}</h2>

        <div className="tags">
          {webinar.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="webinar-details">
          <div className="detail-item">
            <Calendar className="w-4 h-4" />
            <span>{webinar.date}</span>
          </div>
          <div className="detail-item">
            <Clock className="w-4 h-4" />
            <span>{webinar.time}</span>
          </div>
          <div className="detail-item">
            <Users className="w-4 h-4" />
            <span>{webinar.attendees.toLocaleString()} attending</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="button-group">
          <button className="register-btn">
            <PlayCircle className="w-4 h-4" />
            Register Now
            <ChevronRight
              className={`w-4 h-4 transition-transform ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </button>
          <button className="view-more-btn" onClick={handleViewMore}>
            <Eye className="w-4 h-4" />
            View More
          </button>
        </div>
        <span className="duration">{webinar.duration}</span>
      </div>
    </div>
  );
};

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow-x: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease-out;
        }

        .app-container.mounted {
          opacity: 1;
          transform: translateY(0);
        }

        /* Animated Background */
        .bg-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.05)
          );
          animation: float 20s infinite ease-in-out;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          top: 60%;
          right: -5%;
          animation-delay: 5s;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          top: 30%;
          right: 20%;
          animation-delay: 10s;
        }

        .shape-4 {
          width: 250px;
          height: 250px;
          bottom: 10%;
          left: 10%;
          animation-delay: 15s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
          }
          75% {
            transform: translateY(-20px) rotate(270deg);
          }
        }

        /* Header Section */
        .header-section {
          padding: 80px 24px 60px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .header-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 8px 16px;
          border-radius: 50px;
          color: white;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          animation: slideDown 0.8s ease-out 0.5s both;
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: white;
          margin-bottom: 24px;
          line-height: 1.1;
          animation: slideUp 0.8s ease-out 0.7s both;
        }

        .gradient-text {
          background: linear-gradient(45deg, #ffd89b, #19547b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 40px;
          line-height: 1.6;
          animation: slideUp 0.8s ease-out 0.9s both;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
          animation: slideUp 0.8s ease-out 1.1s both;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: white;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 4px;
        }

        /* Webinars Section */
        .webinars-section {
          padding: 40px 24px 80px;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
          animation: slideUp 0.8s ease-out 1.3s both;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .webinars-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
          padding: 0 16px;
        }

        /* Webinar Cards */
        .webinar-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          padding: 32px;
          position: relative;
          transform: translateY(20px);
          opacity: 0;
          animation: slideUpCard 0.6s ease-out forwards;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .webinar-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .webinar-card:hover::before {
          transform: scaleX(1);
        }

        .webinar-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .webinar-card.featured {
          background: linear-gradient(
            135deg,
            rgba(255, 215, 155, 0.95),
            rgba(255, 255, 255, 0.95)
          );
          border: 2px solid rgba(255, 215, 155, 0.5);
        }

        .featured-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: linear-gradient(45deg, #ffd89b, #19547b);
          color: white;
          padding: 6px 12px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .speaker-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar-container {
          position: relative;
        }

        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          color: white;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .avatar-ring {
          position: absolute;
          top: -3px;
          left: -3px;
          width: 66px;
          height: 66px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(45deg, #667eea, #764ba2);
          background-clip: padding-box;
          animation: rotate 3s linear infinite;
        }

        .speaker-details {
          flex: 1;
        }

        .speaker-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 4px;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .video-icon {
          width: 24px;
          height: 24px;
          color: #667eea;
          transition: all 0.3s ease;
        }

        .video-icon.hovered {
          color: #764ba2;
          transform: scale(1.1);
        }

        .card-content {
          margin-bottom: 32px;
        }

        .webinar-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .tags {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .tag {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .webinar-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #4a5568;
          font-size: 0.9rem;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .button-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .register-btn {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 14px 24px;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .register-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        .view-more-btn {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          border: 2px solid #667eea;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .view-more-btn:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);
        }

        .duration {
          color: #718096;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Animations */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpCard {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-section {
            padding: 60px 16px 40px;
          }

          .stats {
            gap: 32px;
          }

          .webinars-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 0 8px;
          }

          .webinar-card {
            padding: 24px;
          }

          .card-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .button-group {
            justify-content: center;
          }

          .register-btn,
          .view-more-btn {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>

      <div className={`app-container ${mounted ? "mounted" : ""}`}>
        {/* Animated Background */}
        <div className="bg-animation">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
          <div className="bg-shape shape-3"></div>
          <div className="bg-shape shape-4"></div>
        </div>

        {/* Header Section */}
        <div className="header-section">
          <div className="header-content">
            <div className="badge">
              <Video className="w-4 h-4" />
              Live Webinars
            </div>
            <h1 className="main-title">
              Expert-Led Baby Care
              <span className="gradient-text"> Webinars</span>
            </h1>
            <p className="subtitle">
              Join renowned pediatricians and child care experts for live,
              interactive sessions designed to support new parents on their
              journey.
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Parents Joined</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Average Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Expert Sessions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Webinars Grid */}
        <div className="webinars-section">
          <div className="section-header">
            <h2 className="section-title">Upcoming Sessions</h2>
            <p className="section-subtitle">
              Don't miss these expertly crafted sessions
            </p>
          </div>

          <div className="webinars-grid">
            {webinars.map((webinar, index) => (
              <WebinarCard key={webinar.id} webinar={webinar} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
