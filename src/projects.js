const broker_app = {
    slug: 'broker-app',
    sections: [
        {
            type: 'header',
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
                            'Project Deliverables(Mobile)',
                            'Interactive Prototype',
                        ]
                    },
                    {
                        title: 'My Role',
                        lines: [
                            'UXD & PM Assistant',
                            'Wireframing and User Flows',
                        ]
                    },
                    {
                        title: 'Project Content',
                        lines: [
                            'Time line: 5 months',
                            'Team members: JinpingZhang, HongChen',
                        ]
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'What’s the product?',
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
                title: 'Problem statement',
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
            content: {
                title: 'Original hypothesis',
                body: [
                    {
                        type: 'flexList',
                        content: [
                            {
                                type: 'taggedCard',
                                content: {
                                    tag: 'Hypothesis 1',
                                    title: 'Community platform',
                                    text: 'Add a community platform so people can post and interact with each other.'
                                }
                            },
                            {
                                type: 'taggedCard',
                                content: {
                                    tag: 'Hypothesis 2',
                                    title: 'Offer rewards',
                                    text: 'Offer rewards upon completion of a deal or inviting friends.',
                                }
                            },
                        ]
                    },
                    {
                        type: 'text',
                        content: 'We presented some ideas to enhance user engagement, and after thorough research and discussion, we narrowed our focus to the two most feasible, readily achievable, and impactful options.'
                    }
                ]
            }
        },
        {
            type: 'titledSection',
            content: {
                title: 'What the broker says',
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
            content: 'How might we enhance user engagement after registration through community engagement?',
        },
        {
            type: 'titledSection',
            content: {
                title: 'Feature ideation',
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
                                    caption: '1. Ask questions and answer questions'
                                }
                            },
                            {
                                type: 'captionedIcon',
                                content: {
                                    path: '/projects/broker/feature_ideation_box.svg',
                                    description: 'Icon of a box',
                                    caption: '2. Share experiences'
                                }
                            },
                            {
                                type: 'captionedIcon',
                                content: {
                                    path: '/projects/broker/feature_ideation_learn_skill.svg',
                                    description: 'Icon of a computer link',
                                    caption: '3. Learn new sales skills'
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
            content: {
                title: 'Design outcomes',
                body: [
                    {
                        type: 'text',
                        content: 'Using the knowledge from my initial analysis and conversations with the design team, I sketched various iterations and wireframes for the feature.'
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
        //TODO: missing section
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
            content: 'Tools and utility are the most important things for agents.\n' +
                '-> “poster creation tool is the top needs for agent.”'
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
                        content: 'Using the knowledge from my initial analysis and conversations with the design team, I sketched various iterations and wireframes for the feature.'
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
                    content: '* When modifying real estate information, a pop-up window will be shown to modify it before.\n\n\n' +
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
                                    caption: 'Daily active agents was from 20k to 35k',
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
                                    caption: 'Community section visitor from poster increased 20%',
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
                                    description: 'Housing viewers stat',
                                    caption: 'Number of housing viewers increased 15%',
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
                title: 'Next step:',
                body: [
                    {
                        type: 'text',
                        content: 'From this project I gained a deeper understanding of user-centered design and learned how important it is to delve deep into users’ daily lives to discover real user needs.'
                    }
                ]
            }
        },
    ]
}

const projects = [
    broker_app
]

export default projects;