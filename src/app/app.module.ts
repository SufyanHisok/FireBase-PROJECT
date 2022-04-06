import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule} from './Material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavtopComponent } from './navtop/navtop.component';
import { HomeComponent } from './home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { StudentService } from './services/student.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    NavtopComponent,
    HomeComponent
  ],
  imports: [ 
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxIntlTelInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
