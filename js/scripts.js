$(document).ready(function() {
  $("form#list").submit(function(event) {
    var thing1=$("#thing1").val();
    var thing2 = $("#thing2").val();
    var thing3 = $("#thing3").val();

    var groceries = [thing1, thing2, thing3];
    groceries.sort();
    groceries.map(function (grocery){
    });

    $("#item1").text(groceries[0].toUpperCase());
    $("#item2").text(groceries[1].toUpperCase());
    $("#item3").text(groceries[2].toUpperCase());
    




    // for (var i = 0; i < 3; i++){
    //   $("#item"+ (i+1)).text(groceries[i].toUpperCase());
    // }
    // First iteration:
    // i = 0; 0 < 3
    //   $("#item1").text(groceries[0]);
    // Second iteration:
    // i = 1; 1 < 3
    //   $("#item2").text(groceries[1]);
    // Third iteration:
    // i = 2; 2 < 3
    //   $("#item3").text(groceries[2]);



    $("form#list").hide();
    $("#result").show();






    //alert(myArray[1]);

    //var newArray = myArray.slice();
    //newArray.push(myArray[1]);
    //alert (newArray);

    //var newArray = [];
    //newArray.push(myArray[1]);
    //alert (newArray);

    /*$("#item1").text(myArray[0]);
    $("#list").show();

    $("#item2").text(myArray[1]);
    $("#list").show();

    $("#item3").text(myArray[2]);
    $("#list").show();
*/


    event.preventDefault();


  });
});
