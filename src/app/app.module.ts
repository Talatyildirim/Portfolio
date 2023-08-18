import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { MenuComponent } from './menu/menu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    HeroComponent,
    ImpressumComponent,
    MenuComponent,
    PortfolioComponent,
    SkillsComponent,
    StartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
