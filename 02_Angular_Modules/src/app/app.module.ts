import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// import { FormsModule } from "@angular/forms";

import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
// import { CardComponent } from "./shared/card/card.component";
// import { TasksComponent } from "./tasks/tasks.component";
// import { TaskComponent } from "./tasks/task/task.component";
// import { NewTaskComponent } from "./tasks/new-task/new-task.component";

// Declarations: For Non-StandAlone Components
// Imports: For StandAlone Components and Also for Other Modules
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, UserComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    // FormsModule,
    SharedModule,
    TasksModule
    // HeaderComponent,
    // UserComponent,
    // TasksComponent
  ],
})
export class AppModule {}
