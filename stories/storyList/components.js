import React from 'react';
import {storiesOf} from "@storybook/react";
import Button from '../../packages/component-button/src/index';
import Search from '../../packages/search/src/index';

storiesOf('Components')
    .addWithChapters('Buttons', {
        chapters: [
            {
                sections: [
                    {
                        sectionFn: () => (
                            <Button>Hello</Button>
                        ),
                        options: {
                            showSource: false,
                            allowSourceToggling: true,
                            showPropTables: false,
                            allowPropTablesToggling: true
                        }
                    }
                ]
            }
        ]
    })

    .addWithChapters('Search', {
        chapters: [
            {
                sections: [
                    {
                        sectionFn: () => (
                            <Search placeholder='Enter search term here' />
                        ),
                        options: {
                            showSource: false,
                            allowSourceToggling: true,
                            showPropTables: false,
                            allowPropTablesToggling: true
                        }
                    }
                ]
            }
        ]
    })