"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("DrawingPad", function () { return require("nativescript-drawingpad").DrawingPad; });
var DrawingPadComponent = /** @class */ (function () {
    function DrawingPadComponent() {
    }
    DrawingPadComponent.prototype.getMyDrawing = function (args) {
        // get reference to the drawing pad
        var pad = this.DrawingPad.nativeElement;
        // then get the drawing (Bitmap on Android) of the drawingpad
        var drawingImage;
        pad.getDrawing()
            .then(function (data) {
            console.log(data);
            drawingImage = data;
        }, function (err) {
            console.log(err);
        });
    };
    DrawingPadComponent.prototype.clearMyDrawing = function (args) {
        var pad = this.DrawingPad.nativeElement;
        pad.clearDrawing();
    };
    tslib_1.__decorate([
        core_1.ViewChild("DrawingPad"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], DrawingPadComponent.prototype, "DrawingPad", void 0);
    DrawingPadComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "DrawingPad",
            template: "\n      <ScrollView>\n          <StackLayout>\n              <DrawingPad #DrawingPad \n              height=\"400\" \n              id=\"drawingPad\" \n              penColor=\"#ff4081\" penWidth=\"3\">\n              </DrawingPad>\n  \n              <StackLayout orientation=\"horizontal\">\n                  <Button text=\"Get Drawing\" (tap)=\"getMyDrawing()\"></Button>\n                  <Button text=\"Clear Drawing\" (tap)=\"clearMyDrawing()\"></Button>\n              </StackLayout>\n          </StackLayout>\n      </ScrollView>\n      "
        })
    ], DrawingPadComponent);
    return DrawingPadComponent;
}());
exports.DrawingPadComponent = DrawingPadComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2lnLXBhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkcmF3aWctcGFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBZ0Y7QUFDaEYsMEVBQXdFO0FBRXhFLGtDQUFlLENBQUMsWUFBWSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQyxVQUFVLEVBQTdDLENBQTZDLENBQUMsQ0FBQztBQXFCbkY7SUFBQTtJQXlCQSxDQUFDO0lBdEJHLDBDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2IsbUNBQW1DO1FBQ25DLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBRXhDLDZEQUE2RDtRQUM3RCxJQUFJLFlBQVksQ0FBQztRQUNqQixHQUFHLENBQUMsVUFBVSxFQUFFO2FBQ1gsSUFBSSxDQUNELFVBQUMsSUFBSTtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDLEVBQ0QsVUFBQyxHQUFHO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFFRCw0Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBdkJ3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQzswQ0FBYSxpQkFBVTsyREFBQztJQUR2QyxtQkFBbUI7UUFuQi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsb2lCQWVQO1NBQ04sQ0FBQztPQUNXLG1CQUFtQixDQXlCL0I7SUFBRCwwQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbnJlZ2lzdGVyRWxlbWVudChcIkRyYXdpbmdQYWRcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kcmF3aW5ncGFkXCIpLkRyYXdpbmdQYWQpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJEcmF3aW5nUGFkXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxTY3JvbGxWaWV3PlxuICAgICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgICAgPERyYXdpbmdQYWQgI0RyYXdpbmdQYWQgXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQwMFwiIFxuICAgICAgICAgICAgICBpZD1cImRyYXdpbmdQYWRcIiBcbiAgICAgICAgICAgICAgcGVuQ29sb3I9XCIjZmY0MDgxXCIgcGVuV2lkdGg9XCIzXCI+XG4gICAgICAgICAgICAgIDwvRHJhd2luZ1BhZD5cbiAgXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkdldCBEcmF3aW5nXCIgKHRhcCk9XCJnZXRNeURyYXdpbmcoKVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ2xlYXIgRHJhd2luZ1wiICh0YXApPVwiY2xlYXJNeURyYXdpbmcoKVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L1Njcm9sbFZpZXc+XG4gICAgICBgXG59KVxuZXhwb3J0IGNsYXNzIERyYXdpbmdQYWRDb21wb25lbnQge1xuICAgIEBWaWV3Q2hpbGQoXCJEcmF3aW5nUGFkXCIpIERyYXdpbmdQYWQ6IEVsZW1lbnRSZWY7XG5cbiAgICBnZXRNeURyYXdpbmcoYXJncykge1xuICAgICAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIHRoZSBkcmF3aW5nIHBhZFxuICAgICAgICBsZXQgcGFkID0gdGhpcy5EcmF3aW5nUGFkLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgLy8gdGhlbiBnZXQgdGhlIGRyYXdpbmcgKEJpdG1hcCBvbiBBbmRyb2lkKSBvZiB0aGUgZHJhd2luZ3BhZFxuICAgICAgICBsZXQgZHJhd2luZ0ltYWdlO1xuICAgICAgICBwYWQuZ2V0RHJhd2luZygpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgZHJhd2luZ0ltYWdlID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGNsZWFyTXlEcmF3aW5nKGFyZ3MpIHtcbiAgICAgICAgdmFyIHBhZCA9IHRoaXMuRHJhd2luZ1BhZC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwYWQuY2xlYXJEcmF3aW5nKCk7XG4gICAgfVxufSJdfQ==