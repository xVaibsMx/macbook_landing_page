import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef()

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2
  }, [])
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="Macbook Title" />
      </div>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        playsInline
        autoPlay
        muted
      ></video>
      <button>Buy</button>
      <p>From $1599 or $133/month for 12 months</p>
    </section>
  )
}

export default Hero
