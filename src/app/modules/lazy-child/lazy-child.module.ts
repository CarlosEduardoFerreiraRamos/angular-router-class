import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { FirstLazyComponent } from "../../components/first-lazy/first-lazy.component";
import { SecondLazyComponent } from "../../components/second-lazy/second-lazy.component";
import { LazyChildRouterComponent } from "../../components/lazy-child-router/lazy-child-router.component";

const child: Route[] = [
  {
    path: "",
    component: LazyChildRouterComponent,
    children: [
      { path: "a", component: FirstLazyComponent },
      { path: "b", component: SecondLazyComponent }
    ]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(child)],
  declarations: [
    FirstLazyComponent,
    SecondLazyComponent,
    LazyChildRouterComponent
  ]
})
export class LazyChildModule {}
