import { ElementRef, Injectable, NgZone } from "@angular/core";
import { AmbientLight, BoxGeometry, Camera, GridHelper, Light, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, Scene, SphereGeometry, TextureLoader, WebGL1Renderer } from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

@Injectable({providedIn: "root"})
export class SceneService {

  private _debugMode = false;
  private _canvasRef!: ElementRef<HTMLCanvasElement>;
  private _renderer!: WebGL1Renderer;
  private _mainScene!: Scene;
  private _camera!: Camera;
  private _light!: Light;
  private _earth!: SphereGeometry;
  private _moon!: SphereGeometry;
  private _frameId!: number;
  private _controls!: OrbitControls;
  private readonly textureLoader: TextureLoader;

  constructor(private readonly ngZone: NgZone) {
    this.textureLoader = new TextureLoader();
  }

  set debugMode (flag: boolean) {
    this._debugMode = flag;
  }

  initialize(canvas: ElementRef<HTMLCanvasElement>): void {
    this._canvasRef = canvas;
    // Create the renderer and set it up
    this._renderer = new WebGL1Renderer({
      canvas: this._canvasRef.nativeElement,
      alpha: true,
      antialias: true
    });
    this._renderer.setSize(window.innerWidth, window.innerHeight);

    // Create main scene
    this._mainScene = new Scene();
    const background = this.textureLoader.load('assets/background.jpg');
    this._mainScene.background = background;

    // Create camera
    this._camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.setCameraPosition();
    this._mainScene.add(this._camera);

    // Create ilumination
    this._light = new AmbientLight(0xFFFFFF, 80);
    this._light.position.x = 100;
    this._mainScene.add(this._light);

    // Earth
    this._earth = new SphereGeometry(4);
    this._earth.rotateZ(0.30);
    const earthTexture = this.textureLoader.load('assets/earth.jpg');
    const earthMaterial = new MeshBasicMaterial({map: earthTexture, name: 'earth'});
    this._mainScene.add(new Mesh(this._earth, earthMaterial));

    //Moon
    this._moon = new SphereGeometry(1);
    this._moon.translate(15,2,0);
    this._moon.rotateZ(0.07);
    const moonTexture = this.textureLoader.load('assets/moon.jpg');
    const moonMaterial = new MeshBasicMaterial({map: moonTexture, name: 'moon'});
    this._mainScene.add(new Mesh(this._moon, moonMaterial));

    if (this._debugMode) {
      this._controls = new OrbitControls(this._camera, this._renderer.domElement);
      this._mainScene.add(new GridHelper(200,50));
    }

    this.animate();
  }

  private animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => this.render());
      }
      window.addEventListener('resize', () => this.onResize());
    });
  }

  private render (): void {
    this._frameId = requestAnimationFrame((time) => {
      this.render();
    });
    if (this._debugMode) {
      this._controls.update();
    }
    this._earth.rotateY(0.002);
    this._moon.rotateY(0.0003);
    this._renderer.render(this._mainScene, this._camera);
  }

  private onResize(): void {
    this._camera.updateMatrix();
    this._renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setCameraPosition (position: number = 1) {
    switch(position) {
      case 1:
      default:
        this._camera.translateZ(15);
        this._camera.translateX(3.5);
        this._camera.translateY(1);
        break;

    }
  }

}
