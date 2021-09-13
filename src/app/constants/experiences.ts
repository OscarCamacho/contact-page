import { JobExperience } from "../model/job.experience";

export const EXPERIENCES: JobExperience[] = [
  {
    roleName: "Java Intern",
    organization: "Praxis",
    description: "As my first job, I strived to learn many aspects of the SDLC",
    roles: [
      "Java Developer",
      "Database analyst",
      "Application Support L2"
    ],
    startDate: new Date(2017,2,1),
    endDate: new Date(2018,6,1),
    technologyStack: [
      "Java 5",
      "Java 6",
      "Java 7",
      "Java 8",
      "JSP",
      "WebLogic 11",
      "JBoss",
      "Websphere",
      "Monolithic Arquitecture",
      "MS SQL Server",
      "Oracle DB 11",
      "IBM MQ",
      "JavaFX",
      "Vanilla JS"
    ],
    achievements: [
      "Creation of environment simulation installer program using JavaFX"
    ],
  },
  {
    roleName: "Java Jr Developer",
    organization: "Xideral",
    description: "I quickly tried to learn new technologies and design " +
                  "paterns to improve the quality of my code. I got the " +
                  "opportunity to certify myself as Scrum Master",
    roles: [
      "Java Developer",
      "Database analyst",
      "User Support L1, L2, L3",
    ],
    startDate: new Date(2018,6,1),
    endDate: new Date(2019,4,1),
    technologyStack: [
      "Java 7",
      "Java 8",
      "Spring MVC",
      "Spring Boot",
      "JSP",
      "Bootstrap",
      "Angular",
      "React",
      "Vue JS",
      "Ionic",
      "Apache Tomcat",
      "Monolithic Arquitecture",
      "Microservices Arquitecture",
      "MS SQL Server",
      "Vanilla JS"
    ],
    achievements: [
      "Collaborated in the team that first implemented Scrum company wide",
      "Collaborated in the migration to microservice arquitecture",
      "Collaborated in the creation of a modernized front end with Angular",
      "Collaborated in the creation of a mobile application with Ionic"
    ],
  },
  {
    roleName: "Java Fullstack Developer",
    organization: "Allutiq",
    description: "After learning to use frontend technologies; I seeked a position " +
                  "where I could use my knowledge and expand it with greater challenges.",
    roles: [
      "Java Microservices Developer",
      "Angular Developer",
      "Javascript Developer"
    ],
    startDate: new Date(2019,5,1),
    endDate: new Date(2019,9,1),
    technologyStack: [
      "Java 8",
      "Spring Boot",
      "Bootstrap",
      "Angular",
      "Microservices Arquitecture",
      "MS SQL Server"
    ],
    achievements: [
      "Created an Angular application from scratch",
      "Created a Javascript auth microservice",
      "Implemented a new framework into an existing angular applciation"
    ],
  },
  {
    roleName: "Java FullStack Developer",
    organization: "Wipro Technologies",
    description: "At this position, I learned a lot about management a developer team and working " +
                "at a multicultural organization. I also helped in defining a better quality code styleguide " +
                "following best practices.",
    roles: [
      "Java Developer",
      "AngularJS developer",
    ],
    startDate: new Date(2019,9,1),
    endDate: new Date(2020,8,1),
    technologyStack: [
      "Java 7",
      "Spring MVC",
      "JSP",
      "Bootstrap",
      "Apache Tomcat",
      "Monolithic Arquitecture",
      "MS SQL Server",
      "Vanilla JS"
    ],
    achievements: [
      "Got the oportunity to help in the management of a development team",
      "Helped defined a better coding styleguide for the development team",
      "Helped define a better documentation guideline for the development team"
    ],
  },
  {
    roleName: "Senior Software Engineer Developer",
    organization: "EPAM Systems",
    description: "My current job. I really like contribuiting to one of the" +
                  "largest and most recognizable web search engines",
    roles: [
      "Java Developer",
      "Angular Developer"
    ],
    startDate: new Date(2018,6,1),
    endDate: new Date(2019,4,1),
    technologyStack: [
      "Java 8",
      "Angular",
      "Protocol Buffers",
      'gRPC',
      "Bazel",
      "Guice"
    ],
    achievements: [
      "Collaborated imparting a JavaScript programming course to non-developers",
      "More to come!"
    ],
  },
];
