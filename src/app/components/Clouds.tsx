import React from "react";

const Clouds = () => {
  return (
    <div style={styles.cloudContainer}>
      <img src="/cloud.png" alt="Cloud" style={styles.cloud1} />
      <img src="/cloud.png" alt="Cloud" style={styles.cloud2} />
      <img src="/cloud.png" alt="Cloud" style={styles.cloud3} />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  cloudContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 0,
  },
  cloud1: {
    position: "absolute",
    top: "10%",
    left: "90%",
    width: "300px",
    opacity: 0.7,
    animation: "float 25s linear infinite",
  },
  cloud2: {
    position: "absolute",
    top: "40%",
    left: "-5%",
    width: "400px",
    opacity: 0.5,
    animation: "float 30s linear infinite",
  },
  cloud3: {
    position: "absolute",
    top: "70%",
    left: "65%",
    width: "350px",
    opacity: 0.6,
    animation: "float 20s linear infinite",
  },
};

export default Clouds;
