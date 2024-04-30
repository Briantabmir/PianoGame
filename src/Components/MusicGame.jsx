import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import PianoKey from './PianoKey';

const MusicGame = () => {
    const [sequence, setSequence] = useState([]);
    const [activeNote, setActiveNote] = useState(null);
    const [isListening, setIsListening] = useState(false);

// Teclas del piano
const allKeys = [
    { note: 'C3', type: 'white' }, { note: 'C#3', type: 'black' },
    { note: 'D3', type: 'white' }, { note: 'D#3', type: 'black' },
    { note: 'E3', type: 'white' },
    { note: 'F3', type: 'white' }, { note: 'F#3', type: 'black' },
    { note: 'G3', type: 'white' }, { note: 'G#3', type: 'black' },
    { note: 'A3', type: 'white' }, { note: 'A#3', type: 'black' },
    { note: 'B3', type: 'white' },
    { note: 'C4', type: 'white' }, { note: 'C#4', type: 'black' },
    { note: 'D4', type: 'white' }, { note: 'D#4', type: 'black' },
    { note: 'E4', type: 'white' },
    { note: 'F4', type: 'white' }, { note: 'F#4', type: 'black' },
    { note: 'G4', type: 'white' }, { note: 'G#4', type: 'black' },
    { note: 'A4', type: 'white' }, { note: 'A#4', type: 'black' },
    { note: 'B4', type: 'white' },
    { note: 'C5', type: 'white' }
];

    useEffect(() => {
        Tone.start();
    }, []);

    useEffect(() => {
        if (sequence.length > 0) {
            playPattern(sequence);
        }
    }, [sequence]);

    const generatePattern = (length = 4) => {
        const newSequence = [];
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allKeys.length);
            newSequence.push(allKeys[randomIndex]);
        }
        setSequence(newSequence);
    };

    const playPattern = async (pattern) => {
        setIsListening(false);
        const synth = new Tone.Synth().toDestination();
        for (const item of pattern) {
            setActiveNote(item.note);
            synth.triggerAttackRelease(item.note, '8n');
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        setActiveNote(null);
        setIsListening(true);
    };

    return (
        <div>
            <div style={{ position: 'relative', height: '200px', width: '100%', margin: '20px' }}>
                {allKeys.map(({ note, type }) => (
                    <PianoKey key={note} note={note} type={type} isActive={note === activeNote} handleUserInput={() => {}} />
                ))}
            </div>
            <button onClick={() => generatePattern()} className="generate-button">
                PLAY
            </button>
        </div>
    );
};

export default MusicGame;

