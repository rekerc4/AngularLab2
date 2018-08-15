"use strict"; 

function expandOnFocus() {
    return {
        restrict: "A", 
        replace: false, 
        link: function($scope, $element, $attr){
            console.log($element);
        $element.on("focus", () => {
            $element.css("width", "90%");
        });
        $element.on("blur", () => {
            $element.css("width", "83%");
        })
        }
    }
}

angular.module("app").directive("expandOnFocus", expandOnFocus); 

// "use strict";
// function hoverState() {
//   return {
//     restrict: "A",
//     replace: false,
//     link: function($scope, $element, $attrs) {
//       $element.css("color", "red");
//       $element.on("mouseover", () => {
//         $element.css("font-size", "90px");
//       });
//     }
//   };
// }

// angular
//   .module("app")
//   .directive("hoverState", hoverState);