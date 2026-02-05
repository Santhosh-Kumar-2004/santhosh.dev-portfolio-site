import "../styles/Background.css";

export default function Background() {
  return (
    <div className="app-background">
      {/* The base architectural grid */}
      <div className="grid-layer" />
      
      {/* Subtle vignettes to focus the eye on the center */}
      <div className="vignette-overlay" />

      {/* Vertical neon "data" flows */}
      <div className="neon-line-container">
        <div className="neon-line vertical v1" />
        <div className="neon-line vertical v2" />
        <div className="neon-line vertical v3" />
        <div className="neon-line vertical v4" />
      </div>

      {/* Horizontal neon "data" flows */}
      <div className="neon-line-container">
        <div className="neon-line horizontal h1" />
        <div className="neon-line horizontal h2" />
        <div className="neon-line horizontal h3" />
      </div>
      
      {/* Pulsing ambient orbs for depth */}
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
    </div>
  );
}