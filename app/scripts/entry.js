import $ from 'jquery';
import User from './user';

$('#container').append('i added this with jquery');

var user = new User('thefarbetween');
console.log( user.create() );
