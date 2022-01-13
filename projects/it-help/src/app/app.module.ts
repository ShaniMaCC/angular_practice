import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContentTemplateComponent } from './content-template/content-template.component';
import { MultiContentComponent } from './multi-content/multi-content.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHerosPipe } from './flying-heros.pipe';
import { ChildComponent } from './child/child.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTemplateComponent,
    MultiContentComponent,
    ExponentialStrengthPipe,
    FlyingHerosPipe,
    ChildComponent,
    TemplateVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
