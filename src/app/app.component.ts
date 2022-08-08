import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, map, merge, Observable } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly isLoading$ = this.loadingService.isLoading$;
  readonly errorsReported$ = this.loadingService.errorsReported$;
  readonly errors$ = this.loadingService.errors$;
  readonly displayComponent$: Observable<boolean> = combineLatest([this.isLoading$, this.errorsReported$],
    (isLoading, errorsReported) => !isLoading && !errorsReported);
  readonly displayErrors$: Observable<boolean> = combineLatest([this.isLoading$, this.errorsReported$],
    (isLoading, errorsReported) => !isLoading && errorsReported);

  constructor(private readonly loadingService: LoadingService) {}
}
