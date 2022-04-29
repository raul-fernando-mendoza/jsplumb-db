import { AfterViewInit, Component } from '@angular/core';
import { JsplumbService } from './jsplumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  constructor(private jsplumbService: JsplumbService){

  }

  ngAfterViewInit(): void {
    var instance = this.jsplumbService.getInstance()
    instance.setContainer("diagram");
    instance.registerConnectionTypes({
      "red-connection": {
        paintStyle: {stroke: "red", strokeWidth: 5},
        hoverPaintStyle: {stroke: "red", strokeWidth: 10},
        connector: "Flowchart"
      }
    })
    instance.draggable("control1", {"containment": "true"})
    instance.addEndpoint("control1", {
      endpoint: "Dot",  // rectangle, blank, image
      anchor: ["RightMiddle"],
      isSource: true,
      connectionType: "red-connection",
      maxConnections:1
    });  
    instance.addEndpoint("control2", {
      endpoint: "Dot",
      anchor: ["LeftMiddle"],
      isTarget: true,
      connectionType: "red-connection",
      maxConnections:1
    });      
  }
  title = 'jsplumb-test';
}
