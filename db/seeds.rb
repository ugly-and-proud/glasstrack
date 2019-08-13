# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

  # movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
  # Character.create(name: 'Luke', movie: movies.first)

  # User.create(one role for the manger and role for the bartender) rolls are assigned in rolify. Is it possible for this to store the info?

  # make seed: user.create with EMAIL
 manager = User.create(email:'manager@glasstrack.com', password: 'manager')


 # assign to a variable and then do user.add role and that will give them the correct role.
