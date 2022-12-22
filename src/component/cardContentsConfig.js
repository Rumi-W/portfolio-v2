import React from 'react'
import CategoryIcon from '@material-ui/icons/CategoryTwoTone'
import PermMediaIcon from '@material-ui/icons/PermMediaTwoTone'
import gitHubIcon from '../assets/GitHub-Mark-32px.png'
import linkedInIcon from '../assets/LI-In-Bug-32.png'

export const contents = [
    {
        front: {
            title: 'Skills',
            icon: <CategoryIcon style={{ fontSize: '100px' }} />,
            iconSm: <PermMediaIcon style={{ fontSize: '50px' }} />
        },
        back: [
            {
                title: 'Front-end development (9 years)',
                content: 'JavaScript, React, Redux, React Router, Material UI, Git, Docker, Agile Development',
                linksRepo: [],
                links: []
            },
            {
                title: 'Back-end development (3 years)',
                content: `Node, AWS (Serverless, Lambda, API Gateway, CloudFront, DynamoDB, Serverless, 
                  SQS, SES, ECS, S3, EC2, ELB, Cognito, CloudWatch), Python, Java, PostgreSQL`,
                linksRepo: [],
                links: []
            }
        ]
    },
    {
        front: {
            title: 'Portfolio',
            icon: <PermMediaIcon style={{ fontSize: '100px' }} />,
            iconSm: <PermMediaIcon style={{ fontSize: '50px' }} />
        },
        back: [
            {
                title: 'Personal projects',
                content: '',
                linksRepo: [
                    {
                        id: 'repo-2',
                        title: 'React18/Redux',
                        proj: 'Demo',
                        projUrl: 'https://rumi-w.github.io/albums/',
                        repo: 'Repository',
                        repoUrl: 'https://github.com/Rumi-W/albums'
                    },
                    {
                        id: 'repo-1',
                        title: 'React16/Redux',
                        proj: 'Demo',
                        projUrl: 'https://rumi-w.github.io/build-a-burger/',
                        repo: 'Repository',
                        repoUrl: 'https://github.com/Rumi-W/build-a-burger'
                    }
                ],
                links: []
            },
            {
                title: 'Links',
                content: '',
                linksRepo: [],
                links: [
                    { id: 'link-1', icon: gitHubIcon, alt: 'GitHub', url: 'https://github.com/Rumi-W' },
                    {
                        id: 'link-2',
                        icon: linkedInIcon,
                        alt: 'LinkedIn',
                        url: 'https://www.linkedin.com/in/harumi-warner-4a22664'
                    }
                ]
            }
        ]
    }
]
