import React, { Fragment } from "react";
import Instrument from "./Instrument";

const Piano = () => {
  const accidentalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <div className="piano-accidental-key-wrapper">
        <button
          className={`piano-accidental-key ${
            isPlaying ? "piano-accidental-key-playing" : ""
          } `}
          {...eventHandlers}
        >
          <div className="piano-text">{text}</div>
        </button>
      </div>
    );
  };

  const naturalKey = ({ isPlaying, text, eventHandlers }) => {
    return (
      <button
        className={`piano-natural-key ${
          isPlaying ? "piano-natural-key-playing" : ""
        } `}
        {...eventHandlers}
      >
        <div className="piano-text">{text}</div>
      </button>
    );
  };

  const renderPianoKey = ({
    isAccidentalNote,
    isNotePlaying,
    startPlayingNote,
    stopPlayingNote,
    keyboardShortcut,
  }) => {
    const KeyComponent = isAccidentalNote ? accidentalKey : naturalKey;

    const eventHandlers = {
      onMouseDown: startPlayingNote,
      onMouseUp: stopPlayingNote,
      onTouchStart: startPlayingNote,
      onMouseOut: stopPlayingNote,
      onTouchEnd: stopPlayingNote,
    };

    return (
      <KeyComponent
        isPlaying={isNotePlaying}
        text={keyboardShortcut.join("/")}
        eventHandlers={eventHandlers}
      />
    );
  };

  return (
    <div className="piano-container">
      <Instrument
        instrumentName={"acoustic_grand_piano"}
        startNote={"C3"}
        endNote={"B5"}
        renderPianoKey={renderPianoKey}
        keyboardMap={{
          A: "C3",
          W: "C#3",
          S: "D3",
          E: "D#3",
          D: "E3",
          F: "F3",
          T: "F#3",
          G: "G3",
          Y: "G#3",
          H: "A3",
          U: "A#3",
          J: "B3",
          K: "C4",
          O: "C#4",
          L: "D4",
          P: "D#4",
          ";": "E4",
          "'": "F4",
          Z: "F#4",
          X: "G4",
          C: "G#4",
          V: "A4",
          B: "A#4",
          N: "B4",
          M: "C5",
          ",": "C#5",
          ".": "D5",
          "/": "D#5",
          Q: "E5",
          R: "F5",
          I: "F#5",
          "[": "G5",
          "]": "G#5",
          "": "A5",
          "": "A#5",
          "": "B5",
        }}
      />
    </div>
  );
};

export default Piano;
