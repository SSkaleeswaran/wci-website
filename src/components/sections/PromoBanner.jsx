import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const banners = [
  { id: 1, video: "/videos/University-Zoomout.mp4", title: "Explore Your Future Beyond Borders." },
  { id: 2, video: "/videos/Nature-Village.mp4", title: "Your Journey Starts With the Right Destination." },
  { id: 3, video: "/videos/Building1.mp4", title: "Build Your Future in Another Country." },
  { id: 4, video: "/videos/Plane-Flying.mp4", title: "Make Your International Dreams Possible." },
  { id: 5, video: "/videos/University-Zoomout.mp4", title: "Explore Your Future Beyond Borders." },

  { id: 6, video: "/videos/University-Top.mp4", title: "Your Global Journey Starts Here." },
  { id: 7, video: "/videos/Group-Hyfy.mp4", title: "Make Your International Dreams Possible." },
];

const PLAYBACK_RATE = 4;
// One branded fallback image, shown behind the video during any load gap
const FALLBACK_BG = "/images/company-img/visa-1.jpg";

function PromoBanner() {
  const videoRefs = [useRef(null), useRef(null)];
  const slotBannerIndex = useRef([0, 1 % banners.length]);
  const [activeSlot, setActiveSlot] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Initial load: slot 0 plays banner 0, slot 1 preloads banner 1
  useEffect(() => {
    const v0 = videoRefs[0].current;
    const v1 = videoRefs[1].current;
    if (!v0 || !v1) return;

    v0.src = banners[slotBannerIndex.current[0]].video;
    v0.playbackRate = PLAYBACK_RATE;
    v0.load();
    v0.play().catch(() => {});

    v1.src = banners[slotBannerIndex.current[1]].video;
    v1.load(); // preload only, stays paused
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const advanceSlot = (endedSlot) => {
    const incomingSlot = endedSlot === 0 ? 1 : 0;
    const incomingVideo = videoRefs[incomingSlot].current;
    if (!incomingVideo) return;

    incomingVideo.playbackRate = PLAYBACK_RATE;

    // Reveal only once the incoming video is actually painting a frame
    const reveal = () => {
      incomingVideo.removeEventListener("playing", reveal);
      setActiveSlot(incomingSlot);
      setCurrentSlide(slotBannerIndex.current[incomingSlot]);
    };
    incomingVideo.addEventListener("playing", reveal);
    incomingVideo.currentTime = 0;
    incomingVideo.play().catch(() => {});

    // Queue up the banner after next into the slot that just finished
    const outgoingVideo = videoRefs[endedSlot].current;
    const upcomingIndex = (slotBannerIndex.current[incomingSlot] + 1) % banners.length;
    slotBannerIndex.current[endedSlot] = upcomingIndex;
    if (outgoingVideo) {
      outgoingVideo.src = banners[upcomingIndex].video;
      outgoingVideo.load();
    }
  };

  const handleEnded = (slot) => () => advanceSlot(slot);

  const goToSlide = (index) => {
    if (index === currentSlide) return;

    const inactiveSlot = activeSlot === 0 ? 1 : 0;
    const video = videoRefs[inactiveSlot].current;
    if (!video) return;

    slotBannerIndex.current[inactiveSlot] = index;
    video.src = banners[index].video;
    video.load();
    video.playbackRate = PLAYBACK_RATE;

    const reveal = () => {
      video.removeEventListener("playing", reveal);
      setActiveSlot(inactiveSlot);
      setCurrentSlide(index);
    };
    video.addEventListener("playing", reveal);
    video.play().catch(() => {});

    const otherVideo = videoRefs[activeSlot].current;
    const upcomingIndex = (index + 1) % banners.length;
    slotBannerIndex.current[activeSlot] = upcomingIndex;
    if (otherVideo) {
      otherVideo.src = banners[upcomingIndex].video;
      otherVideo.load();
    }
  };

  return (
    <section className="promo-banner">
      <video
        ref={videoRefs[0]}
        className={`promo-video ${activeSlot === 0 ? "promo-video-active" : ""}`}
        poster={FALLBACK_BG}
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded(0)}
      />
      <video
        ref={videoRefs[1]}
        className={`promo-video ${activeSlot === 1 ? "promo-video-active" : ""}`}
        poster={FALLBACK_BG}
        muted
        playsInline
        preload="auto"
        onEnded={handleEnded(1)}
      />

      <div className="promo-video-overlay" />

      <div className="container promo-container">
        <div className="promo-content">
          <span className="promo-company-name">WELL CAREER IMMIGRATION</span>
          <h1 className="promo-title">{banners[currentSlide].title}</h1>
          <p className="promo-description">
            Professional guidance for your international education, career,
            travel and immigration journey.
          </p>
          <div className="promo-actions">
            <Link to="/countries" className="promo-button promo-button-primary">
              Countries <span>→</span>
            </Link>
            <Link to="/contact" className="promo-button promo-button-secondary">
              Contact Us <span>→</span>
            </Link>
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