import { LogoOrientation } from "../model/logo.orientation";
import { ProficiencyLevel } from "../model/proficiency.level";
import { Skill } from "../model/skill";


export const SKILLS: Skill[] = [
    {
      name: "Java",
      logoPath: "assets/java.png",
      logoOrientation: LogoOrientation.PORTRAIT,
      description: "As my main skill, most of my professional experience is " +
                    "with this language; thus, it holds a special place in my heart",
      proficiency: ProficiencyLevel.ADVANCED,
      yearsOfExperience: 4.5,
      frameworks: [
        {
          name: "Spring MVC",
          logoPath: "assets/springmvc.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 3.5
        },
        {
          name: "Spring Boot",
          logoPath: "assets/springboot.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 2.5
        },
        {
          name: "Spring Data JPA",
          logoPath: "assets/springdata.png",
          logoOrientation: LogoOrientation.PORTRAIT,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 2.5
        },
        {
          name: "Hibernate",
          logoPath: "assets/hibernate.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 1
        },
        {
          name: "Flowable",
          logoPath: "assets/flowable.jpg",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.NOVICE,
          yearsOfExperience: 0.5
        },
        {
          name: "JUnit",
          logoPath: "assets/junit.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 3.5
        },
        {
          name: "Guice",
          logoPath: "assets/guice.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 1
        }
      ]
    },
    {
      name: "JavaScript",
      logoPath: "assets/javascript.png",
      logoOrientation: LogoOrientation.SQUARE,
      description: "Being one of the most popular languages for web development, my experience with it " +
                    "has been a major part of my career. I've use",
      proficiency: ProficiencyLevel.ADVANCED,
      yearsOfExperience: 4.5,
      frameworks: [
        {
          name: "Vanilla",
          logoPath: "assets/javascript.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 4.5
        },
        {
          name: 'AngularJS',
          logoPath: "assets/angujarjs.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 2
        },
        {
          name: 'ExpressJS',
          logoPath: "assets/expressjs.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 2
        },
        {
          name: "Angular",
          logoPath: "assets/angular.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 3
        },
        {
          name: "React",
          logoPath: "assets/react.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.NOVICE,
          yearsOfExperience: 0.5
        },
        {
          name: "VueJS",
          logoPath: "assets/vuejs.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.NOVICE,
          yearsOfExperience: 0.5
        },
        {
          name: "Jasmine",
          logoPath: "assets/jasmine.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 3
        },
        {
          name: "Karma",
          logoPath: "assets/karma.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 3
        },
        {
          name: "Mocha",
          logoPath: "assets/mocha.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 2
        },
        {
          name: "Chai",
          logoPath: "assets/chai.png",
          logoOrientation: LogoOrientation.SQUARE ,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 2
        },
        {
          name: "Ionic",
          logoPath: "assets/ionic.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 1.5
        },
      ]
    },
    {
      name: "CSS",
      logoPath: "assets/css.png",
      logoOrientation: LogoOrientation.PORTRAIT,
      proficiency: ProficiencyLevel.ADVANCED,
      yearsOfExperience: 3,
      frameworks: [
        {
          name: "Bootstrap",
          logoPath: "assets/bootstrap.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 3
        },
        {
          name: "Materialize",
          logoPath: "assets/materialize.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.ADVANCED,
          yearsOfExperience: 3
        },
      ]
    },
    {
      name: "Go",
      logoPath: "assets/go.png",
      logoOrientation: LogoOrientation.LANDSCAPE,
      proficiency: ProficiencyLevel.INTERMIDIATE,
      yearsOfExperience: 2
    },
    {
      name: "Databases",
      logoPath: "assets/database.png",
      logoOrientation: LogoOrientation.SQUARE,
      proficiency: ProficiencyLevel.ADVANCED,
      yearsOfExperience: 4.5,
      frameworks: [
        {
          name: "MS SQL Server",
          logoPath: "assets/sqlserver.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 4
        },
        {
          name: "PostgreSQL",
          logoPath: "assets/postgresql.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 4.5
        },
        {
          name: "Oracle SQL",
          logoPath: "assets/oracle.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 4.5
        },
        {
          name: "MongoDB",
          logoPath: "assets/mongodb.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 2.5
        },
      ]
    },
    {
      name: "Package Management",
      logoPath: "assets/pkgmng.png",
      logoOrientation: LogoOrientation.SQUARE,
      proficiency: ProficiencyLevel.INTERMIDIATE,
      yearsOfExperience: 3,
      frameworks: [
        {
          name: "Maven",
          logoPath: "assets/maven.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 3
        },
        {
          name: "Bazel",
          logoPath: "assets/bazel.png",
          logoOrientation: LogoOrientation.SQUARE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 1
        },
        {
          name: "NPM",
          logoPath: "assets/npm.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 3
        },
      ]
    },
    {
      name: "Git",
      logoPath: "assets/git.png",
      logoOrientation: LogoOrientation.SQUARE,
      proficiency: ProficiencyLevel.ADVANCED,
      yearsOfExperience: 4.5,
    },
    {
      name: "CI/CD",
      logoPath: "assets/cicd.png",
      logoOrientation: LogoOrientation.LANDSCAPE,
      proficiency: ProficiencyLevel.INTERMIDIATE,
      yearsOfExperience: 3,
      frameworks: [
        {
          name: "Docker",
          logoPath: "assets/docker.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 3
        },
        {
          name: "Kubernetes",
          logoPath: "assets/kubernetes.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 1
        },
      ]
    },
    {
      name: "SDLC Frameworks",
      logoPath: "assets/sdlc.png",
      logoOrientation: LogoOrientation.SQUARE,
      proficiency: ProficiencyLevel.INTERMIDIATE,
      yearsOfExperience: 4.5,
      frameworks: [
        {
          name: "Scrum",
          description: "Certified as Scrum master",
          logoPath: "assets/scrum.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 3
        },
        {
          name: "Waterfall",
          logoPath: "assets/waterfall.png",
          logoOrientation: LogoOrientation.LANDSCAPE,
          proficiency: ProficiencyLevel.INTERMIDIATE,
          yearsOfExperience: 2
        },
      ]
    },
  ];
