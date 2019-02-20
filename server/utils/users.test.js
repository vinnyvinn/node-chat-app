const expect = require('expect');

const {Users} = require('./users');

describe('Users',()=>{
    var users;

    beforeEach(()=>{
   users = new Users();
   users.users = [{
       id:'1',
       name:'Mike',
       room: 'PHP'
   },
       {
           id:'2',
           name:'James',
           room: 'NODE'
       },
       {
           id:'1',
           name:'Wesley',
           room: 'JAVASCRIPT'
       }
   ]
    });
    it('Should add new user',()=>{
       var users = new Users();
       var user = {
           id:'123',
           name:'Vinny',
           room:'Kilmanjaro'
       }

       var resUsers = users.addUser(user.id,user.name,user.room);

       expect(users.users).toEqual([user]);
    });

    it('Should find user',() => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });
    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should remove user',() =>{
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(1);
    });
    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });
})
