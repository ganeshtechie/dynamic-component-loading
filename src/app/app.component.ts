import { Component, ElementRef, TemplateRef, ViewContainerRef, OnInit, AfterViewInit, Renderer2, ViewChild, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef } from '@angular/core';
import { HomeComponent } from './home/home.component';


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

  @ViewChild("homecomponent", { read: ViewContainerRef }) homecomponent: ViewContainerRef;


  constructor(private renderer: Renderer2, 
    private componentFactoryResolver: ComponentFactoryResolver) {

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
    
    let viewRef: EmbeddedViewRef<any> = this.container.createEmbeddedView(this.template,   { name: "Blender 3.0" } );

    this.renderer.addClass(this.span.nativeElement, "sample");

  }



  loadComponent($event){

    let factory = this.componentFactoryResolver.resolveComponentFactory(HomeComponent);

    console.log(factory);
    


    let componentRef: ComponentRef<HomeComponent> = this.homecomponent.createComponent(factory);

    let homeComponentInstance = <HomeComponent>componentRef.instance;


    homeComponentInstance.title = "Home Component";


  }














}
