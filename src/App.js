import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import axios from 'axios'

const App = () => {
  const [hue, setHue] = useState(Math.round(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.round(Math.random() * 100))
  const [light, setLight] = useState(Math.round(Math.random() * 100))
  const [alpha, setAlpha] = useState(1)

  const trackHue = (e) => {
    console.log(this.state.hue)
    setHue(e.target.value)
  }
  const trackSaturation = (e) => {
    console.log(e.target.value)
    setSaturation(e.target.value)
  }
  const trackLight = (e) => {
    console.log(e.target.value)
    setLight(e.target.value)
  }
  const trackAlpha = (e) => {
    console.log(e.target.value)
    setAlpha(e.target.value)
  }
  const randomColor = () => {
    setHue(Math.round(Math.random() * 360))
    setSaturation(Math.round(Math.random() * 100))
    setLight(Math.round(Math.random() * 100))
    setAlpha((Math.random() * 1).toFixed(2))
  }

  return (
    <>
      <main>
        <section>
          <h1>Color</h1>
          <section
            className="colorBox"
            style={{
              backgroundColor: `hsla(${hue},
              ${saturation}%,
              ${light}%,${alpha})`,
            }}
          ></section>
          <h2>
            HSLA: {hue}, {saturation}%,
            {light}%, {alpha}
          </h2>
        </section>
        <section>
          <section>
            <p>Hue</p>
            <input
              onChange={trackHue}
              type="range"
              className="hue"
              name="hue"
              min="0"
              max="360"
              value={hue}
            ></input>
          </section>
          <section>
            <p>Saturation</p>
            <input
              onChange={trackSaturation}
              type="range"
              className="saturation"
              name="saturation"
              min="0"
              max="100"
              value={saturation}
            ></input>
          </section>
          <section>
            <p>Light</p>
            <input
              onChange={trackLight}
              type="range"
              className="light"
              name="light"
              min="0"
              max="100"
              value={light}
            ></input>
          </section>
          <section>
            <p>Alpha</p>
            <input
              onChange={trackAlpha}
              type="range"
              className=""
              name="alpha"
              min="0"
              max="1"
              step=".01"
              value={alpha}
            ></input>
          </section>
          <button onClick={randomColor}>Random Color</button>
        </section>
      </main>
    </>
  )
}
export default App
