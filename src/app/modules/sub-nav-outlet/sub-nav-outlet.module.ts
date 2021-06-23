import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubNavOutletOneComponent } from "../../components/sub-nav-outlet-one/sub-nav-outlet-one.component";
import { SubNavOutletMainComponent } from "../../components/sub-nav-outlet-main/sub-nav-outlet-main.component";
import { Route, RouterModule } from "@angular/router";
import { SubNavOutletThreeComponent } from "../../components/sub-nav-outlet-three/sub-nav-outlet-three.component";
import { SubNavOutletTwoComponent } from "../../components/sub-nav-outlet-two/sub-nav-outlet-two.component";

const routes: Route[] = [
  {
    path: "",
    component: SubNavOutletMainComponent,
    children: [
      { path: "one", component: SubNavOutletOneComponent },
      { path: "two", component: SubNavOutletTwoComponent },
      { path: "three", component: SubNavOutletThreeComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    SubNavOutletOneComponent,
    SubNavOutletMainComponent,
    SubNavOutletTwoComponent,
    SubNavOutletThreeComponent
  ]
})
export class SubNavOutletModule {}
