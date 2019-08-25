json.array! @users do |user|
  json.id user.id
  consl
  json.title user.name
  json.image user.image_url
  json.detail user.detail
end