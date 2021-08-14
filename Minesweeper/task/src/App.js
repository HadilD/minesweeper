import React from 'react';
import './App.css';

function ControlPanel(props) {
    return (
        <div className="ControlPanel">
            <div className="ControlPanelCounter">{props.counter}</div>
            <button className="ControlPanelReset">🙂</button>
            <div className="ControlPanelTimer">{Math.floor(props.timer / 60)}:{(props.timer % 60).toString().padStart(2, '0')}</div>
        </div>
    );
}

function Field() {
    return (
        <div className="Field">
            {[...Array(9).keys()].map((_, i) =>
                <div key={i} className="FieldRow">
                    {[...Array(8).keys()].map((_, j) =>
                        <div key={i + '-' + j} className="FieldCell cell" />
                    )}
                </div>
            )}
        </div>
    );
}

function App() {
    let counter = 10;
    let timer = 0;

    return (
        <div className="App">
            <p className="AppHeader">
                Minesweeper <img src="bomb.svg" className="App-logo" alt="logo" />
            </p>
            <ControlPanel counter={counter} timer={timer} />
            <Field />
        </div>
    );
}

export default App;