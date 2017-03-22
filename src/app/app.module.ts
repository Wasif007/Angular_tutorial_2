import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewUserListComponent } from './new-user-list/new-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NewUserComponent,
    NewUserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
