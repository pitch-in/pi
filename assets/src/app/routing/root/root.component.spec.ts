import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppModule } from 'app/app.module';
import { RootComponent } from './root.component';
import { APP_BASE_HREF } from '@angular/common';

describe('RootComponent', () => {
  let fixture: ComponentFixture<RootComponent>;
  let component: RootComponent;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppModule],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
      }).compileComponents();

      fixture = TestBed.createComponent(RootComponent);
      component = fixture.debugElement.componentInstance;
    })
  );
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
