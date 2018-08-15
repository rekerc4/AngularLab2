"use strict"; 

const postForm = {
    bindings: {
        onSubmit: "&"
    },
    templateUrl: 'components/postForm/postForm.html', 
}

angular.module('app').component('postForm', postForm); 