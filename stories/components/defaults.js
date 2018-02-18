import React from "react";
import mapObject from '../../utils/mapObject';
import defaults from "../../theme/defaults";

const renderDefaultGroup = type => (
    <table>
        <tbody>
        {mapObject(defaults[type], (key, value) => (
            <tr>
                <td>{key}</td>
                <td>{value}</td>
            </tr>
        ))}
        </tbody>
    </table>
);

const DefaultStory = () => (
    <div>
        <div style={{ marginBottom: "24px" }}>
            <h4>Font Family</h4>
            {renderDefaultGroup("fontFamily")}
        </div>

        <div style={{ marginBottom: "24px" }}>
            <h4>Font Size</h4>
            {renderDefaultGroup("fontSize")}
        </div>

        <div style={{ marginBottom: "24px" }}>
            <h4>Font Weight</h4>
            {renderDefaultGroup("fontWeight")}
        </div>

        <div style={{ marginBottom: "24px" }}>
            <h4>Transitions</h4>
            {renderDefaultGroup("transition")}
        </div>
    </div>
);

export default DefaultStory;
