import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent} from './hello/hello.component';
import { CmdComponentComponent } from './cmd-component/cmd-component.component'
import { ClientesModule } from './clientes/clientes.module'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CmdComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
