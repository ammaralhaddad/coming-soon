import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="clock-content">
        <FlipClockCountdown
          className="down-clock"
          to={new Date().getTime() + 80 * 3600 * 1000 + 5000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        ></FlipClockCountdown>
        <h1>Coming Soon</h1>
        <h3>
          Question? please contact me through my personal portfolio webpage.
        
        </h3>
        <a href="https://ammarhaddad.com/">
        <button className="button">Conatct Me</button>
        </a>
      </div>
    </div>
  );
}

export default App;
