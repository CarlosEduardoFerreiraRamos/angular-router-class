import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-lazy-child-router",
  templateUrl: "./lazy-child-router.component.html",
  styleUrls: ["./lazy-child-router.component.css"]
})
export class LazyChildRouterComponent implements OnInit {
  constructor(private act: ActivatedRoute) {}

  ngOnInit() {}
}
