import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    HostListener,
    ElementRef,
} from '@angular/core';
import {EnvironmentService} from '../../services/environment.service';
import {MenuItem} from '../../entities/menu-item';
import {Observable} from 'rxjs';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
    private _observable: Observable<MenuItem[]>;
    private _menuItems: MenuItem[];
    private _menuIcon;
    private _show = false;
    private _lastHover: number;

    constructor(
        private service: EnvironmentService,
        private eRef: ElementRef
    ) {}

    ngOnInit(): void {
        this._observable = this.service.getValue('menuItems');
        this._observable.subscribe((menuItems: MenuItem[]) => {
            this._menuItems = menuItems;
        });
        this._menuIcon = faBars;
    }

    get menuItems(): MenuItem[] {
        return this._menuItems;
    }
    get observable(): Observable<MenuItem[]> {
        return this._observable;
    }
    get menuIcon(): any {
        return this._menuIcon;
    }
    get show(): boolean {
        return this._show;
    }

    toggle(): void {
        if (!this._lastHover || Date.now() - this._lastHover > 1000) {
            this._show = !this._show;
            this._lastHover = Date.now();
        }
    }

    @HostListener('document:click', ['$event'])
    clickOutsideListener($event: Event): void {
        if (
            this._show &&
            !(
                this.eRef.nativeElement.contains($event.target) ||
                this.eRef.nativeElement === $event.target
            )
        ) {
            this.toggle();
        }
    }
}
