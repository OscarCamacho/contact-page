import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BasicInfo } from 'src/app/model/basic.info';
import { BasicInfoService } from 'src/app/services/basic.info.service';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  readonly basicInformation$: Observable<BasicInfo> = this.basicInfoService.basicInfo;
  readonly displayName$: Observable<string> = this.basicInformation$.pipe(
    map(basicInfo => basicInfo.displayName));

  constructor(readonly basicInfoService: BasicInfoService) {}

}
