import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import { ContactInfo } from "../model/contact.info";

export const CONTACT_LIST: ContactInfo[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/oscar-u-camacho",
    icon: faLinkedinIn
  },
  {
    name: "GitHub",
    url: "https://www.github.com/OscarCamacho",
    icon: faGithub
  },
  {
    name: "Mail",
    url: "mailto:oscar.u.camacho.hernandez@gmail.com",
    icon: faEnvelope
  },
  {
    name: "Get my downloadable CV in English!",
    url: "https://drive.google.com/file/d/1RZ-PFkzu4XadYIJlIRPHvY8ghirkEA8O/view?usp=sharing",
    icon: faFile
  },
  {
    name: "Get my downloadable CV in Spanish!",
    url: "https://drive.google.com/file/d/16q0KZLvvSp9Aw_eNbUUpLobOlLYWGu-6/view?usp=sharing",
    icon: faFile
  }
];
