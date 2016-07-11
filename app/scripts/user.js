import $ from 'jquery';

function User(username){
  this.username = username;
}


User.prototype.create = function(){
  $.ajax({
    url: 'https://tiny-za-server.herokuapp.com/collections/user',
    type: 'POST',
    data: JSON.stringify( this ),
    contentType: 'application/json',
    success: function( response ){
      this._id = response._id;
      console.log('you created a new user');
      console.log( this );
    }
  });
};

export default User;
