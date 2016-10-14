'use strict';

function formatTime( date ) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [ year, month, day ].map( formatNumber ).join( '/' ) + ' ' + [ hour, minute, second ].map( formatNumber ).join( ':' )
}

function formatNumber( n ) {
  n = n.toString()
  return n[ 1 ] ? n : '0' + n
}
//序列化参数  json to url参数
function param( obj ) {
  return Object.keys( obj ).map( function( k ) {
    return encodeURIComponent( k ) + "=" + encodeURIComponent( obj[ k ] );
  }).join( '&' );
}
//封装的ajax发送数据
//默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
function ajax( url, { data = {}, method = 'GET', header = {} }) {
  if( method === 'POST' ) {
    header[ 'Content-Type' ] = 'application/x-www-form-urlencoded';
    data = param( data );
  }
  var promise = new Promise( function( resolve, reject ) {
    wx.request( {
      url: url, data: data, method: method, header: header, success: function( res ) {
        resolve( res );
      }, fail: function( err ) {
        reject( err )
      }
    });
  });
  return promise;

}
//类模块的使用看log.js
const Person = class Person {
  constructor() { }
  say() {
    console.log( 'say' );
  }
}
module.exports = {
  formatTime: formatTime,
  param: param,
  Person: Person,
  ajax: ajax
}
