import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonEngine } from '@angular/ssr/node';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LoaderServiceService } from './shared/services/loader-service.service';

describe('AppComponent', () => {
  let loadingService : LoaderServiceService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent , CommonModule , LoadingComponent],
      providers:[LoaderServiceService]
    }).compileComponents();
    loadingService = TestBed.inject(LoaderServiceService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'eccomerence' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('eccomerence');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, eccomerence');
  });
});
