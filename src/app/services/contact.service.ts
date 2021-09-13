import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CONTACT_LIST } from "../constants/contact.list";
import { ContactInfo } from "../model/contact.info";

@Injectable({providedIn: "root"})
export class contactService {

  getContactList(): Observable<ContactInfo[]> {
    return of(CONTACT_LIST);
  }

}
