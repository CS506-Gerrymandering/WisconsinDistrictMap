import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRouting } from './app-routing/app-routing';
import { MapComponent } from './home/map/map.component';
import { TableComponent } from './home/table/table.component';
import { AboutComponent } from './about/about.component';
import { MetricGuideComponent } from './metric-guide/metric-guide.component';
import { DevGuideComponent } from './dev-guide/dev-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    TableComponent,
    AboutComponent,
    MetricGuideComponent,
    DevGuideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
