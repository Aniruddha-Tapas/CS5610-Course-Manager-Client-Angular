import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { CourseServiceClient } from "./services/course.service.client";
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleServiceClient } from "./services/module.service.client";
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { LessonServiceClient } from "./services/lesson.service.client";
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { TopicServiceClient } from "./services/topic.service.client";
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetServiceClient} from "./services/widget.service.client";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserServiceClient} from "./services/user.service.client";
import { SectionListComponent } from './section-list/section-list.component';
import { SectionServiceClient} from "./services/section.service.client";
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SectionListComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
