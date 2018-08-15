"use strict"; 

const fillup = { 
    templateUrl: 'components/socialPost/socialPost.html', 
    controller: function(){
        let vm = this; 
        vm.post = [
            {
                title: "SAR", 
                lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat autem tempora a laboriosam, est quibusdam labore quis vitae minus inventore? Voluptatibus corporis accusantium aliquid, animi nesciunt ex quaerat deserunt.", 
            
            }, 
            {
                title: "Dog", 
                lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
        ];

        vm.onSubmit = (newVal) => {
            console.log(newVal);
            vm.post.push(angular.copy(newVal));
            document.getElementById("text-in").value = ""; 
            document.getElementById("title-in").value = "";
            document.getElementById("the-form").style.display = "none"; 
          };

          vm.showForm = () => { 
              console.log("yes");
            document.getElementById("the-form").style.display = "inherit"; 
          }

    }
}







angular.module("app").component("fillup", fillup);