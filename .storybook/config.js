import React from 'react'
import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options';

// Option defaults:
setOptions({
    name: 'Susasan',
    url: 'http://sanphebagar.susasan.org'
});

function loadStories () {
  require('../stories')
}

configure(loadStories, module);
