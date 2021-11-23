test> show dbs
admin     41 kB
config  36.9 kB
local     41 kB

//1. Create a database called 'my_first_db'.
test> use my_first_db
switched to db my_first_db

//2. Create students collection.
my_first_db> db.createCollection("students");
{ ok: 1 }

//4. Create 5 students with the appropriate info.
my_first_db> db.students.insert({name:"Ana Scott", home_state:"California", lucky_number:9, birthday: new Date('12-12-1985')});
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("619c4e894c2baaee4301d19e") }
}
my_first_db> db.students.insert({name:"Michael Pérez", home_state:"New York", lucky_number:22, birthday:{month:4, day:1, year:1999}});
{, birthday:{month:4, day:1, year:1999}});
  acknowledged: true,
  insertedIds: { '0': ObjectId("619c4f8f4c2baaee4301d19f") }
}
my_first_db> db.students.insert({name:"Mario Soto", home_state:"Texas", lucky_number:31, birthday:{month:12, day:6, year:1977}});
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("619c4ff14c2baaee4301d1a0") }
}
my_first_db> db.students.insert({name:"Karen Smith", home_state:"Florida", lucky_number:1, birthday:{month:8, day:3, year:1995}});
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("619c50424c2baaee4301d1a1") }
}
my_first_db> db.students.insert({name:"Ryan Piedra", home_state:"Utah", lucky_number:68, birthday:{month:11, day:7, year:2002}});
{
  acknowledged: true,
  insertedIds: { '0': ObjectId("619c50ad4c2baaee4301d1a2") }
}

//5. Get all students.
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c4e894c2baaee4301d19e"),
    name: 'Ana Scott',
    home_state: 'California',
    lucky_number: 9,
    birthday: ISODate("1985-12-12T06:00:00.000Z")
  },
  {
    _id: ObjectId("619c4f8f4c2baaee4301d19f"),
    name: 'Michael Pérez',
    home_state: 'New York',
    lucky_number: 22,
    birthday: { month: 4, day: 1, year: 1999 }
  },
  {
    _id: ObjectId("619c4ff14c2baaee4301d1a0"),
    name: 'Mario Soto',
    home_state: 'Texas',
    lucky_number: 31,
    birthday: { month: 12, day: 6, year: 1977 }
  },
  {
    _id: ObjectId("619c50424c2baaee4301d1a1"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 }
  },
  {
    _id: ObjectId("619c50ad4c2baaee4301d1a2"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 }
  }
]
// 6. Retrieve all students who are from California or Utah.
my_first_db> db.students.find({$or: [{home_state:"California"}, {home_state:"Utah"}]});
[
  {
    _id: ObjectId("619c4e894c2baaee4301d19e"),
    name: 'Ana Scott',
    home_state: 'California',
    lucky_number: 9,
    birthday: ISODate("1985-12-12T06:00:00.000Z")
  },
  {
    _id: ObjectId("619c50ad4c2baaee4301d1a2"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 }
  }
]

//7. Get all students whose lucky number is greater than 3
my_first_db> db.students.find({lucky_number:{$gt:3}})
[
  {
    _id: ObjectId("619c4e894c2baaee4301d19e"),
    name: 'Ana Scott',
    home_state: 'California',
    lucky_number: 9,
    birthday: ISODate("1985-12-12T06:00:00.000Z")
  },
  {
    _id: ObjectId("619c4f8f4c2baaee4301d19f"),
    name: 'Michael Pérez',
    home_state: 'New York',
    lucky_number: 22,
    birthday: { month: 4, day: 1, year: 1999 }
  },
  {
    _id: ObjectId("619c4ff14c2baaee4301d1a0"),
    name: 'Mario Soto',
    home_state: 'Texas',
    lucky_number: 31,
    birthday: { month: 12, day: 6, year: 1977 }
  },
  {
    _id: ObjectId("619c50ad4c2baaee4301d1a2"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 }
  }
]

//7. Get all students whose lucky number is less than or equal to 10
my_first_db> db.students.find({lucky_number:{$lte:10}});
[
  {
    _id: ObjectId("619c4e894c2baaee4301d19e"),
    name: 'Ana Scott',
    home_state: 'California',
    lucky_number: 9,
    birthday: ISODate("1985-12-12T06:00:00.000Z")
  },
  {
    _id: ObjectId("619c50424c2baaee4301d1a1"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 }
  }
]

//7. Get all students whose lucky number is between 1 and 9 (inclusive)
my_first_db> db.students.find({$and:[{lucky_number:{$lte:9}}, {lucky_number:{$gte:1}}]});
[
  {
    _id: ObjectId("619c4e894c2baaee4301d19e"),
    name: 'Ana Scott',
    home_state: 'California',
    lucky_number: 9,
    birthday: ISODate("1985-12-12T06:00:00.000Z")
  },
  {
    _id: ObjectId("619c50424c2baaee4301d1a1"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 }
  }
]

