import TaskApp from '../assets/taskApp.png'
import SisfoSchool from '../assets/sisfoSchool.png'
import whatsappBot from '../assets/whatsappBot.png'
import SimRs from '../assets/simrs.png'
import QuranPlayer from '../assets/quranPlayer.png'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Tailwind from '../assets/tailwind.png'
import JS from '../assets/js.png'
import Reactjs from '../assets/reactjs.png'
import Nextjs from '../assets/nextjs.png'
import Typescript from '../assets/typescript.png'
import Boostrap from '../assets/boostrap.png'
// import Jquery from '../assets/jquery.png'

export const EXPERIENCE = [
    {
        id:1,
        dateWork: 'Mei 2023 - Present',   
        type:'(Paruhwaktu)',     
        company: 'PT. Ragdalion Revolusi Industri',
        position: 'Frontend Developer',
        desc: 'Create new features and Slicing design to code'
    },
    {
        id:2,
        dateWork: 'Des 2021 - Present',
        type:'(Purnawaktu)',        
        company: 'PT. Loko Sistem Terintegrasi',
        position: 'Web Developer',
        desc: 'Develop and maintain features, Create reusable code and Guarantee the technical feasibility of the UI/UX design'
    }
]

export const SKILLS = [
    {
        id: 1,
        title: 'HTML',
        img: HTML,
    },
    {
        id: 2,
        title: 'CSS',
        img: CSS,
    },
    {
        id: 3,
        title: 'Tailwind CSS',
        img: Tailwind,
    },
    {
        id: 4,
        title: 'Boostrap',
        img: Boostrap,
    },
    {
        id: 5,
        title: 'JavaScript',
        img: JS,
    },
    // {
    //     id: 6,
    //     title: 'Jquery',
    //     img: Jquery,
    // },
    {
        id: 7,
        title: 'React JS',
        img: Reactjs,
    },
    {
        id: 8,
        title: 'Next JS',
        img: Nextjs,
    },
    {
        id: 9,
        title: 'Typescript',
        img: Typescript,
    },
]

export const PORTFOLIOS = [
    {
        id: 1,
        title: 'Task App',
        desc: 'Task app is a note management app built with React Js and Talwind css technology',
        img: TaskApp,
        link: {
            demo: 'https://tasks-todosapp.netlify.app',
            github: 'https://github.com/sandestareza/task-app'
        }
    },
    {
        id: 2,
        title: 'Sisfo School',
        desc: 'Responsive website landing page as an effective promotional medium and attracts the attention of clients',
        img: SisfoSchool,
        link: {
            demo: 'https://sisfoschool.loko.co.id',
            github: null
        }
    },
    {
        id: 3,
        title: 'Whatsapp Bot',
        desc: 'Whatsapp bot is a chat bot that has been integrated with ChatGPT built using Node Js technology',
        img: whatsappBot,
        link: {
            demo: null,
            github: 'https://github.com/sandestareza/whatsapp-bot'
        }
    },
    {
        id: 4,
        title: 'SIM RS',
        desc: 'Responsive website landing page as an effective promotional medium and attracts the attention of clients',
        img: SimRs,
        link: {
            demo: 'https://simrsloko.loko.co.id',
            github: null
        }
    },
    {
        id: 5,
        title: 'Quran Player',
        desc: 'Quran player is an audio media player application built using Next Js technology',
        img: QuranPlayer,
        link: {
            demo: 'https://quranplayer-media.netlify.app',
            github: 'https://github.com/sandestareza/Quran-Player'
        }
    },
]