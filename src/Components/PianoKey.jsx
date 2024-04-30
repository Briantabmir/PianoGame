// src/components/PianoKey.jsx
import React, { useState } from 'react';
import * as Tone from 'tone';

const PianoKey = ({ note, type, isActive, handleUserInput }) => {
    const [isPressed, setIsPressed] = useState(false); // Estado para manejar si la tecla está siendo presionada

    const playNote = () => {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(note, '8n');
        handleUserInput(note);
    };

    // Construir la clase del botón basada en su estado
    const keyClass = `piano-key ${type} ${isActive ? 'active' : ''} ${isPressed ? 'pressed' : ''}`;

    return (
        <button
            onMouseDown={() => setIsPressed(true)} 
            onMouseUp={() => setIsPressed(false)} 
            onMouseLeave={() => setIsPressed(false)} 
            onClick={playNote}
            className={keyClass}
        >
            {note}
        </button>
    );
};

export default PianoKey;