//8. Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
my_first_db> db.students.updateMany({},{$set: {"interests":['coding', 'brunch', 'MongoDB']}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5,
  modifiedCount: 5,
  upsertedCount: 0
}
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c4e894c2baaee4301d19e"),
    name: 'Ana Scott',
    home_state: 'California',
    lucky_number: 9,
    birthday: ISODate("1985-12-12T06:00:00.000Z"),
    interests: [ 'coding', 'brunch', 'MongoDB' ]
  },
  {
    _id: ObjectId("619c4f8f4c2baaee4301d19f"),
    name: 'Michael Pérez',
    home_state: 'New York',
    lucky_number: 22,
    birthday: { month: 4, day: 1, year: 1999 },
    interests: [ 'coding', 'brunch', 'MongoDB' ]
  },
  {
    _id: ObjectId("619c4ff14c2baaee4301d1a0"),
    name: 'Mario Soto',
    home_state: 'Texas',
    lucky_number: 31,
    birthday: { month: 12, day: 6, year: 1977 },
    interests: [ 'coding', 'brunch', 'MongoDB' ]
  },
  {
    _id: ObjectId("619c50424c2baaee4301d1a1"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 },
    interests: [ 'coding', 'brunch', 'MongoDB' ]
  },
  {
    _id: ObjectId("619c50ad4c2baaee4301d1a2"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 },
    interests: [ 'coding', 'brunch', 'MongoDB' ]
  }
]

