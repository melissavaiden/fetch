# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Start Seeding!'

  Dog.create(user_id: 1, picture_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg', name: 'Bella', age: 1)
  Dog.create(user_id: 2, picture_url: 'http://cdn.akc.org/content/article-body-image/siberian_husky_cute_puppies.jpg', name: 'Max', age: 2)
  Dog.create(user_id: 3, picture_url: 'https://i.ytimg.com/vi/MQ11fPpPKwg/maxresdefault.jpg', name: 'Charlie', age: 3)
  Dog.create(user_id: 4, picture_url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/6/asset/buzzfeed-prod-web-02/sub-buzz-30033-1529923650-1.jpg', name: 'Lucy', age: 4)
  Dog.create(user_id: 5, picture_url: 'https://i.insider.com/5b30f4825e48ec1e008b4588?width=1000&format=jpeg&auto=webp', name: 'Rocky', age: 5)
  Dog.create(user_id: 6, picture_url: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/bernese-mountain-dog-card-large.jpg?bust=1608663154', name: 'Daisy', age: 6)
  Dog.create(user_id: 7, picture_url: 'https://static.boredpanda.com/blog/wp-content/uploads/2014/07/cute-big-dogs-and-babies-21.jpg', name: 'Cooper', age: 7)
  Dog.create(user_id: 8, picture_url: 'https://paradepets.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMzY1Nzg4OTY2MDA0MjU3/ugly-dogs-jpg.jpg', name: 'Bailey', age: 8)
  Dog.create(user_id: 9, picture_url: 'https://www.thesprucepets.com/thmb/WBV5xavKFbGGfdVUYnSQT0EykQc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/breed_profile_corgi_1117986_recirc_917-ac4ab4ec3cb6469397c6c023e7c28b28.jpg', name: 'Sadie', age: 9)
  Dog.create(user_id: 10, picture_url: 'https://i.pinimg.com/736x/f3/89/ef/f389efb2a57669d9b50b97659507a2fe.jpg', name: 'Molly', age: 10)


  User.create(username: 'PawsomePup', password: 'hello')
  User.create(username: 'CanineCrush', password: 'hello')
  User.create(username: 'WoofWooer', password: 'hello')
  User.create(username: 'BarkBuddies', password: 'hello')
  User.create(username: 'PawfectMatch', password: 'hello')
  User.create(username: 'DoggyDate', password: 'hello')
  User.create(username: 'TailWagginLove', password: 'hello')
  User.create(username: 'LeashLover', password: 'hello')
  User.create(username: 'HoundHarmony', password: 'hello')
  User.create(username: 'BoneAmor', password: 'hello')

  Tag.create(title: 'dogpark')
  Tag.create(title: 'fetch')
  Tag.create(title: 'bellyrub')
  Tag.create(title: 'treats')
  Tag.create(title: 'walks')
  Tag.create(title: 'squirrelwatching')
  Tag.create(title: 'cuddle')
  Tag.create(title: 'playtime')
  Tag.create(title: 'bone')
  Tag.create(title: 'swimming')
  Tag.create(title: 'thunderstorms')
  Tag.create(title: 'vacuumcleaner')
  Tag.create(title: 'fireworks')
  Tag.create(title: 'grooming')
  Tag.create(title: 'nailclipping')
  Tag.create(title: 'carrides')
  Tag.create(title: 'vetvisits')
  Tag.create(title: 'strangers')
  Tag.create(title: 'loudnoises')

  DogTag.create(dog_id: 1, tag_id: 1)
  DogTag.create(dog_id: 1, tag_id: 2)
  DogTag.create(dog_id: 2, tag_id: 3)
  DogTag.create(dog_id: 2, tag_id: 4)






puts 'End Seeding :)'