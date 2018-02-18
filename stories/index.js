import React from 'react'
import { configure, storiesOf, setAddon } from '@storybook/react'
import chaptersAddon from 'react-storybook-addon-chapters';


setAddon(chaptersAddon);

configure(function() {
    require('./storyList/theme');
    require('./storyList/components');
}, module);