//9. Add some unique interests for each particular student into each of their interest arrays.
my_first_db> db.students.updateOne({name: "Ana Scott"},{$push: {interests:{$each:['reading', 'dancing', 'karate']}}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
my_first_db> db.students.updateOne({name: "Michael Pérez"},{$push: {interests:{$each:['karate', 'football']}}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
my_first_db> db.students.updateOne({name: "Mario Soto"},{$push: {interests:{$each:['cooking', 'movies']}}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
my_first_db> db.students.updateOne({name: "Karen Smith"},{$push: {interests:{$each:['hiking', 'reading']}}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
my_first_db> db.students.updateOne({name: "Ryan Piedra"},{$push: {interests:{$each:['video games']}}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c4e894c2baaee4301d19e"),
    name: 'Ana Scott',
    home_state: 'California',
    lucky_number: 9,
    birthday: ISODate("1985-12-12T06:00:00.000Z"),
    interests: [ 'coding', 'brunch', 'MongoDB', 'reading', 'dancing', 'karate' ]
  },
  {
    _id: ObjectId("619c4f8f4c2baaee4301d19f"),
    name: 'Michael Pérez',
    home_state: 'New York',
    lucky_number: 22,
    birthday: { month: 4, day: 1, year: 1999 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'karate', 'football' ]
  },
  {
    _id: ObjectId("619c4ff14c2baaee4301d1a0"),
    name: 'Mario Soto',
    home_state: 'Texas',
    lucky_number: 31,
    birthday: { month: 12, day: 6, year: 1977 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'cooking', 'movies' ]
  },
  {
    _id: ObjectId("619c50424c2baaee4301d1a1"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'hiking', 'reading' ]
  },
  {
    _id: ObjectId("619c50ad4c2baaee4301d1a2"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'video games' ]
  }
]

//10. Add the interest 'taxes' into someone's interest array.
my_first_db> db.students.updateOne({name: "Ana Scott"},{$push: {interests: "taxes"}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
my_first_db> db.students.find({name:"Ana Scott"}).pretty();
[
  {
    _id: ObjectId("619c4e894c2baaee4301d19e"),
    name: 'Ana Scott',
    home_state: 'California',
    lucky_number: 9,
    birthday: ISODate("1985-12-12T06:00:00.000Z"),
    interests: [
      'coding',  'brunch',
      'MongoDB', 'reading',
      'dancing', 'karate',
      'taxes'
    ]
  }
]

//11. Remove the 'taxes' interest you just added.
my_first_db> db.students.updateOne({name: "Ana Scott"},{$pull: {interests: "taxes"}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
my_first_db> db.students.find({name:"Ana Scott"}).pretty();
[
  {
    _id: ObjectId("619c4e894c2baaee4301d19e"),
    name: 'Ana Scott',
    home_state: 'California',
    lucky_number: 9,
    birthday: ISODate("1985-12-12T06:00:00.000Z"),
    interests: [ 'coding', 'brunch', 'MongoDB', 'reading', 'dancing', 'karate' ]
  }
]

//12. Remove all students who are from California.
my_first_db> db.students.remove({home_state:"California"});
{ acknowledged: true, deletedCount: 1 }
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c71264c2baaee4301d1a5"),
    name: 'Michael Pérez',
    home_state: 'New York',
    lucky_number: 22,
    birthday: { month: 4, day: 1, year: 1999 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'karate', 'football' ]
  },
  {
    _id: ObjectId("619c714b4c2baaee4301d1a6"),
    name: 'Mario Soto',
    home_state: 'Texas',
    lucky_number: 31,
    birthday: { month: 12, day: 6, year: 1977 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'cooking', 'movies' ]
  },
  {
    _id: ObjectId("619c71624c2baaee4301d1a7"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'hiking', 'reading' ]
  },
  {
    _id: ObjectId("619c71774c2baaee4301d1a8"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'video games' ]
  }
]
my_first_db>

//13. Remove a student by name.
my_first_db> db.students.remove({name: 'Mario Soto'});
{ acknowledged: true, deletedCount: 1 }
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c71264c2baaee4301d1a5"),
    name: 'Michael Pérez',
    home_state: 'New York',
    lucky_number: 22,
    birthday: { month: 4, day: 1, year: 1999 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'karate', 'football' ]
  },
  {
    _id: ObjectId("619c71624c2baaee4301d1a7"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'hiking', 'reading' ]
  },
  {
    _id: ObjectId("619c71774c2baaee4301d1a8"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'video games' ]
  }
]

//14. Remove a student whose lucky number is greater than 5 (JUST ONE)
my_first_db> db.students.remove({lucky_number: {$gt:5}}, {justOne:true});
{ acknowledged: true, deletedCount: 1 }
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c71624c2baaee4301d1a7"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'hiking', 'reading' ]
  },
  {
    _id: ObjectId("619c71774c2baaee4301d1a8"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'video games' ]
  }
]
//15. Add a field to each student collection called 'number_of_belts' and set it to 0.
my_first_db> db.students.updateMany({},{$set: {"number_of_belts":0}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c71624c2baaee4301d1a7"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'hiking', 'reading' ],
    number_of_belts: 0
  },
  {
    _id: ObjectId("619c71774c2baaee4301d1a8"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'video games' ],
    number_of_belts: 0
  }
]

//16. Increment this field by 1 for all students in Florida.
my_first_db> db.students.updateMany({home_state:"Florida"},{$set: {"number_of_belts":1}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c71624c2baaee4301d1a7"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'hiking', 'reading' ],
    number_of_belts: 1
  },
  {
    _id: ObjectId("619c71774c2baaee4301d1a8"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'video games' ],
    number_of_belts: 0
  }
]

//17. Rename the 'number_of_belts' field to 'belts_earned'
my_first_db> db.students.updateMany({}, {$rename: {"number_of_belts":"belts_earned"}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c71624c2baaee4301d1a7"),
    name: 'Karen Smith',
    home_state: 'Florida',
    lucky_number: 1,
    birthday: { month: 8, day: 3, year: 1995 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'hiking', 'reading' ],
    belts_earned: 1
  },
  {
    _id: ObjectId("619c71774c2baaee4301d1a8"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    lucky_number: 68,
    birthday: { month: 11, day: 7, year: 2002 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'video games' ],
    belts_earned: 0
  }
]

//18. Remove the 'lucky_number' field.
my_first_db> db.students.updateMany({}, {$unset:{lucky_number:""}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c71624c2baaee4301d1a7"),
    name: 'Karen Smith',
    home_state: 'Florida',
    birthday: { month: 8, day: 3, year: 1995 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'hiking', 'reading' ],
    belts_earned: 1
  },
  {
    _id: ObjectId("619c71774c2baaee4301d1a8"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    birthday: { month: 11, day: 7, year: 2002 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'video games' ],
    belts_earned: 0
  }
]

//19. Add a 'updated_on' field, and set the value as the current date.
my_first_db> db.students.updateMany({}, {$currentDate:{updated_on:true}});
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
my_first_db> db.students.find().pretty();
[
  {
    _id: ObjectId("619c71624c2baaee4301d1a7"),
    name: 'Karen Smith',
    home_state: 'Florida',
    birthday: { month: 8, day: 3, year: 1995 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'hiking', 'reading' ],
    belts_earned: 1,
    updated_on: ISODate("2021-11-23T05:05:18.495Z")
  },
  {
    _id: ObjectId("619c71774c2baaee4301d1a8"),
    name: 'Ryan Piedra',
    home_state: 'Utah',
    birthday: { month: 11, day: 7, year: 2002 },
    interests: [ 'coding', 'brunch', 'MongoDB', 'video games' ],
    belts_earned: 0,
    updated_on: ISODate("2021-11-23T05:05:18.495Z")
  }
]