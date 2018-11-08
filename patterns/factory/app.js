// Factory methods 

function MemberFactory(){
  this.createMember = function(name, type){
    let member;

    if( type === 'simple' ) {

      member = new SimpleMembership(name);

    } else if( type === 'standard' ) {

      member = new StandardMembership(name);

    } else if( type === 'super' ) {

      member = new SuperMembership(name);

    }

    member.type = type;

    // define
    member.define = function (){
      console.log(`${this.name} - membership: ${this.type} - cost: ${this.cost} `);
    }

    return member;
  }
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '5lei'
}

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '15lei'
}

const SuperMembership = function (name) {
  this.name = name;
  this.cost = '25lei'
}

const members = [];
const factory = new MemberFactory();

//create memebers data and push into array
members.push(factory.createMember('Bogdan', 'super'));
members.push(factory.createMember('Monica', 'simple'));
members.push(factory.createMember('Rares', 'standard'));
members.push(factory.createMember('Lulu', 'simple'));

// we need to loop trhough arry

members.forEach(function(data){
  data.define();
});