import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { DriverComponent } from './driver/driver.component';
import { PhoneComponent } from './phone/phone.component';
import { CardComponent } from './services/card/card.component';
import { HudComponent } from './hud/hud.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { HeadComponent } from './head/head.component';
import { SpaceComponent } from './space/space.component';
import { JoinUsComponent } from './join-us/join-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ServicesComponent,
    DriverComponent,
    PhoneComponent,
    CardComponent,
    HudComponent,
    RoadmapComponent,
    HeadComponent,
    SpaceComponent,
    JoinUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
