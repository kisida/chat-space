
$(function() {

    var searchuser = $('#user-search-result');
    var chatuser =   $('#add-menber');

    function appendUser(user) {
      var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
                  </div>`
                  
      searchuser.append(html)
  }

  function appendErrMsgToHTML(msg){
    var html =`<div class="chat-group-user clearfix">
                 <p class="chat-group-user__name">${msg}/p>
               </div>`
     searchuser.append(html)
  }

  function appendChatUser(id,name){
        var html =`<div class='chat-group-user'>
                    <input name='group[user_ids][]' type='hidden' value='${id}'>
                    <p class='chat-group-user__name'>${name}</p>
                    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                   </div>`
     chatuser.append(html)
}
  $(function() {
    $("#user-search-field").on("input", function() {
      var input = $("#user-search-field").val();

      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })
      

      .done(function(users) {
        $('#user-search-result').empty();
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
    $(document).on("click", ".user-search-add", function () {
        id= $(this).data("userId")
      name= $(this).data("userName")
      appendChatUser(id,name);

      $(this).parent().remove();
    });
    $(document).on("click", ".user-search-remove", function () {
      $(this).parent().remove();
    });
  });
});