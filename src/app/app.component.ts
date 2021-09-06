import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SceneService } from './services/scene.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  @ViewChild('canvas', {static: true})
  public canvas!: ElementRef<HTMLCanvasElement>;

  constructor(private readonly sceneService: SceneService) {}

  ngAfterContentInit () {
    this.sceneService.initialize(this.canvas);
  }

}
