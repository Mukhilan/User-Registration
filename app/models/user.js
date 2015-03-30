import DS from "ember-data";

var user= DS.Model.extend({
  name: DS.attr("string"),
  password: DS.attr("string"),
  isActive: DS.attr("boolean"),
  age: DS.attr("string"),
  profileImage: DS.attr("string"),
  phoneNo: DS.attr("string"),
  githubURL: DS.attr("string"),
  isAdmin: DS.attr("boolean")
});

user.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Rhett',
      password:'ticket',
      isActive:true,
      age: '32',
      profileImage: "https://avatars2.githubusercontent.com/u/2503?v=3&s=460",
      phoneNo: "9442625685",
      githubURL: "https://github.com/rsutphin",
      isAdmin: false
    },

    {
      id: 2,
      name: 'Brian',
      password:'pass',
      isActive:true,
      age: '36',
      profileImage: "https://avatars3.githubusercontent.com/u/1624?v=3&s=460",
      phoneNo: "8870378140",
      githubURL: "https://github.com/breakpointer",
      isAdmin: false
    },

    {
      id: 3,
      name: 'katz',
      password:'pass',
      isActive:true,
      age: '35',
      profileImage: "https://avatars1.githubusercontent.com/u/4?v=3&s=460",
      phoneNo: "9423457005",
      githubURL: "https://github.com/wycats",
      isAdmin: true
    }
  ]
});

export default user;
