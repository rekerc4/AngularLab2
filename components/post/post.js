"use strict"; 

const post = { 
    bindings: {
        item: "<", 
        index: "<"
    }, 
    templateUrl: "components/post/post.html" 
}



angular.module("app").component("post", post); 