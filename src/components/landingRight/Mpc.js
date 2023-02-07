import React, { Component } from "react";

import snare from "../../assets/audio/ACCURATE-SNARE.mp3";
import kick from "../../assets/audio/BLUE-KICK.mp3";
import hat from "../../assets/audio/CLEAN-HAT.mp3";
import guitar from "../../assets/audio/GUITAR.mp3";
import hey from "../../assets/audio/HEY____.mp3";
import water from "../../assets/audio/WATER-DROP.mp3";

import cssIcon from "../../assets/icons/cssThreeLogo.png";
import javascriptIcon from "../../assets/icons/jsLogo.png";
import htmlIcon from "../../assets/icons/htmlFiveLogo.jpg";
import tsIcon from "../../assets/icons/tsLogo.png";
import reactIcon from "../../assets/icons/reactLogo.png";
import nodeIcon from "../../assets/icons/nodeJsLogo.png";

class Mpc extends Component {
  state = {
    audioFiles: [snare, kick, hat, guitar, hey, water],
    imageFiles: [
      htmlIcon,
      cssIcon,
      javascriptIcon,
      tsIcon,
      reactIcon,
      nodeIcon,
    ],
    // playedFiles: []
  };

  playIt = async (file, target) => {
    target.classList.add("activeRn");
    // console.log(target);
    this.audioRef.src = file;
    this.audioRef.play();
    setTimeout(() => target.classList.remove("activeRn"), 500);
    // this.setState((prevState) => ({
    //   playedFiles: [...prevState.playedFiles, this.audioRef],
    // }));
    // console.log(this.state.playedFiles);
  };

  render() {
    const { audioFiles, imageFiles } = this.state;

    const theDivs = audioFiles.map((file, index) => {
      return (
        <div
          key={index}
          className="mpc-button"
          onClick={(event) => this.playIt(file, event.currentTarget)}
        >
          <img
            src={imageFiles[index]}
            alt={`tech icon ${index}`}
            className="mpcIcon"
          />
          <audio ref={(audioRef) => (this.audioRef = audioRef)} />
        </div>
      );
    });

    return <>{theDivs}</>;
  }
}

export default Mpc;
