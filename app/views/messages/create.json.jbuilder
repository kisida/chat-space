json.text       @message.content
json.user_name  @message.user.name
json.day        @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image      @message.image
#idもデータとして渡す
json.id @message.id