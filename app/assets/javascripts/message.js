$(function(){
  function buildHTML(message){
    var image = ``
    if (message.image.url) {
      image = `<img class="lower-message__image" src="${message.image.url}" alt="Img 2171">`;
      }
    var html = `<div class="message">
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
    var url = $(this).attr('action')
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
    $('text').val('')
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});


  })
  .fail(function(){
    alert('error');
  })
  return false;
})
})
