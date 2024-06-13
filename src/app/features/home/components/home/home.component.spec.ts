import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { WalletLayoutComponent } from '@app/core/layout/wallet-layout/wallet-layout.component';
import { SharedModule } from '@app/shared/shared.module';
import { HomeService } from '../../services/home.service';
import { OnlineAuthenticationSIOPService } from '@app/core/services/online-authentication-siop.service';
import { DataService } from '@app/core/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CBOR HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ HomeComponent ]
      imports: [
        SharedModule, WalletLayoutComponent, HttpClientModule,BrowserAnimationsModule, NoopAnimationsModule
      ],
      providers: [
        // HttpService
        DataService,
        OnlineAuthenticationSIOPService,
        HomeService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
