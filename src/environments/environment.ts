// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {
    faHome,
    faCalendarCheck,
    faChartLine,
    faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons';
import {Skill} from 'src/app/base/entities/skill';

export const environment = {
    production: false,
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
            routeLink: '/skillset',
            icon: faChartLine,
        },
        {
            name: 'Contact me!',
            routeLink: '/contact',
            icon: faEnvelopeOpen,
        },
    ],
    contactMail: 'oscar.u.camacho.hernandez@gmail.com',
    skillset: [
        {
            name: 'Java',
            proficiency: 'Senior',
            experience: '3.5',
            description:
                'Most of my experience is based arround this Language.',
        },
        {name: 'JavaScript', proficiency: 'Junior', experience: '3.5'},
    ] as Skill[],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
