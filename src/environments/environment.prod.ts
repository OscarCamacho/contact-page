import {
    faHome,
    faCalendarCheck,
    faChartLine,
    faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons';

export const environment = {
    production: true,
    menuItems: [
        {
            name: 'Home',
            routeLink: '/homescreen',
            icon: faHome,
        },
        {
            name: 'Professional Experience',
            routeLink: '/xp',
            icon: faCalendarCheck,
        },
        {
            name: 'Skillset',
            routeLink: '/skills',
            icon: faChartLine,
        },
        {
            name: 'Contact me!',
            routeLink: '/contact',
            icon: faEnvelopeOpen,
        },
    ],
    contactMail: 'oscar.u.camacho.hernandez@gmail.com',
};
