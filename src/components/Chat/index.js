import React from 'react';
import Conversation from './Conversation';
import Pre_send from'./Pre_send';
import Sender from'./Sender';
import PreSender from'./PreSender';
import './chat.scss';
import axios from 'axios';
import DashNav from 'src/containers/DashNav';
import store from "../../store";






class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      message:'',
      name:store.getState().userReducer.username,
      chat:[],
      pre_sends:[],
      counter:true,
    
    };
      
  }



  addPre_send =(name)=>{
      
      const {pre_sends:currentPre_sendData}=this.state;
      //Methode todolist KO
      // const ids = currentPre_sendData.map(pre_send=>pre_send.id)
      // const MaxId = Math.max(...ids);
      // const id = MaxId+1;
      const id=currentPre_sendData.length+1;
      


      const newPre_send = {name};
      //Methode todolist KO
      // console.log('pre_send test')
      // console.log(name);
      // updatedPre_sendData.push(newPre_send)


      //Methode Romain OK
      this.setState(prevState => (
        {
          pre_sends: [ ...prevState.pre_sends, newPre_send ],
        }
      ));
      
  }

    removePre_send=(name)=>{
      const { pre_sends } = this.state;
      //methode Romain KO
      // const index = pre_sends.index(name);
      // console.log(index);
      // const newPreSend = pre_sends.splice(index);
      const newPreSend = pre_sends.filter(text=>text.name!==name);
      this.setState( { pre_sends: newPreSend} );
    }

    addBubble = (name,message,hour) =>{
      const {chat:currentChatData} = this.state;
      const id=currentChatData.length+1;
      //methode todolist KO
      // if(this.state.chat ==[]){
      //   const  id=1;
      // }else{
          
      //     const ids = currentChatData.map(chatData=>chatData.id)
      //     const MaxId = Math.max(...ids);
      //     const id = MaxId+1;
      // }
    

      console.log(id+'ceci est id(addbubble)');
      console.log(name+'ceci est name(addbubble)');
      console.log(message+'ceci est message(addbubble)');
      console.log(hour+'ceci est hour(addubble)');
      const updatedChat = [
          ...currentChatData,

      ];
      const Bubble = {
          'id':id,
          'name':name,
          'message':message,
          'hour':hour,
      };
      updatedChat.push(Bubble)
      
      
      
      console.log('under the scroll')
      this.setState({
          chat: updatedChat
      });
      
    }
    handleBlur = (event) => {
      const {value,name}= event.target;
     

      this.setState({
        [name]: value
      });
    }
  
    handleChange=(event)=> {
    const {value,name }= event.target;
    const { pre_sends } = this.state;
    
    
    if(name=='message')
    {
      
      if(this.state.name.length<1 )
      { 
        alert('empty name').then(
          this.setState({

            message:'',
            
          })
        )
        
      }else{
        
        if(value.length>=1 && this.state.counter===true)
        { 
         console.log('counter-entry:'+this.state.counter);
         console.log('je suis le filtertest');
         const remove = false ;
         const message = undefined ;
         Sender(this.state.name,message,remove);           
         this.setState({
          counter: false
         });
         console.log('counter-output:'+this.state.counter);
          
        }

        if(value.length==0 && this.state.counter===false)
        {  
          console.log('remover-entry:'+this.state.counter);
          console.log('remove test')
          const remove = true ;
          const message = undefined ;
          Sender(this.state.name,message,remove);
          this.setState({
            counter: true
          });
          console.log('remover-output:'+this.state.counter);
          
        }
        
  
       
        
      }
     
     
    };
    
    this.setState({
      [name]: value
    });
        
  }
    
  
    handleSubmit=(event)=> {
      event.preventDefault();
      console.log('je suis le submit handler')
      const {value,name }= event.target;
     
      if(this.state.name.length<1 )
      { 
        alert('empty name').then(
          this.setState({
            message:'',
          
          })
        );

       
        
      }else{

        if(this.state.message.length<1 )
        { 
          alert('empty message');
               
        }

        if(this.state.name.length>1 && this.state.message.length>1)
        { 
          console.log('envoie de la data à mercure');
  
          // {this.Sender(this.state.name,this.state.message)}
          Sender(this.state.name,this.state.message);
          this.setState({
            message:'',
              
          });
          
          
            
        }
        
      }
     
     
  }
    
    handleClick=(event)=> {
      const {value,name }= event.target;
      
      this.setState({
        [name]: value
      });
  }
    
    
  componentDidMount()
  { 
    let page = 'chat'
    localStorage.setItem('page',page);
    const url = new URL('https://owedding.fr/hub');
    
   
   
    url.searchParams.append('topic', 'http://monsite.com/ping/'+this.state.name);
      
      
    // * Pour cela, il paraît que `prototype` et `this` sont utiles :
    // *
    // *    Array.prototype.hello = function() {
    // *      console.log('Je suis un array qui contient ' + this.length + ' éléments.');
    // *    }
    // *
    // *    ['un', 'deux', 'trois'].hello() // => Je suis un array qui contient 3 éléments.
      
      
      
    const eventSource = new EventSource(url);
      
      
    eventSource.onmessage = e => 
    {
      console.log(e)
  
      
      let newData = JSON.parse(e.data);
      console.log(newData.hour);
      console.log(newData.name);
      console.log(newData.message);
      console.log(newData.remove);
      if(newData.message!=undefined && newData.name!=undefined)
      {   
          
        //j'affiche le message envoyer et j'efface que l'utilisateur était entrain de tapé .
        {this.removePre_send(newData.name)};
        {this.addBubble(newData.name,newData.message,newData.hour)};
        const div = document.getElementById('conversation');
        div.scrollBy(1000000000000,50000000000000000);
       
        
          
          

      }else{

        if(newData.remove!=undefined && newData.name!=undefined && newData.message==undefined)
        {
         
          //j'efface l'affichage du message en train d'être tapé
          {this.removePre_send(newData.name)};

        }else{

          if(newData.name!=undefined && newData.message==undefined && newData.joined==undefined)
          {
            //j'affichage qu'un utilisateur est entrain de taper un message

            {this.addPre_send(newData.name)};
            
          }
        }
          
      }

      
      
    }
      
  }     
      
  
  render() {
    return (
      <div id="outerFlex">
          <h1 id="bienvenue">Bienvenue sur le chat des mariés</h1>
   
      <div id="flexContainer">
  
      <div id="dashNav">
      
      <DashNav/>
      </div>
      
      <div className="wrapper-message">
      
        
       
        
        < Conversation chat={this.state.chat} />

        
        <Pre_send pre_sends={this.state.pre_sends} />
        
            
            
        <form onSubmit={this.handleSubmit} id="ui"  className="ui form">
          <div className="field">
            <label></label>
            <input type="hidden" id="user-id" name="id" value="{{ id }}"/>
            <input id="field-name"
            type="hidden" name="name" 
            placeholder="Nom"
            onChange={this.handleChange}
            onClick={this.handleClick}
            onBlur={this.handleBlur}
            value={this.state.name}
              />
          </div>
          <div className="field">
            <label>Message</label>
            <input id="field-message"
            name="message"  
            onChange={this.handleChange}
            onClick={this.handleClick}
            onBlur={this.handleBlur}
            value={this.state.message}
            rows="2"  
            placeholder="Votre message"/>
          </div>
          <div id="buttons">
            <button className="ui button" id="sub-button" type="submit">Envoyer</button>
           
          </div>
          <div id="connected-list">

          </div>
        </form>

      </div>
      </div> 
      </div>         
    );
}

    
}
       


export default Chat;



   