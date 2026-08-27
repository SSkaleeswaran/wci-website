import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const banners = [
  {
    id: 1,
    video: "/videos/university-zoomout.mp4",
    title: "Explore Your Future Beyond Borders.",
    description:
      "Discover the right countries, opportunities and pathways for your international journey.",
  },
  {
    id: 2,
    video: "/videos/plane-flying2.mp4",
    title: "Your Journey Starts With the Right Destination.",
    description:
      "Explore global destinations and get professional guidance for your visa and immigration needs.",
  },
  {
    id: 3,
    video: "/videos/university-top.mp4",
    title: "Build Your Future in Another Country.",
    description:
      "Get personalized guidance to make your international education, career and immigration journey easier.",
  },
  {
    id: 4,
    video: "/videos/plane-flying.mp4",
    title: "Make Your International Dreams Possible.",
    description:
      "From choosing the right destination to completing your visa process, we guide you at every step.",
  },
  {
    id: 5,
    video: "/videos/group-hyfy.mp4",
    title: "Your Global Journey Starts Here.",
    description:
      "Take the next step toward your study, work, travel or immigration goals with expert guidance.",
  },
];

const PLAYBACK_RATE = 5;

function PromoBanner() {
  // Two "tracks" (video elements) that alternate as active/preloading.
  const [tracks, setTracks] = useState([
    { key: "A", bannerIndex: 0 },
    { key: "B", bannerIndex: 1 % banners.length },
  ]);
  const [activeKey, setActiveKey] = useState("A");
  const [isVisible, setIsVisible] = useState(true);

  const nextIndexRef = useRef(2 % banners.length);
  const videoRefs = useRef({ A: null, B: null });
  const sectionRef = useRef(null);

  const activeTrack = tracks.find((t) => t.key === activeKey);
  const currentSlide = activeTrack.bannerIndex;
  const activeBanner = banners[currentSlide];

  // Pause everything when the banner scrolls off-screen — saves CPU/bandwidth.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Drive play/pause based on which track is active + visibility.
  useEffect(() => {
    tracks.forEach((track) => {
      const video = videoRefs.current[track.key];
      if (!video) return;

      if (track.key === activeKey && isVisible) {
        video.playbackRate = PLAYBACK_RATE;
        if (video.currentTime !== 0) video.currentTime = 0;
        video.play().catch(() => {});
      } else if (track.key === activeKey && !isVisible) {
        video.pause();
      } else {
        // Inactive track: let it preload/buffer quietly, but don't play yet.
        video.pause();
      }
    });
  }, [activeKey, isVisible, tracks]);

  const advanceTrack = useCallback((finishedKey) => {
    setTracks((prev) => {
      const upcoming = nextIndexRef.current;
      nextIndexRef.current = (upcoming + 1) % banners.length;
      return prev.map((t) =>
        t.key === finishedKey ? { ...t, bannerIndex: upcoming } : t
      );
    });
    setActiveKey((prevKey) => (prevKey === "A" ? "B" : "A"));
  }, []);

  const handleEnded = (trackKey) => () => {
    if (trackKey !== activeKey) return; // ignore stray events from the hidden track
    advanceTrack(trackKey);
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    const inactiveKey = activeKey === "A" ? "B" : "A";
    nextIndexRef.current = (index + 1) % banners.length;
    setTracks((prev) =>
      prev.map((t) => (t.key === activeKey ? { ...t, bannerIndex: index } : t))
    );
    // give the (soon-to-be) inactive track something sane queued up next time
    setTracks((prev) =>
      prev.map((t) => (t.key === inactiveKey ? { ...t, bannerIndex: nextIndexRef.current } : t))
    );
  };

  return (
    <section className="promo-banner" ref={sectionRef}>
      {tracks.map((track) => {
        const banner = banners[track.bannerIndex];
        const isActive = track.key === activeKey;
        return (
          <video
            key={track.key}
            ref={(el) => (videoRefs.current[track.key] = el)}
            className={`promo-video ${isActive ? "promo-video-active" : ""}`}
            src={banner.video}
            muted
            playsInline
            preload="auto"
            onEnded={handleEnded(track.key)}
          />
        );
      })}

      <div className="promo-video-overlay"></div>

      <div className="container promo-container">
        <div className="promo-content">
          <span className="promo-company-name">WELL CAREER IMMIGRATION</span>

          <div className="promo-slide-content" key={activeBanner.id}>
            <h1>{activeBanner.title}</h1>
            <p>{activeBanner.description}</p>

            <div className="promo-actions">
              <Link to="/countries" className="promo-button promo-button-primary">
                Countries <span>→</span>
              </Link>
              <Link to="/contact" className="promo-button promo-button-secondary">
                Contact Us <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="promo-controls">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              className={index === currentSlide ? "active" : ""}
              onClick={() => goToSlide(index)}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;