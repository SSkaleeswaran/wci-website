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
const SLIDE_DURATION = 5000;

const FALLBACK_BG = "/images/company-img/visa-1.jpg";

function PromoBanner() {
  const videoA = useRef(null);
  const videoB = useRef(null);

  const activeSlot = useRef(0);
  const currentIndex = useRef(0);

  const timerRef = useRef(null);

  const [visibleSlot, setVisibleSlot] = useState(0);
  const [slide, setSlide] = useState(0);


  /* =====================================================
     GET NEXT INDEX
  ===================================================== */

  const getNextIndex = (index) => {
    return (index + 1) % banners.length;
  };


  /* =====================================================
     GET VIDEO ELEMENT
  ===================================================== */

  const getVideo = (slot) => {
    return slot === 0
      ? videoA.current
      : videoB.current;
  };


  /* =====================================================
     PRELOAD VIDEO
  ===================================================== */

  const preloadVideo = (slot, index) => {
    const video = getVideo(slot);

    if (!video) {
      return;
    }

    video.pause();

    video.src = banners[index].video;

    video.load();

    video.playbackRate = PLAYBACK_RATE;
  };


  /* =====================================================
     PLAY CURRENT VIDEO
  ===================================================== */

  const playVideo = (slot, index) => {
    const video = getVideo(slot);

    if (!video) {
      return;
    }

    video.currentTime = 0;

    video.playbackRate = PLAYBACK_RATE;

    video.play().catch(() => {});

    activeSlot.current = slot;

    currentIndex.current = index;

    setVisibleSlot(slot);

    setSlide(index);
  };


  /* =====================================================
     START SLIDE TIMER
  ===================================================== */

  const startTimer = () => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      goNext();
    }, SLIDE_DURATION);
  };


  /* =====================================================
     GO TO NEXT VIDEO
  ===================================================== */

  const goNext = () => {
    const oldSlot = activeSlot.current;

    const newSlot = oldSlot === 0 ? 1 : 0;

    const nextIndex =
      getNextIndex(currentIndex.current);

    const incomingVideo =
      getVideo(newSlot);

    const outgoingVideo =
      getVideo(oldSlot);


    if (!incomingVideo) {
      return;
    }


    /*
      If next video is already buffered,
      switch immediately.
    */

    const switchVideo = () => {

      incomingVideo.currentTime = 0;

      incomingVideo.playbackRate =
        PLAYBACK_RATE;

      incomingVideo
        .play()
        .catch(() => {});


      /*
        Update active state.
      */

      activeSlot.current = newSlot;

      currentIndex.current = nextIndex;

      setVisibleSlot(newSlot);

      setSlide(nextIndex);


      /*
        Prepare the video after the next one.
      */

      const upcomingIndex =
        getNextIndex(nextIndex);


      if (outgoingVideo) {

        outgoingVideo.pause();

        outgoingVideo.src =
          banners[upcomingIndex].video;

        outgoingVideo.load();

      }


      /*
        Start another 5-second cycle.
      */

      startTimer();
    };


    /*
      Wait for the incoming video if necessary.
    */

    if (incomingVideo.readyState >= 3) {

      switchVideo();

    } else {

      incomingVideo.addEventListener(
        "canplay",
        switchVideo,
        {
          once: true,
        }
      );

    }
  };


  /* =====================================================
     INITIALIZE
  ===================================================== */

  useEffect(() => {

    const firstVideo = videoA.current;
    const secondVideo = videoB.current;

    if (!firstVideo || !secondVideo) {
      return;
    }


    /*
      Load first video.
    */

    firstVideo.src =
      banners[0].video;

    firstVideo.load();


    /*
      Load second video in advance.
    */

    secondVideo.src =
      banners[1].video;

    secondVideo.load();


    /*
      Start first video.
    */

    const startFirstVideo = () => {

      firstVideo.currentTime = 0;

      firstVideo.playbackRate =
        PLAYBACK_RATE;

      firstVideo
        .play()
        .catch(() => {});


      startTimer();

    };


    if (firstVideo.readyState >= 3) {

      startFirstVideo();

    } else {

      firstVideo.addEventListener(
        "canplay",
        startFirstVideo,
        {
          once: true,
        }
      );

    }


    return () => {

      clearTimeout(timerRef.current);

    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  /* =====================================================
     MANUAL DOT
  ===================================================== */

  const goToSlide = (index) => {

    if (index === currentIndex.current) {
      return;
    }


    clearTimeout(timerRef.current);


    const oldSlot =
      activeSlot.current;

    const newSlot =
      oldSlot === 0 ? 1 : 0;

    const video =
      getVideo(newSlot);


    if (!video) {
      return;
    }


    video.pause();

    video.src =
      banners[index].video;

    video.load();


    const switchToSelected = () => {

      video.currentTime = 0;

      video.playbackRate =
        PLAYBACK_RATE;

      video
        .play()
        .catch(() => {});


      /*
        Update active slot.
      */

      activeSlot.current =
        newSlot;

      currentIndex.current =
        index;

      setVisibleSlot(newSlot);

      setSlide(index);


      /*
        Preload next video.
      */

      const nextIndex =
        getNextIndex(index);

      const oldVideo =
        getVideo(oldSlot);


      if (oldVideo) {

        oldVideo.pause();

        oldVideo.src =
          banners[nextIndex].video;

        oldVideo.load();

      }


      startTimer();

    };


    if (video.readyState >= 3) {

      switchToSelected();

    } else {

      video.addEventListener(
        "canplay",
        switchToSelected,
        {
          once: true,
        }
      );

    }
  };


  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <section className="promo-banner">


      {/* =================================================
          VIDEO A
      ================================================= */}

      <video
        ref={videoA}
        className={`promo-video ${
          visibleSlot === 0
            ? "promo-video-active"
            : ""
        }`}
        poster={FALLBACK_BG}
        muted
        playsInline
        preload="auto"
      />


      {/* =================================================
          VIDEO B
      ================================================= */}

      <video
        ref={videoB}
        className={`promo-video ${
          visibleSlot === 1
            ? "promo-video-active"
            : ""
        }`}
        poster={FALLBACK_BG}
        muted
        playsInline
        preload="auto"
      />


      {/* =================================================
          VIDEO OVERLAY
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


          {/* CHANGING TITLE */}

          <h1 className="promo-title">
            {banners[slide].title}
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

              <span>
                →
              </span>
            </Link>


            <Link
              to="/contact"
              className="promo-button promo-button-secondary"
            >
              Contact Us

              <span>
                →
              </span>
            </Link>

          </div>

        </div>


        {/* =================================================
            DOTS
        ================================================= */}

        <div className="promo-controls">

          {banners.map(
            (banner, index) => (

              <button
                key={banner.id}
                type="button"
                className={
                  index === slide
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

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default PromoBanner;