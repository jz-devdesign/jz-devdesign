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
    ]
}

const projects = [
    broker_app
]

export default projects;