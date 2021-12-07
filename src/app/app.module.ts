import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { ComposeMallComponent } from './compose-mall/compose-mall.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEmployeeComponent } from './contact-employee/contact-employee.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { HomeComponent } from './home/home.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MailboxDetailComponent } from './mailbox-detail/mailbox-detail.component';
import { ModalsComponent } from './modals/modals.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipPopoverComponent } from './tooltip-popover/tooltip-popover.component';
import { UserCardsComponent } from './user-cards/user-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonsComponent,
    CardsComponent,
    ChatAppComponent,
    ComposeMallComponent,
    ContactDetailComponent,
    ContactEmployeeComponent,
    ContactGridComponent,
    HomeComponent,
    MailboxComponent,
    MailboxDetailComponent,
    ModalsComponent,
    PropertyListComponent,
    SupportTicketComponent,
    TabsComponent,
    TooltipPopoverComponent,
    UserCardsComponent
  
   
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
