import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ContactInfo } from "../model/contact.info";

export const CONTACT_LIST: ContactInfo[] = [
  {
    name: "LinkedIn",
    url: "linkedin.com/in/oscar-u-camacho",
    icon: faLinkedinIn
  },
  {
    name: "GitHub",
    url: "github.com/OscarCamacho",
    icon: faGithub
  },
  {
    name: "Mail",
    url: "mailto:oscar.u.camacho.hernandez@gmail.com",
    icon: faEnvelope
  }
];
