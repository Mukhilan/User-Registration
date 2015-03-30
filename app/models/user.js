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
      name: 'delip',
      password:'ticket',
      isActive:true,
      age: '21',
      profileImage: "https://avatars2.githubusercontent.com/u/2503?v=3&s=460",
      phoneNo: "9442625695",
      githubURL: "https://github.com/rsutphin",
      isAdmin: false
    },

    {
      id: 2,
      name: 'vasu',
      password:'ticket1',
      isActive:true,
      age: '22',
      profileImage: "https://avatars3.githubusercontent.com/u/1624?v=3&s=460",
      phoneNo: "8870388140",
      githubURL: "https://github.com/breakpointer",
      isAdmin: false
    },

    {
      id: 3,
      name: 'ruban',
      password:'ticket2',
      isActive:true,
      age: '21',
      profileImage: "https://avatars2.githubusercontent.com/u/4624?v=3&s=460",
      phoneNo: "9443457005",
      githubURL: "https://github.com/indexzero",
      isAdmin: true
    }
  ]
});

export default user;
