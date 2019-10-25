import React from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';

const Sender=(name,message,remove)=>{

  if(name!=undefined && message!=undefined){
    console.log('je suis sender')
    const querystring = require('querystring');
    const data = querystring.stringify({ 
      "id" : name,
      "name": name,
      "message" : message
    });
   
   
    axios({
  
      method: 'post',
      url: 'https://owedding.fr/admin/api/mercure/sendtext',
      headers:{
  
        'JWT' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        
        
      },
      data: data,
      
        
      
      
    }).then((response) => {
     console.log(response)
    
  
     
      
     
        
      
  
    }).catch(function (error) {
      console.log(error);
    });
  };

  if(name!=undefined && message==undefined && remove===false){
    console.log('je suis sender')
    const querystring = require('querystring');
    const data = querystring.stringify({ 
      "id" : name,
      "name": name,
      
    });
   
   
    axios({
  
      method: 'post',
      url: 'https://owedding.fr/admin/api/mercure/before_sendtext/add',
      headers:{
  
        'JWT' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        
        
      },
      data: data,
      
        
      
      
    }).then((response) => {
     console.log(response)
    
    
  
     
        
      
  
    }).catch(function (error) {
      console.log(error);
    });
  };

  if(name!=undefined && message==undefined && remove===true){
    console.log('je suis le preSend remover')
    const querystring = require('querystring');
    const data = querystring.stringify({ 
      "id" : name,
      "name": name,
      
    });
   
   
    axios({
  
      method: 'post',
      url: 'https://owedding.fr/admin/api/mercure/before_sendtext/remove',
      headers:{
  
        'JWT' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        
        
      },
      data: data,
      
        
      
      
    }).then((response) => {
     console.log(response)
    
  
    
        
      
  
    }).catch(function (error) {
      console.log(error);
    });
  };

 
};

Sender.propTypes={
  name:PropTypes.string.isRequired,
  message:PropTypes.string.isRequired
}
export default Sender;