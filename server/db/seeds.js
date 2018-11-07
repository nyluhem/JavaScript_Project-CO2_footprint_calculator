// database name
use users;
db.dropDatabase();

db.joeBloggs.insertMany([
  {
    date: "2018-01-22",
    indValues:
    {
      food: 50,
      travel: 50,
      lifestyle: 50,
    },
    total: 150,
  },
  {
    date: "2018-01-29",
    indValues:
    {
      food: 20,
      travel: 40,
      lifestyle: 10,
    },
    total: 70,
  },
  {
    date:"2018-02-05",
    indValues:
    {
      food: 30,
      travel: 40,
      lifestyle: 20,
    },
    total: 90,
  }
];
)
