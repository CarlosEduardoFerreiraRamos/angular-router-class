import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Route } from "@angular/router";
import { FirstPageComponent } from "./components/first-page/first-page.component";
import { SecondPageComponent } from "./components/second-page/second-page.component";
import { FirstChildComponent } from "./components/first-child/first-child.component";
import { SecondChildComponent } from "./components/second-child/second-child.component";
import { NestedChildRouterComponent } from "./components/nested-child-router/nested-child-router.component";
import { SubNavOutletOneComponent } from "./components/sub-nav-outlet-one/sub-nav-outlet-one.component";
import { SubNavOutletMainComponent } from "./components/sub-nav-outlet-main/sub-nav-outlet-main.component";
import { SubNavOutletTwoComponent } from "./components/sub-nav-outlet-two/sub-nav-outlet-two.component";
import { SubNavOutletThreeComponent } from "./components/sub-nav-outlet-three/sub-nav-outlet-three.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuService } from "./services/menu.service";
import { MenuDataStorageService } from "./services/menu-data-storage.service";
import { APP_BASE_HREF } from "@angular/common";

const child: Route[] = [
  { path: "a", component: FirstPageComponent },
  { path: "b", component: SecondPageComponent },
  {
    path: "children",
    children: [
      { path: "a", component: FirstChildComponent },
      { path: "b", component: SecondChildComponent }
    ]
  },
  {
    path: "nested",
    component: NestedChildRouterComponent,
    children: [
      { path: "a", component: FirstChildComponent },
      { path: "b", component: SecondChildComponent }
    ]
  },
  {
    path: "lazy",
    loadChildren: () =>
      import("./modules/lazy-child/lazy-child.module").then(
        m => m.LazyChildModule
      )
  },
  { outlet: "sub", component: SubNavOutletOneComponent, path: "sub-route-one" },
  {
    path: "sub-sub-one-outlet",
    component: SubNavOutletOneComponent,
    outlet: "sub"
  },
  {
    path: "sub-sub-two-outlet",
    component: SubNavOutletTwoComponent,
    outlet: "sub"
  },
  {
    path: "sub-sub-three-outlet",
    component: SubNavOutletThreeComponent,
    outlet: "sub"
  },
  { path: "**", redirectTo: "a" }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(child)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FirstPageComponent,
    SecondPageComponent,
    FirstChildComponent,
    SecondChildComponent,
    NestedChildRouterComponent,

    SubNavOutletOneComponent,
    SubNavOutletMainComponent,
    SubNavOutletTwoComponent,
    SubNavOutletThreeComponent
  ],
  bootstrap: [AppComponent],
  providers: [MenuDataStorageService, { provide: APP_BASE_HREF, useValue: '' }]
})
export class AppModule { }

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *

 {
    path: "sub-sub-outlet",
    component: SubNavOutletMainComponent,
    outlet: "sub"
  },
  {
    path: "sub-sub-one-outlet",
    component: SubNavOutletOneComponent,
    outlet: "sub"
  },
  {
    path: "sub-sub-two-outlet",
    component: SubNavOutletTwoComponent,
    outlet: "sub"
  },
  {
    path: "sub-sub-three-outlet",
    component: SubNavOutletThreeComponent,
    outlet: "sub"
  },


 */

/**
 providers: [MenuService]
 */
