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
            ToDoList.getItems();
        })
    
  
    },

    getItems: function(){
        $.ajax({
            url:ToDoList.API_BASE_URL,
            method: "GET",
            //MIME type

        }).done(function (response) {
            console.log("Successfully received response")
            console.log(response);
            ToDoList.displayItems(JSON.parse(response));
        })

    },

    deleteItems: function(itemID){
        $.ajax({
            url:ToDoList.API_BASE_URL +"?id=" + itemID,
            method: "DELETE",
            //MIME type

        }).done(function (response) {
            console.log("Successfully received response")
            console.log(response);
            ToDoList.getItems();
        })

    },

    updateItems: function(itemID,done){
        $.ajax({
            url:ToDoList.API_BASE_URL +"?id=" + itemID,
            method: "PUT",
            //MIME type
            contentType: "application/json",
            data: JSON.stringify({
                done: done
        })

        }).done(function (response) {
            console.log("Successfully received response")
            console.log(response);
            ToDoList.getItems();
        })

    },

    displayItems: function(items) {

        var tableBodyHtml ="";

        items.forEach(item =>tableBodyHtml +=ToDoList.getItemRow(item));
        $("#to-do-items-table tbody").html(tableBodyHtml);

    },

    getItemRow: function(item){
        var formattedDate = new Date(...item.deadline).toLocaleDateString("en-US");
        //ternary operator
        var checkedAtribute = item.done ? "checked" : "" ;
        
        return ` <tr>
            <td>${item.description}</td>
            <td>${formattedDate}</td>
            <td><input type="checkbox" class="mark-done-checkbox"
             title="Completed" data-id="${item.id}" ${checkedAtribute}/></td>
            <td><a href="#" class="delete-item fa fa-trash" data-id="${item.id}"></a> </td>
        </tr>`

    },

    bindEvents: function () {

        $("#new-item-form").submit(function (event) {
            event.preventDefault();
            ToDoList.createItem();

        });
        //using degate because the element a.delete-item is dynamically injected
        //after the page has been loaded
        $("#to-do-items-table").delegate(".delete-item",  "click",  function (event) {
            event.preventDefault();
            var itemID = $(this).data("id");
            ToDoList.deleteItems(itemID);

        });

        $("#to-do-items-table").delegate(".mark-done-checkbox",  "change",  function (event) {
            event.preventDefault();
            var itemID = $(this).data("id");
            var checkboxChecked = $(this).is(":checked")
            ToDoList.updateItems(itemID , checkboxChecked);

        });
        
    }
};
ToDoList.getItems();
ToDoList.bindEvents();
