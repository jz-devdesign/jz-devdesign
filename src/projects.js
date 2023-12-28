const broker_app = {
    slug: 'broker-app',
    colors: {
        backgroundColor: '#101614',
        highlightColor: '#0E4238',
        highlightColorBright: '#0AAE8F',
        bannerColor: '#1AAC9187',
        textColor: '#E7EFED',
        textColorAlt: '#8CA49F',
        borderColor: '#15BE9C47',
    },
    sections: [
        {
            type: 'header',
            id: 'header',
            style: {
                background: 'linear-gradient(to top left, #09A680, #7EE9D5 25%, #09A680 60%)',
            },
            content: {
                title: 'Elevate Agent Engagement in Broker App',
                subtitle: 'I designed community and poster features for the app \'Broker\', a B2B platform for over 300k real estate agents, which increased engagement by 10%.',
                tags: ['Real Estate', 'B to B', 'Agile Development'],
                imageUrl: '/projects/broker/broker.png',
            }
        },
        {
            type: 'projectSpecs',
            content: {
                specs: [
                    {
                        title: 'Project Deliverables',
                        lines: [
                            'Project Interface (Mobile)',
                            'Interactive Prototype',
                        ]
                    },
                    {
                        title: 'My Role',
                        lines: [
                            'UXD & PM Assistant',
                            'User Flows and Wireframing',
                            'Animation & Visuals'
                        ]
                    },
                    {
                        title: 'Project Content',
                        lines: [
                            'Time line: 3 months',
                            'Team members: Jinping Zhang, Hong Chen',
                        ]
                    }
                ]
            }
        },
        {
            type: 'floatingTableOfContents',
            content: {
                sections: [
                    {
                        title: 'Top of Page',
                        id: 'header',
                    },
                    {
                        title: 'Introduction',
                        id: 'introduction',
                    },
                    {
                        title: 'Research',
                        id: 'research',
                    },
                    {
                        title: 'HMW',
                        id: 'hmw',
                    },
                    {
                        title: 'Design Outcomes',
                        id: 'design-outcome',
                    },
                    {
                        title: 'Stage 2: Poster Feature',
                        id: 'poster-feature',
                    },
                ]
            }
        },
        {
            type: 'titledSection',
            id: 'introduction',
            content: {
                title: 'What’s the product?:',
                body: [
                    {
                        type: 'text',
                        content: 'The Broker App is a tool for real estate agents. It contains two main features:'
                    },
                    {
                        type: 'markdown',
                        content:
                            '+ A house listing that updates monthly.\n' +
                            '+ A management tool which can record each step of the deal.'
                    },
                    {
                        type: 'imageList',
                        content: {
                            images: [
                                {
                                    path: '/projects/broker/whats_the_product_1.png',
                                    description: 'Product image 1',
                                },
                                {
                                    path: '/projects/broker/whats_the_product_2.png',
                                    description: 'Product image 2',
                                },
                                {
                                    path: '/projects/broker/whats_the_product_3.png',
                                    description: 'Product image 3',
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Problem statement:',
                body: [
                    {
                        type: 'text',
                        content: 'Users of the broker app were not actively engaged after registration.'
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            id: 'research',
            content: {
                title: 'What the broker says:',
                body: [
                    {
                        type: 'image',
                        content: {
                            path: '/projects/broker/what_the_broker_says_1.png',
                            description: 'Image describing broker needs',
                            fullWidth: true,
                        }
                    },
                    {
                        type: 'text',
                        content: 'The research results reveal that real estate agents face significant work pressure, sometimes completing only one property transaction in a month or even six months.',
                    },
                    {
                        type: 'arrowBulletList',
                        content: [
                            {
                                title: 'Insight 1:',
                                text: 'Agents expressed a strong desire to engage more with peers for mutual help and support especially during this lengthy sales cycle.',
                            },
                            {
                                title: 'Insight 2:',
                                text: 'Agents are eager to learn the sales skills to advance their workflow more effectively.',
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: 'titleBanner',
            id: 'hmw',
            content: {
                title: 'How might we enhance user engagement after registration through community engagement?'
            },
        },
        {
            type: 'titledSection',
            content: {
                title: 'Feature ideation:',
                body: [
                    {
                        type: 'text',
                        content: 'In response to these findings, we propose integrating a multifaceted community feature within the Broker app. We plan to introduce a feature where they can freely:',
                    },
                    {
                        type: 'flexList',
                        style: {
                            marginTop: '60px',
                        },
                        centerInColumn: true,
                        content: [
                            {
                                type: 'captionedIcon',
                                content: {
                                    path: '/projects/broker/feature_ideation_question_mark.svg',
                                    description: 'Icon of a question mark',
                                    caption: 'Ask questions and answer questions'
                                }
                            },
                            {
                                type: 'captionedIcon',
                                content: {
                                    path: '/projects/broker/feature_ideation_box.svg',
                                    description: 'Icon of a box',
                                    caption: 'Share information or resources'
                                }
                            },
                            {
                                type: 'captionedIcon',
                                content: {
                                    path: '/projects/broker/feature_ideation_learn_skill.svg',
                                    description: 'Icon of a computer link',
                                    caption: 'Learn sales skills'
                                }
                            }
                        ]
                    },
                    {
                        type: 'text',
                        content: 'This user-oriented feature update will directly respond to the challenges they encounter in their actual work and can foster a sense of belonging and community.',
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            id: 'design-outcome',
            content: {
                title: 'Design outcomes:',
                body: [
                    {
                        type: 'text',
                        content: 'Using the knowledge gained from my initial analysis and conversations with the project manager, I sketched various iterations and wireframes for the feature. Here are the design outcomes.'
                    }
                ]
            }
        },
        {
            type: 'image',
            content: {
                path: '/projects/broker/design_iterations.png',
                description: 'Design iterations for the broker app',
                fullWidth: true,
                border: true,
            }
        },
        {
            type: 'group',
            content: [
                {
                    type: 'text',
                    content: '-> Community landing page',
                },
                {
                    type: 'imageList',
                    content: {
                        images: [
                            {
                                path: '/projects/broker/landing_page_1.png',
                                description: 'Community landing page 1st mock image',
                            },
                            {
                                path: '/projects/broker/landing_page_2.png',
                                description: 'Community landing page 2nd mock image',
                            },
                            {
                                path: '/projects/broker/landing_page_3.png',
                                description: 'Community landing page 3rd mock image',
                            },
                            {
                                path: '/projects/broker/landing_page_4.png',
                                description: 'Community landing page 4th mock image',
                            }
                        ]
                    }
                }
            ]
        },
        {
            type: 'group',
            content: [
                {
                    type: 'text',
                    content: '-> Posting details',
                },
                {
                    type: 'imageList',
                    content: {
                        images: [
                            {
                                path: '/projects/broker/posting_details_1.png',
                                description: 'Posting details 1st mock image',
                            },
                            {
                                path: '/projects/broker/posting_details_2.png',
                                description: 'Posting details 2nd mock image',
                            },
                            {
                                path: '/projects/broker/posting_details_3.png',
                                description: 'Posting details 3rd mock image',
                            },
                        ]
                    }
                }
            ]
        },
        {
            type: 'group',
            content: [
                {
                    type: 'text',
                    content: '-> Comment and like notification',
                },
                {
                    type: 'imageList',
                    content: {
                        images: [
                            {
                                path: '/projects/broker/notification_1.png',
                                description: 'Comment and like notification 1st mock image',
                            },
                            {
                                path: '/projects/broker/notification_2.png',
                                description: 'Comment and like notification 2nd mock image',
                            },
                            {
                                path: '/projects/broker/notification_3.png',
                                description: 'Comment and like notification 3rd mock image',
                            },
                        ]
                    }
                }
            ]
        },
        {
            type: 'titledSection',
            vertical: true,
            content: {
                title: 'Design iteration:',
                body: [
                    {
                        type: 'flexList',
                        style: {
                            alignItems: 'center',
                        },
                        equalWidth: true,
                        content: [
                            {
                                type: 'markdown',
                                content: '- Swipe to switch topics.<br><br>\n' +
                                    '- Filter by distance or time.<br><br>\n' +
                                    '- Semi-transparent button for content visibility.'
                            },
                            {
                                type: 'image',
                                content: {
                                    path: '/projects/broker/before_one.png',
                                    description: 'Design iteration part 1 before image',
                                }
                            },
                            {
                                type: 'image',
                                content: {
                                    path: '/projects/broker/after_one.png',
                                    description: 'Design iteration part 1 after image',
                                }
                            },
                        ]
                    },
                    {
                        type: 'flexList',
                        style: {
                            alignItems: 'center',
                        },
                        equalWidth: true,
                        content: [
                            {
                                type: 'markdown',
                                content: '- Explained topics for clarity.<br><br>\n' +
                                    '- Like icon in comments for interaction.<br><br>\n' +
                                    '- Avatar and company info for quick peer recognition.'
                            },
                            {
                                type: 'image',
                                content: {
                                    path: '/projects/broker/before_two.png',
                                    description: 'Design iteration part 2 before image',
                                }
                            },
                            {
                                type: 'image',
                                content: {
                                    path: '/projects/broker/after_two.png',
                                    description: 'Design iteration part 2 after image',
                                }
                            },
                        ]
                    },
                    {
                        type: 'flexList',
                        style: {
                            alignItems: 'center',
                        },
                        equalWidth: true,
                        content: [
                            {
                                type: 'markdown',
                                content: '- Added a property label so that agents can pay attention to property-related information while socializing.',
                            },
                            {
                                type: 'image',
                                content: {
                                    path: '/projects/broker/before_three.png',
                                    description: 'Design iteration 3 before image',
                                }
                            },
                            {
                                type: 'image',
                                content: {
                                    path: '/projects/broker/after_three.png',
                                    description: 'Modifying real estate information after image',
                                }
                            },
                        ]
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Impact in 30 days:',
                body: [
                    {
                        type: 'text',
                        content: 'Before we started this project, the number of daily active agents is around 30k.  After we introduced the feature, the engagement increased 5k which is lower than our expectation.'
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Pivot:',
                body: [
                    {
                        type: 'text',
                        content: 'We began conducting research anew to understand the real needs of brokers. My project manager and I spent three days on-site, observing the daily life of several brokers.'
                    },
                    {
                        type: 'spacer',
                        content: {
                            size: '20px'
                        }
                    },
                    {
                        type: 'flexList',
                        content: [
                            {
                                type: 'taggedCard',
                                content: {
                                    tag: 'In office',
                                    title: 'Get potential clients',
                                    text: '* Calling people to ask and introduce.\n' +
                                        '* Sending messages through Wechat connections or post on wechat Moments.'
                                }
                            },
                            {
                                type: 'taggedCard',
                                content: {
                                    tag: 'On site',
                                    title: 'Take clients to see the houses',
                                    text: '* Showing the housing the clients are interested in.\n' +
                                        '* Make appointment to next time or go to next step such as pay the deposit.',
                                    style: {
                                        width: '18rem',
                                    },
                                }
                            },
                        ]
                    },
                    {
                        type: 'text',
                        content: 'We delved deeper into the in-office component because brokers need to acquire potential clients first. We discovered that they often create materials such as posters themselves when sending messages or posting moments, which is time-consuming.',
                    }
                ]
            }
        },
        {
            type: 'titleBanner',
            id: 'poster-feature',
            content: {
                title: 'Tools and utility are the most important things for agents.\n' +
                    '-> “poster creation tool is the top needs for agent.”'
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'HMW:',
                body: [
                    {
                        type: 'text',
                        content: 'How might we create a simple tool for real estate agents to make customized posters that attract potential clients?'
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Ideation:',
                body: [
                    {
                        type: 'text',
                        content: 'We brainstormed many ideas and ultimately decided on the following path:'
                    }
                ]
            }
        },
        {
            type: 'image',
            content: {
                path: '/projects/broker/app_flow.png',
                description: 'The flow of the app'
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Design:',
                body: [
                    {
                        type: 'text',
                        content: 'Based on the information, I sketched wireframes and arrived at the following design outcomes:'
                    }
                ]
            }
        },
        {
            type: 'group',
            content: [
                {
                    type: 'text',
                    content: '-> Generate poster from housing details',
                },
                {
                    type: 'imageList',
                    content: {
                        images: [
                            {
                                path: '/projects/broker/generate_poster_1.png',
                                description: 'Generate poster from housing details 1st mock image',
                            },
                            {
                                path: '/projects/broker/generate_poster_2.png',
                                description: 'Generate poster from housing details 2nd mock image',
                            },
                            {
                                path: '/projects/broker/generate_poster_3.png',
                                description: 'Generate poster from housing details 3rd mock image',
                            },
                            {
                                path: '/projects/broker/generate_poster_4.png',
                                description: 'Generate poster from housing details 4th mock image',
                            },
                        ]
                    }
                }
            ]
        },
        {
            type: 'group',
            content: [
                {
                    type: 'text',
                    content: '-> Users can send posters to community after creation',
                },
                {
                    type: 'imageList',
                    content: {
                        images: [
                            {
                                path: '/projects/broker/send_posters_1.png',
                                description: 'Send posters to community 1st mock image',
                            },
                            {
                                path: '/projects/broker/send_posters_2.png',
                                description: 'Send posters to community 2nd mock image',
                            },
                            {
                                path: '/projects/broker/send_posters_3.png',
                                description: 'Send posters to community 3rd mock image',
                            },
                            {
                                path: '/projects/broker/send_posters_4.png',
                                description: 'Send posters to community 4th mock image',
                            },
                        ]
                    }
                }
            ]
        },
        {
            type: 'titledSection',
            content: {
                title: 'Design iteration:',
                body: [
                    {
                        type: 'image',
                        content: {
                            path: '/projects/broker/design_iteration.png',
                            description: 'Design iteration diagram',
                            fullWidth: true,
                        }
                    }
                ]
            }
        },
        {
            type: 'flexList',
            style: {
                alignItems: 'center',
            },
            content: [
                {
                    type: 'markdown',
                    content: '* When modifying real estate information, a pop-up window will be shown to modify it before.<br><br>\n' +
                        '* User can modify it directly in the content after optimization.\n'
                },
                {
                    type: 'image',
                    content: {
                        path: '/projects/broker/modify_information_before.png',
                        description: 'Modifying real estate information before image',
                    }
                },
                {
                    type: 'image',
                    content: {
                        path: '/projects/broker/modify_information_after.png',
                        description: 'Modifying real estate information after image',
                    }
                },
            ]
        },
        {
            type: 'image',
            content: {
                path: '/projects/broker/poster_design_outcome.png',
                description: 'Design outcomes for the broker app',
                fullWidth: true,
                border: true,
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Impact in 30 days:',
                body: [
                    {
                        type: 'text',
                        content: 'Through this poster function, user engagement has been improved a lot, and it has also driven community engagement. The two functions have driven user participation in each other.',
                    },
                    {
                        type: 'flexList',
                        maxPerRow: 2,
                        style: {
                            marginTop: '40px',
                        },
                        content: [
                            {
                                type: 'captionedIcon',
                                style: {
                                    color: '#E7EFED',
                                    alignItems: 'flex-start',
                                    fontWeight: '400',
                                    gap: '15px',
                                    textAlign: 'start',
                                },
                                content: {
                                    path: '/projects/broker/used_poster.svg',
                                    description: 'Poster usage stat',
                                    caption: 'Tried to use poster',
                                }
                            },
                            {
                                type: 'captionedIcon',
                                style: {
                                    color: '#E7EFED',
                                    alignItems: 'flex-start',
                                    fontWeight: '400',
                                    gap: '15px',
                                    textAlign: 'start',
                                },
                                content: {
                                    path: '/projects/broker/daily_active_agents.svg',
                                    description: 'Daily active agents stat',
                                    caption: 'Daily active agents jumped from 22k to 40k',
                                }
                            },
                            {
                                type: 'captionedIcon',
                                style: {
                                    color: '#E7EFED',
                                    alignItems: 'flex-start',
                                    fontWeight: '400',
                                    gap: '15px',
                                    textAlign: 'start',
                                },
                                content: {
                                    path: '/projects/broker/community_section_visitors.svg',
                                    description: 'Community section visitors stat',
                                    caption: 'Community section visitors from poster',
                                }
                            },
                            {
                                type: 'captionedIcon',
                                style: {
                                    color: '#E7EFED',
                                    alignItems: 'flex-start',
                                    fontWeight: '400',
                                    gap: '15px',
                                    textAlign: 'start',
                                },
                                content: {
                                    path: '/projects/broker/housing_viewer.svg',
                                    description: '10%',
                                    caption: 'Total active users rate increased',
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'User feedback:',
                body: [
                    {
                        type: 'markdown',
                        content: 'Agent1: "This poster tool is so useful, saved a lot of time for me!!"\n\n<br/>' +
                            'Agent2: "It’s cool that I can directly generate poster from housing pages, I don’t need to gather all the information myself."'
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Next step:',
                body: [
                    {
                        type: 'markdown',
                        content: 'For this poster project, next step we will analyze the types of posters that users like based on the data such as the template they chose and provide more. \n\n' +
                            '<br/>' +
                            'We also propose a poster competition in the community, and select the most beautiful design to get rewards, etc.',
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'What I learned:',
                body: [
                    {
                        type: 'text',
                        content: 'From this project I gained a deeper understanding of user-centered design and learned how important it is to delve deep into users’ daily lives to discover real user needs.'
                    }
                ]
            }
        },
        {
            type: 'backToTop',
        },
    ]
}

const dr_lambda = {
    slug: 'dr-lambda',
    colors: {
        backgroundColor: '#0B0115',
        highlightColor: '#6D74FCA3',
        highlightColorBright: '#8E94FF',
        textColor: '#FCF8FF',
        textColorAlt: '#c1b6c7',
        bannerColor: '#6D74FC',
        borderColor: '#6D74FC',
    },
    sections: [
        {
            type: 'header',
            id: 'header',
            style: {
                background: 'linear-gradient(to top left, #8E93FF, #686FFB 25%, #8E93FF 60%)',
                gap: '100px'
            },
            content: {
                title: 'DrLambda.AI',
                subtitle: 'I redesigned Dr.lambda\'s main workflow to enhance user experience.',
                tags: ['Generative AI', 'B to C'],
                imageUrl: '/projects/drlambda/dr_lambda_header.png',
            }
        },
        {
            type: 'projectSpecs',
            content: {
                specs: [
                    {
                        title: 'Project Deliverables',
                        lines: [
                            'Project Deliverables(Web)',
                            'Interactive Prototype',
                        ]
                    },
                    {
                        title: 'My Role',
                        lines: [
                            'UXR & UXD',
                            'Wireframing and User Flows',
                        ]
                    },
                    {
                        title: 'Project Content',
                        lines: [
                            'Time line: 3 months',
                            'Team members: Jinping Zhang, +4 others',
                        ]
                    }
                ]
            }
        },
        {
            type: 'floatingTableOfContents',
            content: {
                sections: [
                    {
                        title: 'Top of Page',
                        id: 'header',
                    },
                    {
                        title: 'Introduction',
                        id: 'introduction',
                    },
                    {
                        title: 'Research',
                        id: 'research',
                    },
                    {
                        title: 'Insights',
                        id: 'insights',
                    },
                    {
                        title: 'Design Iterations',
                        id: 'design-iterations',
                    },
                ]
            }
        },
        {
            type: 'titledSection',
            id: 'introduction',
            content: {
                title: 'What\'s the product?:',
                body: [
                    {
                        type: 'text',
                        content: 'DrLambda is a tool for transforming digital information from diverse sources, including PDFs, Google Docs, Notion, and more, into polished, ready-to-use content like PowerPoint presentations.'
                    },
                    {
                        type: 'image',
                        style: {
                            marginTop: '20px',
                        },
                        content: {
                            path: '/projects/drlambda/whats_the_product.png',
                            description: 'Image of DrLambda promotion video',
                        }
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Context:',
                body: [
                    {
                        type: 'text',
                        content: 'We aim to redesign our workflow to enhance user understanding of available functionalities and improve the conversion rate from free users to paid subscribers.'
                    },
                ]
            }
        },
        {
            type: 'titledSection',
            id: 'research',
            vertical: true,
            content: {
                title: 'Research:',
                body: [
                    {
                        type: 'flexList',
                        content: [
                            {
                                type: 'text',
                                style: {
                                    width: '180px',
                                },
                                content: '-> Secondary research',
                            },
                            {
                                type: 'group',
                                content: [
                                    {
                                        type: 'text',
                                        content: 'We conducted a competitor analysis on direct and indirect competitors. We got three insights that related to our HWM.'
                                    },
                                    {
                                        type: 'flexList',
                                        style: {
                                            marginTop: '60px',
                                            justifyContent: 'space-evenly',
                                        },
                                        centerInColumn: true,
                                        content: [
                                            {
                                                type: 'captionedIcon',
                                                content: {
                                                    path: '/projects/drlambda/research_1.svg',
                                                    description: 'Icon representing a guide',
                                                    caption: 'Accessible Guides'
                                                },
                                            },
                                            {
                                                type: 'captionedIcon',
                                                content: {
                                                    path: '/projects/drlambda/research_2.svg',
                                                    description: 'Icon representing transparency',
                                                    caption: 'Transparent Pricing'
                                                },
                                            },
                                            {
                                                type: 'captionedIcon',
                                                content: {
                                                    path: '/projects/drlambda/research_3.svg',
                                                    description: 'Icon representing compatibility',
                                                    caption: 'Versatile Compatibility'
                                                },
                                            },
                                        ]
                                    },
                                    {
                                        type: 'text',
                                        content: 'Most competitors provide essential guides, including \'Getting Started\' and \'Help\' documentation and some are providing clear credit transparency.',
                                    },
                                    {
                                        type: 'text',
                                        style: {
                                            marginTop: '20px',
                                        },
                                        content: 'They offer free trials of their AI tools, providing upfront credit transparency. DrLambda had limited feature for free trials.',
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        type: 'flexList',
                        style: {
                            marginTop: '120px',
                        },
                        content: [
                            {
                                type: 'text',
                                style: {
                                    width: '180px'
                                },
                                content: '-> Primary research',
                            },
                            {
                                type: 'group',
                                content: [
                                    {
                                        type: 'text',
                                        content: 'We sent out the survey using different media and received a total of 85 responses. From the survey, I summarized 3 key insights. We had a better understanding about our the potential users.'
                                    },
                                    {
                                        type: 'flexList',
                                        style: {
                                            marginTop: '60px',
                                            flexWrap: 'wrap',
                                            justifyContent: 'space-evenly',
                                        },
                                        centerInColumn: true,
                                        content: [
                                            {
                                                type: 'image',
                                                style: {
                                                    height: '180px'
                                                },
                                                content: {
                                                    path: '/projects/drlambda/dominant_tools.png',
                                                    description: 'Pie chart',
                                                },
                                            },
                                            {
                                                type: 'image',
                                                style: {
                                                    height: '180px'
                                                },
                                                content: {
                                                    path: '/projects/drlambda/dont_use.png',
                                                    description: 'Pie chart',
                                                },
                                            },
                                            {
                                                type: 'image',
                                                style: {
                                                    height: '180px'
                                                },
                                                content: {
                                                    path: '/projects/drlambda/quality.png',
                                                    description: 'Pie chart',
                                                },
                                            },
                                        ]
                                    },
                                    {
                                        type: 'text',
                                        style: {
                                            marginTop: '60px',
                                        },
                                        content: 'We conducted interview with target users from the survey respondents. They are  3 PhD candidates, 1 masters student and 1 lecturer.'
                                    },
                                    {
                                        type: 'text',
                                        style: {
                                            marginTop: '50px',
                                        },
                                        content: 'We prioritized the following questions to discover how users currently understand the website:'
                                    },
                                    {
                                        type: 'group',
                                        style: {
                                            marginTop: '20px',
                                            padding: '10px',
                                        },
                                        border: true,
                                        content: [
                                            {
                                                type: 'markdown',
                                                style: {
                                                    marginBottom: '20px'
                                                },
                                                content: '- Did the flow match your expectations? If not, which parts were unexpected?'
                                            },
                                            {
                                                type: 'markdown',
                                                style: {
                                                    marginBottom: '20px'
                                                },
                                                content: '- Was there any confusion going through the process for creating the slides?',
                                            },
                                            {
                                                type: 'markdown',
                                                content: '- What improvements would make you want to use the website?'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            }
        },
        {
            type: 'titledSection',
            id: 'insights',
            content: {
                title: 'Insights:',
                body: [
                    {
                        type: 'text',
                        content: 'In total, we gathered around 56 data points. We then classified them and arrived at four key insights.',
                    },
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/interview_insights_1.png',
                            description: 'Unclassified user insights',
                            caption: 'Research data points',
                        },
                    },
                    {
                        type: 'image',
                        style: {
                            marginTop: '50px',
                        },
                        content: {
                            path: '/projects/drlambda/interview_insights_2.png',
                            description: 'Classified user insights',
                            caption: 'Categorized data',
                        },
                    },
                    {
                        type: 'arrowBulletList',
                        style: {
                            marginTop: '50px',
                        },
                        arrowResource: 'projects/drlambda/arrow.svg',
                        content: [
                            {
                                title: 'Information Overload',
                                text: 'Too much information in one page without guidance.',
                            },
                            {
                                title: 'User Autonomy & Customization',
                                text: 'Users want the ability to customize, adapt, and maintain control over their workflow.',
                            },
                            {
                                title: 'Pricing Transparency',
                                text: 'Users require more transparent pricing details to assess the cost-benefit of their pro subscription',
                            },
                            {
                                title: 'Value Demonstration',
                                text: 'Paid features may not be sufficiently intuitive, valuable, or comprehensive for users.',
                            },
                        ]
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'User journey map:',
                body: [
                    {
                        type: 'text',
                        content: 'Based on the research data, I drew a user journey map to clearly show where our problem is and to better understand our users:'
                    },
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/user_journey.png',
                            description: 'User journey image',
                        }
                    }
                ]
            },
        },
        {
            type: 'titleBanner',
            content: {
                preTitle: 'Redefine HMW',
                title: 'How might we enhance the value demonstration for unpaid users and streamline the workflow for both paid and unpaid users to minimize confusion and friction, thus boosting the conversion rate?'
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Brainstorm:',
                body: [
                    {
                        type: 'text',
                        content: 'After discussing with stakeholders, we began brainstorming ideas based on the new HMW. We then voted and prioritized features by p0, p1, p2.'
                    },
                    {
                        type: 'image',
                        style: {
                            width: '500px',
                        },
                        content: {
                            path: '/projects/drlambda/brainstorming.png',
                            description: 'Brainstorming ideas',
                        }
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Wireframe:',
                body: [
                    {
                        type: 'text',
                        content: 'According to the user flow and information architecture, I started drafting wireframes and iterated many times before presenting them to the stakeholders. We then received some feedback and iterated again.'
                    }
                ]
            }
        },
        {
            type: 'image',
            style: {
                marginTop: '-80px',
            },
            content: {
                path: '/projects/drlambda/wireframe.png',
                description: 'DrLambda wireframe',
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'Usability testing:',
                body: [
                    {
                        type: 'markdown',
                        content: 'After conducting interviews for usability testing, I summarized the findings into three key insights:\n\n<br>' +
                            '**Credit Calculator Redesign:**<br>' +
                            'The credit calculator is overwhelming for users, making it difficult to understand how much credit each step costs.\n\n<br>' +
                            '**Stepper Redesign:**<br>' +
                            'Rethink the hierarchical relationship of the steps.\n\n<br>' +
                            '**Optimize user input:**<br>' +
                            'Rethink adding an extra line by default, so users will know they can modify the outlines after AI generation'
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            id: 'design-iterations',
            content: {
                title: 'Design Iterations:',
                body: [
                    {
                        type: 'text',
                        content: 'Here are the wireframe iterations based on stakeholders and user feedback.',
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            unformatted: true,
            content: {
                title: '-> Summary',
                body: [
                    {
                        type: "markdown",
                        content: '- Simplified the process to solve the information cluster problem.'
                    },
                    {
                        type: "markdown",
                        style: {
                            marginTop: '50px',
                            color: 'rgb(100, 100, 100)'
                        },
                        content: "### Before"
                    },
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/summary_1.png',
                            description: 'Image showing the before of the summary page',
                            fullWidth: true,
                        }
                    },
                    {
                        type: "markdown",
                        style: {
                            marginTop: '50px',
                        },
                        content: "### After"
                    },
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/summary_2.png',
                            description: 'Image showing the after of the summary page part 1',
                            fullWidth: true,
                        }
                    },
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/summary_3.png',
                            description: 'Image showing the after of the summary page part 2',
                            fullWidth: true,
                        }
                    },
                ]
            }
        },
        {
            type: 'titledSection',
            unformatted: true,
            content: {
                title: '-> Outlines',
                body: [
                    {
                        type: "markdown",
                        content: '- Added manual input section for the users who wants to input their own outlines, or lack sufficient credits.\n' +
                            '- Simplified the outline pages.\n' +
                            '- Added buttons for regenerating the AI-made outlines, both for individual slides and for the entire deck.'
                    },
                    {
                        type: "markdown",
                        style: {
                            marginTop: '50px',
                            color: 'rgb(100, 100, 100)'
                        },
                        content: "### Before"
                    },
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/outlines_1.png',
                            description: 'Image showing the before of the outline page',
                            fullWidth: true,
                        }
                    },
                    {
                        type: "markdown",
                        style: {
                            marginTop: '50px',
                        },
                        content: "### After (Page 1)"
                    },
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/outlines_2.png',
                            description: 'Image showing the after of the outline page part 1',
                            fullWidth: true,
                        }
                    },
                    {
                        type: "markdown",
                        style: {
                            marginTop: '50px',
                        },
                        content: "### After (Page 2)"
                    },
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/outlines_3.png',
                            description: 'Image showing the after of the outline page part 3',
                            fullWidth: true,
                        }
                    },
                ]
            }
        },
        {
            type: 'titledSection',
            unformatted: true,
            content: {
                title: '-> Script',
                body: [
                    {
                        type: "markdown",
                        content: '- Optimized how scripts are displayed. Users can now see the scripts alongside their respective slide.'
                    },
                    {
                        type: "markdown",
                        style: {
                            marginTop: '50px',
                            color: 'rgb(100, 100, 100)'
                        },
                        content: "### Before"
                    },
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/script_1.png',
                            description: 'Image showing the before of the script page',
                            fullWidth: true,
                        }
                    },
                    {
                        type: "markdown",
                        style: {
                            marginTop: '50px',
                        },
                        content: "### After"
                    },
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/script_2.png',
                            description: 'Image showing the after of the script page',
                            fullWidth: true,
                        }
                    },
                ]
            }
        },
        {
            type: 'titledSection',
            vertical: true,
            content: {
                title: 'Design Outcomes:',
                body: [
                    {
                        type: 'image',
                        content: {
                            path: '/projects/drlambda/confidential.png',
                            description: 'This is confidential and cannot be shared yet.'
                        }
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'What I learned:',
                body: [
                    {
                        type: 'text',
                        content: 'Ensuring that the user experience is intuitive, enjoyable, and meets the users\' needs is crucial for long-term success. Prioritizing and Selectively Incorporating Stakeholder and User Feedback.',
                    }
                ]
            }
        },
        {
            type: 'backToTop',
        },
    ]
}

const projects = [
    broker_app,
    dr_lambda,
]

export default projects;