
$(function() {

    function appendUser(user) {
      var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">user.name</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="user.id" data-user-name="user.name">追加</div>
                  </div>`
      appendUser(user);
  }


  $(function() {
    $("#user-search-field").on("keyup", function() {
      var input = $("#user-search-field").val();
      console.log(input)
      // $('#user-search-field')[0].reset();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })

      .done(function(users) {
        if (users.length !== 0) {
          users.forEach(function(user){
            appendUser(user);
          });
        }
        else {
          appendErrMsgToHTML("一致するユーザーはいません");
        }
      })
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      })
    });
  });
});