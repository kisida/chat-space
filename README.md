# README

This README would normally document whatever steps are necessary to get the
application up and running.


Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat_space DB設計
## テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|group_id|integer|null: false, foreigu_kye: true|
### Association
- has_many :messages
- has_many :groups
- has_many  :groups,  through:  :grorps_users

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreigu_kye: true|
|group_id|integer|null: false, foreigu_kye: true|
### Association
- belongs_to :user
- belongs_to :group

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|user_id|integer|null: false, foreigu_kye: true|
### Association
- has_many :messages
- has_many :groups_users
- has_many  :users,  through:  :grorps_users

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreigu_kye: true|
|group_id|integer|null: false, foreigu_kye: true|
### Association
- belongs_to :user
- belongs_to :group