import { useRef, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  //   const handlePlay = () => {
  //     videoRef.current.play();
  //     setIsPlaying(true);
  //   };

  const handlePlay = () => {

    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Play failed:", err);
        });
    } else {
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="hero-avatar"
      style={{ position: "relative", overflow: "hidden", padding: 0 }}
    >
      <video
        ref={videoRef}
        src="/intro1.mp4"
        poster="/introthumbnail.png"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        playsInline
        onEnded={handlePause}
        onPause={handlePause}
      />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          aria-label="Play introduction video"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.25)",
            border: "none",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          <span
            style={{
              width: "20%",
              minWidth: 48,
              maxWidth: 80,
              aspectRatio: "1/1",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, var(--accent-1, #6366f1), var(--accent-2, #818cf8))",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            <svg width="40%" height="40%" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
