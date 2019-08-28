window.ToDoList ={
    API_BASE_URL:"http://localhost:8083/to-do-items",
    
    createItem: function () {
        var description = $("#description-field").val();
        var deadline = $("#deadline-picker").val();
        
        var item = {
            description: description,
            deadline : deadline
        }
        
        $.ajax({
            url:ToDoList.API_BASE_URL,
            method: "POST",
            //MIME type
            contentType: "application/json",
            data: JSON.stringify(item)
        }).done(function (response) {
            console.log("Successfully received response")
            console.log(response);
        })
    
  
    },
    bindEvents:function () {
        $("#new-item-form").submit(function (event) {
            event.preventDefault();
            ToDoList.createItem();
            
        });
        
    }
};
ToDoList.bindEvents();