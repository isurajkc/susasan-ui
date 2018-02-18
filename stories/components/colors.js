import React, { Component } from 'react';
import { colors, shades } from '../../theme/colors';
import mapObject from '../../utils/mapObject';

const renderColourGroup = type => {
  return (
    <div className="row">
      {mapObject(colors[type], (key, value) => (
        <div key={key} className="col">
          <div className="card" key={key}>
            <div
              className="card__bg"
              style={{ backgroundColor: value, color: '#333' }}
            >
              <span>{value}</span>
            </div>
            <div className="card__block">
              <code>{key}</code>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const renderShadesGroup = type => (
    <div className="row">
      {mapObject(shades[type], (key, value) => (
        <div key={key} className="col">
          <div className="card" key={key}>
            <div
              className="card__bg"
              style={{ backgroundColor: value, color: '#333' }}
            >
              <span>{value}</span>
            </div>
            <div className="card__block">
              <code>{key}</code>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

const ColorStory = () => (
  <div className="theme">
    <div className="theme__colors">
      <div className="styleguide-block">
        <h4>Primary</h4>
        {renderColourGroup('primary')}
      </div>

      <div className="styleguide-block">
        <h4>Secondary</h4>
        {renderColourGroup('sec')}
      </div>
    </div>

    <div className="theme__shades">
      <div className="styleguide-block">
        <h4>Orange Shades</h4>
        {renderShadesGroup('oranges')}
      </div>

        <div className="styleguide-block">
            <h4>Blue Shades</h4>
            {renderShadesGroup('blues')}
        </div>

        <div className="styleguide-block">
            <h4>Blue Shades</h4>
            {renderShadesGroup('roses')}
        </div>

        <div className="styleguide-block">
            <h4>Blue Shades</h4>
            {renderShadesGroup('teals')}
        </div>

        <div className="styleguide-block">
            <h4>Blue Shades</h4>
            {renderShadesGroup('neutrals')}
        </div>
    </div>
  </div>
);

export default ColorStory;
