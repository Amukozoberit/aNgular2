import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipePipe } from './pipe/pipe.pipe';
import { ClickDirectiveDirective } from './directives/click-directive.directive';
import { SearchComponent } from './Forms/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { GitInterfaceComponent } from './components/git-interface/git-interface.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RepoDesignComponent } from './components/repo-design/repo-design.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PipePipe,
    ClickDirectiveDirective,
    SearchComponent,
    AboutComponent,
    GitInterfaceComponent,
    NavbarComponent,
    RepoDesignComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
