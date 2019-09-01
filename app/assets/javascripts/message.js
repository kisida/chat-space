$(function(){
  function buildHTML(message){
   
      var image = message.image.url ? `<img class="lower-message__image" src="${message.image.url}" alt="Img 2171">` : "";
    var html = 
    `<div class="message" data-id="${message.id}">
  <div class="upper-info">
    <div class="upper-info__user">
      ${message.user_name}
    </div>
    <div class="upper-info__day">
    ${message.day}
    </div>
  </div>
  <div class="message.content">
    ${message.text}
      ${image}
  </div>
</div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $('#new_message')[0].reset();
  
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html =buildHTML (data);
      $('.messages').append(html)
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    })
  })

    var reloadMessages = function() {

    if(location.href.match(/groups\/\d+\/messages/)){
    }else{
      return
    }

    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.message:last').data('id')
    var url = location.pathname;
  
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url:'api/messages',
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        messages.forEach(function(message){
         var html =  buildHTML(message);
        $('.messages').append(html)
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      })
    }
    })  
    .fail(function() {
      alert('error');
    })
  }
  setInterval(reloadMessages, 5000);
});

