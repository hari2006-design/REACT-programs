import React, { useState } from "react";
import "./ColorPicker.css";

export default function ColorPicker() {
    const colors = ["red", "blue", "pink"];
    const [active, setActive] = useState(null);

    return (
        <div className="color-picker">
            <h2 className="cp-heading pink">Color Picker</h2>

            <div className="cp-buttons">
                {colors.map((c) => (
                    <button
                        key={c}
                        className={`color-btn ${c} ${active === c ? "active" : ""}`}
                        onClick={() => setActive(c)}
                        type="button"
                    >
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                    </button>
                ))}
            </div>

            <div className="cp-display">
                {!active ? (
                    <div className="empty-box">Tap a color to preview</div>
                ) : (
                    <div
                        className="big-box"
                        style={{ background: active }}
                        aria-label={`Selected color ${active}`}
                    />
                )}
            </div>
        </div>
    );
}
