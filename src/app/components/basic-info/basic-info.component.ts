import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BasicInfo } from 'src/app/model/basic.info';
import { BasicInfoService } from 'src/app/services/basic.info.service';

@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent {
  readonly basicInfo$: Observable<BasicInfo> = this.basicInfoService.basicInfo;
  readonly displayName$: Observable<string> = this.basicInfo$.pipe(
    map((basicInfo) => basicInfo.displayName)
  );
  readonly displayTitle$: Observable<string> = this.basicInfo$.pipe(
    map((basicInfo) => basicInfo.displayTitle)
  );

  constructor(readonly basicInfoService: BasicInfoService) {}
}
