import React from 'react';
import {storiesOf} from "@storybook/react";
import { ColorStory, DefaultStory } from '../components/index';
import Heading from '../../packages/heading/src/'

storiesOf('Theme')
    .addWithChapters('Colors', {
        chapters: [
            {
                sections: [
                    {
                        sectionFn: () => (
                            <ColorStory />
                        ),
                        options: {
                            showSource: false,
                            allowSourceToggling: false,
                            showPropTables: false,
                            allowPropTablesToggling: false
                        }

                    }
                ]
            }
        ]
    })

    .addWithChapters('Defaults', {
        chapters: [
            {
                sections: [
                    {
                        sectionFn: () => (
                            <DefaultStory />
                        ),
                        options: {
                            showSource: false,
                            allowSourceToggling: false,
                            showPropTables: false,
                            allowPropTablesToggling: false
                        }

                    }
                ]
            }
        ]
    })

    .addWithChapters('Typography', {
        chapters: [
            {
                sections: [
                    {
                        title: 'Headings',
                        sectionFn: () => (
                            <Heading>Sustainable use of Technology for Public Sector Accountability in Nepal</Heading>
                        ),
                        options: {
                            showSource: false,
                            allowSourceToggling: true,
                            showPropTables: false,
                            allowPropTablesToggling: true
                        }
                    },
                    {
                        title: 'H1',
                        sectionFn: () => (
                            <Heading.h1>Hello Resource Projects</Heading.h1>
                        ),
                        options: {
                            showSource: false,
                            allowSourceToggling: true,
                            showPropTables: false,
                            allowPropTablesToggling: true
                        }
                    },
                    {
                        title: 'H2',
                        sectionFn: () => (
                            <Heading.h2>Hello Resource Projects</Heading.h2>
                        ),
                        options: {
                            showSource: false,
                            allowSourceToggling: true,
                            showPropTables: false,
                            allowPropTablesToggling: true
                        }
                    },
                    {
                        title: 'H3',
                        sectionFn: () => (
                            <Heading.h3>Hello Resource Projects</Heading.h3>
                        ),
                        options: {
                            showSource: false,
                            allowSourceToggling: true,
                            showPropTables: false,
                            allowPropTablesToggling: true
                        }
                    },
                    {
                        title: 'H4',
                        sectionFn: () => (
                            <Heading.h4>Hello Resource Projects</Heading.h4>
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