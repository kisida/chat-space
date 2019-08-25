


$(function() {
  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    
    $.ajax({
      type: 'GET',
      url: '/users/index',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(products) {
      $(".listview.js-lazy-load-images").empty();
      if (products.length !== 0) {
        products.forEach(function(product){
          appendProduct(product);
        });
      }
      else {
        appendErrMsgToHTML("一致する映画はありません");
      }
    })
 
  });
});