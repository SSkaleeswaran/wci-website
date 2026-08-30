import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const banners = [
  {
    id: 1,
    video: "/videos/zoomout-university.mp4",
    title: "Explore Your Future Beyond Borders.",
  },
  {
    id: 2,
    video: "/videos/village-nature.mp4",
    title: "Your Journey Starts With the Right Destination.",
  },
  {
    id: 3,
    video: "/videos/building1.mp4",
    title: "Build Your Future in Another Country.",
  },
  {
    id: 4,
    video: "/videos/flying-plane.mp4",
    title: "Make Your International Dreams Possible.",
  },
  {
    id: 5,
    video: "/videos/top-university.mp4",
    title: "Your Global Journey Starts Here.",
  },
  {
    id: 6,
    video: "/videos/hyfy-group.mp4",
    title: "Make Your International Dreams Possible.",
  },
];

const PLAYBACK_RATE = 2;
const VIDEO_TIME = 5000;

const FALLBACK_BG = "/images/company-img/visa-1.jpg";

function PromoBanner() {
  const videoRef = useRef(null);
  const nextVideoRef = useRef(null);

  const timerRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const currentVideo = banners[currentSlide];

  /*
   * =====================================================
   * PLAY CURRENT VIDEO
   * =====================================================
   */

  const playCurrentVideo = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.playbackRate = PLAYBACK_RATE;

    video.currentTime = 0;

    video
      .play()
      .catch((error) => {
        console.log("Video play failed:", error);
      });
  };


  /*
   * =====================================================
   * PRELOAD NEXT VIDEO
   * =====================================================
   */

  const preloadNextVideo = (index) => {
    const nextVideo = nextVideoRef.current;

    if (!nextVideo) {
      return;
    }

    const nextIndex =
      (index + 1) % banners.length;

    nextVideo.src =
      banners[nextIndex].video;

    nextVideo.load();
  };


  /*
   * =====================================================
   * MOVE TO NEXT VIDEO
   * =====================================================
   */

  const nextSlide = () => {
    setCurrentSlide((previous) => {
      const next =
        (previous + 1) % banners.length;

      return next;
    });
  };


  /*
   * =====================================================
   * CURRENT VIDEO CHANGED
   * =====================================================
   */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    /*
     * Load the new video
     */

    video.src =
      currentVideo.video;

    video.load();


    /*
     * Wait until browser can actually play it
     */

    const handleCanPlay = () => {

      video.playbackRate =
        PLAYBACK_RATE;

      video.currentTime = 0;

      video
        .play()
        .catch((error) => {
          console.log(
            "Autoplay failed:",
            error
          );
        });


      /*
       * Preload the next video
       */

      preloadNextVideo(currentSlide);


      /*
       * Exactly 5 seconds
       */

      clearTimeout(timerRef.current);

      timerRef.current =
        setTimeout(() => {
          nextSlide();
        }, VIDEO_TIME);
    };


    video.addEventListener(
      "canplay",
      handleCanPlay,
      { once: true }
    );


    /*
     * If browser already has enough data
     */

    if (video.readyState >= 3) {
      handleCanPlay();
    }


    return () => {
      video.removeEventListener(
        "canplay",
        handleCanPlay
      );

      clearTimeout(
        timerRef.current
      );
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);


  /*
   * =====================================================
   * MANUAL DOT
   * =====================================================
   */

  const goToSlide = (index) => {

    if (index === currentSlide) {
      return;
    }

    clearTimeout(
      timerRef.current
    );

    setCurrentSlide(index);
  };


  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <section className="promo-banner">

      {/* =================================================
          MAIN VIDEO
      ================================================= */}

      <video
        ref={videoRef}
        className="promo-video promo-video-active"
        poster={FALLBACK_BG}
        muted
        autoPlay
        playsInline
        preload="auto"
      />


      {/* =================================================
          HIDDEN PRELOAD VIDEO
      ================================================= */}

      <video
        ref={nextVideoRef}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          display: "none",
        }}
      />


      {/* =================================================
          OVERLAY
      ================================================= */}

      <div className="promo-video-overlay" />


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="container promo-container">

        <div className="promo-content">

          {/* FIXED COMPANY NAME */}

          <span className="promo-company-name">
            WELL CAREER IMMIGRATION
          </span>


          {/* ONLY THIS CHANGES */}

          <h1 className="promo-title">
            {currentVideo.title}
          </h1>


          {/* FIXED DESCRIPTION */}

          <p className="promo-description">
            Professional guidance for your international
            education, career, travel and immigration journey.
          </p>


          {/* FIXED BUTTONS */}

          <div className="promo-actions">

            <Link
              to="/countries"
              className="promo-button promo-button-primary"
            >
              Countries
              <span>→</span>
            </Link>


            <Link
              to="/contact"
              className="promo-button promo-button-secondary"
            >
              Contact Us
              <span>→</span>
            </Link>

          </div>

        </div>


        {/* =================================================
            DOTS
        ================================================= */}

        <div className="promo-controls">

          {banners.map((banner, index) => (

            <button
              key={banner.id}
              type="button"
              className={
                index === currentSlide
                  ? "active"
                  : ""
              }
              onClick={() =>
                goToSlide(index)
              }
              aria-label={
                `Go to video ${index + 1}`
              }
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default PromoBanner;