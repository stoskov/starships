import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("DrawingPad", () => require("nativescript-drawingpad").DrawingPad);

@Component({
    selector: "DrawingPad",
    template: `
      <ScrollView>
          <StackLayout>
              <DrawingPad #DrawingPad 
              height="400" 
              id="drawingPad" 
              penColor="#ff4081" penWidth="3">
              </DrawingPad>
  
              <StackLayout orientation="horizontal">
                  <Button text="Get Drawing" (tap)="getMyDrawing()"></Button>
                  <Button text="Clear Drawing" (tap)="clearMyDrawing()"></Button>
              </StackLayout>
          </StackLayout>
      </ScrollView>
      `
})
export class DrawingPadComponent {
    @ViewChild("DrawingPad") DrawingPad: ElementRef;

    getMyDrawing(args) {
        // get reference to the drawing pad
        let pad = this.DrawingPad.nativeElement;

        // then get the drawing (Bitmap on Android) of the drawingpad
        let drawingImage;
        pad.getDrawing()
            .then(
                (data) => {
                    console.log(data);
                    drawingImage = data;
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    clearMyDrawing(args) {
        var pad = this.DrawingPad.nativeElement;
        pad.clearDrawing();
    }
}