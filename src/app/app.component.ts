import { Location } from "@angular/common";
import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { MenuDataStorageService } from "./services/menu-data-storage.service";
import { MenuService } from "./services/menu.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  isOpen = false;

  isListOpen = false;

  constructor(
    private route: Router,
    private location: Location,
    private menu: MenuDataStorageService
  ) { }

  navigate() {
    this.route
      .navigate(["lazy"], {
        queryParams: { id: 1 },
        skipLocationChange: true
      })

  }

  loadModule() {
    import("./modules/lazy-child/lazy-child.module").then(
      m => m.LazyChildModule
    )
  }

  moveMenu(menuPage) {
    this.menu.set(menuPage);
  }

  menuList() {
    return this.menu.get();
  }
}

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
 *

 moveMenu(menuPage) {
    this.menu.set(menuPage)
  }

  menuList() {
    return this.menu.get()
  }

  toSub() {
    this.route.navigate(["", { outlest: { sub: [""] } }]);
  }

 */
