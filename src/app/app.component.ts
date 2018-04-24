import { Component, ViewChild, ElementRef, TemplateRef, ViewContainerRef, OnInit, AfterViewInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {


  title = 'app';

  @ViewChild("span") span: ElementRef;

  @ViewChild("template", { read: TemplateRef }) template: TemplateRef<any>;

  @ViewChild("container", { read: ViewContainerRef }) container: ViewContainerRef;


  constructor(private renderer: Renderer2) {

    console.log(this.span);
    console.log(this.template);
    console.log(this.container);

  }



  ngAfterViewInit(): void {

    console.log(this.span);
    console.log(this.template);
    console.log(this.container);

    
  }
  
  
  ngOnInit(): void {
    
    this.container.createEmbeddedView(this.template, { $implicit: { name: "Blender 3.0" } });

    this.renderer.addClass(this.span.nativeElement, "sample");


  }














}
