import React from "react";

// Mock data array of webinars
const webinars = [
  {
    id: 1,
    title: "Caring for Your Newborn: The First 30 Days",
    speaker: "Dr. Sumitra Meena",
    date: "2025-06-10",
  },
  {
    id: 2,
    title: "Feeding Fundamentals: Best Practices for Babies",
    speaker: "Dr. Rohan Patel",
    date: "2025-06-15",
  },
  {
    id: 3,
    title: "Sleep Tips for Tired Parents",
    speaker: "Dr. Priya Sharma",
    date: "2025-06-20",
  },
];

const WebinarCard: React.FC<{
  id: number;
  title: string;
  speaker: string;
  date: string;
}> = ({ id, title, speaker, date }) => (
  <div
    style={{
      border: "1px solid #eee",
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "18px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      backgroundColor: "#fff",
      maxWidth: "420px",
    }}
  >
    <h2 style={{ margin: "0 0 10px 0", fontSize: "1.3rem" }}>{title}</h2>
    <div style={{ marginBottom: "6px", color: "#888" }}>
      <strong>Speaker:</strong> {speaker}
    </div>
    <div style={{ marginBottom: "12px", color: "#888" }}>
      <strong>Date:</strong> {new Date(date).toLocaleDateString()}
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

const WebinarsPage: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "40px 16px",
        background: "#f7fafc",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "28px", fontSize: "2rem", color: "#222" }}>
        Upcoming Live Webinars
      </h1>
      {webinars.map((webinar) => (
        <WebinarCard key={webinar.id} {...webinar} />
      ))}
    </div>
  );
};

export default WebinarsPage;
