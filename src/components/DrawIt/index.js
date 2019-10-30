import React from 'react';
import Conversation from './Conversation';
import Pre_send from'./Pre_send';
import Sender from'./Sender';
import DashNav from 'src/containers/DashNav';
import store from "../../store";
import './drawIt.scss';
import {
  drawSwitch ,drawSwitchOff,saveCanvas
} from 'src/store/reducers/appReducer';
import axios from 'axios';
import querystring from 'query-string';





class DrawIt extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      status:'Déssiner',
      message:'',
      name:store.getState().userReducer.username,
      chat:[],
      pre_sends:[],
      counter:true,
      colorStyle:'',
      wordChoiceStatus:'Choisir un mot',
      wordSelection:'',
      wordPicked:'Aucun',
      visibility:'hidden'
    
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
      const newPreSend = pre_sends.filter(text=>text.name!==name);
      this.setState( { pre_sends: newPreSend} );
    }

    addBubble = (name,message,hour) =>{
      const {chat:currentChatData} = this.state;
      const id=currentChatData.length+1;
      

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
    console.log(value,name)
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
    let page = 'DrawIt'
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
          if(newData.canvasData===true)
          {
              console.log('testcanvas:ok');
              console.log(newData.canvas);
              
              var image = new Image(500, 500);
              image.src = newData.canvas;
              var target =  document.getElementById('DrawIt').getContext('2d');
              
              target.drawImage(image, 0, 0);
              
          }
        }
          
      }

      
      
    }
      
  }
  handleClickCanvas=(event)=>{
		
		const {value,name }= event.target;
		console.log(event.target);
		
		store.dispatch(drawSwitch());
		
	}
	handleClick2=(event)=>{
		const {value,name }= event.target;
    console.log(event.target);
    if(name=='choice-a-word-button')
    {
      this.setState({
        visibility:'visible' 
      });
    }
    if(name=='delete-button'){
      this.setState({

        colorStyle:'#e1e6e0',
        
      });
    }
		if(name=='start-button'){
			if(this.state.status=='Déssiner')
			{
				this.setState({

					status:'Envoyer le déssin',
					
				});
				store.dispatch(drawSwitchOff());

			}else{

				this.setState({

					status:'Déssiner',
					
        });
        const baseUrl = 'https://owedding.fr/admin';
				store.dispatch(drawSwitchOff());
				var target =  document.getElementById('DrawIt');
        console.log('je suis la target:'+target);
        var imgData =  target.toDataURL("image/png");
        
        console.log(imgData);
        
				var NewCanvas = {
					canvas:imgData
				}
				const actionSaveCanvas = saveCanvas( NewCanvas);
        store.dispatch(actionSaveCanvas);
        console.log('canvas-value'+store.getState().appReducer.canvas);
       
			
			}
		
		}
			// //méthode pour envoyer une copie d'un canvas à un autre en API ou via mercure
		// var destCtx = destinationCanvas.getContext('2d');
		
		// //call its drawImage() function passing it the source canvas directly
		// destCtx.drawImage(sourceCanvas, 0, 0);
	}
	handleMove=(event)=>{

		var target =  event.target.getContext('2d');
		var rect =  event.target.getBoundingClientRect();
		console.log(this.state.status);
		console.log(target);
		console.log(rect);
		console.log(store.getState().appReducer.draw);
		if(store.getState().appReducer.draw ===true && this.state.status=='Envoyer le déssin')
		{
			target.beginPath(); // begin
			target.lineWidth = 5;
			target.lineJoin = 'round';
			target.lineCap = 'round';
			target.strokeStyle = this.state.colorStyle;
			var x=(event.clientX - rect.left) / (rect.right - rect.left) * event.target.width;
			var y = (event.clientY - rect.top) / (rect.bottom - rect.top) * event.target.height;
			target.moveTo(x,y);
			target.lineTo(x,y);
			target.fillStyle = this.state.colorStyle;
			target.stroke();
			target.closePath();
			console.log('cursorX:'+x);
			console.log('cursorY:'+y);
			
		}
	}     
  handleColorPicker=(event)=>{
    const {value,name }= event.target;
    
    console.log(name )
    if(name =='WordPicker'){
      console.log('wordPickerSelection')
      this.setState({
        wordSelection:value,
        wordPicked:value,
      });
    }else{
      this.setState({
        colorStyle:value,
          
      });
    }
  
  }

  handleSubmitWordPicker=(event)=>
  {
    event.preventDefault();
    const {value,name }= event.target;
    console.log('submitWord');
    console.log(name);
    if(name =='formPicker'){
      this.setState({

        visibility:`hidden`,
        wordChoiceStatus:`Changer de mot`,
          
      })
    }
  }
  
  render() {
    return (
      <div id="outerFlex">
          <h1 id="bienvenue">Bienvenue sur le pictionnary au thème du mariage</h1>
   
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
			<div id="game">
       <div id="selectedWord"><p>Mot choisis:{this.state.wordPicked}</p></div>
			<canvas
			ref={this.canvasRef}
			onMouseMove={this.handleMove}
			onClick={this.handleClickCanvas}
			id="DrawIt" 
			/>

			<div id="buttonsDraw">
      <button 	onClick={this.handleClick2} name="start-button" id="start">{this.state.status}</button>
      <button 	onClick={this.handleClick2} name="delete-button" id="start">Effacer</button>
      <button 	onClick={this.handleClick2} name="choice-a-word-button" id="start">{this.state.wordChoiceStatus}</button>
      </div>
			
      <div id="colorPicker">
      
      <label>Choississez une couleur </label>
      <input onChange={this.handleColorPicker} value={this.state.colorStyle} name="Color Picker" type="color" id="changeColor"/>
     
      </div>
      <div style={{ visibility:this.state.visibility }} id="wordSelector">
      <form  onSubmit={this.handleSubmitWordPicker} name="formPicker">
      <label>Choississez un mot </label>
      <input onChange={this.handleColorPicker} value={this.state.wordSelection} name="WordPicker" type="text" id="choiceWord"/>
      <button className="ui button" id="sub-button" type="submit">Valider</button>
      </form>
      </div>
    
            </div>
            
        </div>
       
      </div>         
    );
}

    
}
       


export default DrawIt;



   