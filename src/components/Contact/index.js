import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import { Script } from 'vm';
import { render } from 'react-dom';
import ReCAPTCHA from "react-google-recaptcha";

import './contact.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '' ,
          message: '' ,
          email:'',
          formName: ``,
          UsernameAlert: ``,
          MessageAlert: ``,
          EmailAlert: ``,
          HasErrorUsername: ``,
          HasErrorMessage: `` ,
          HasErrorEmail: ``,
          BaseUrl1: `http://92.243.10.85/Owedding_BACK/O_wedding-back-end/public//api/contact/admin`,
          BaseUrl2: `http://127.0.0.1:8001/api/`,
          UserToken:`` ,
          LoginStatus: false ,
          Confirmation:``,
          visibility:`visible`,
          visibilityHeart:`hidden`,
          CaptchaValue:``,
          RecaptchaAlert:``
         
        };
  
      
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickOnSwitchForm = this.handleClickOnSwitchForm.bind(this);
        this.handleClickOnInput1 = this.handleClickOnInput1.bind(this);
        this.handleClickOnInput2 = this.handleClickOnInput2.bind(this);
        this.handleClickOnInput3 = this.handleClickOnInput3.bind(this);
  
    }
  
      //input identifiant
      handleClickOnInput1=(event) => 
      {
        const target = event.target;
        const value = target.value;
        const name = target.name ;
        const errorStyle = `3px solid #de1212`;
        const VerifiedStyle = `2px solid #3b866a`
        const reUser = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]{2,16}$/;
        
        console.log(name)
  
        if(reUser.test(value) ===false | this.state.username.length >=16 )
          {
             
              
            this.setState({
              HasErrorUsername: errorStyle
            });
  
  
          }
          else {
            
            if(name === 'username'){
  
              if(value.length>=3)
              {
                this.setState({
  
                  HasErrorUsername: VerifiedStyle
  
                });
              }
            }
  
         
            
  
          }
  
  
        this.setState({
          [name]: value
        });
      }
      //il s'agit du message
      handleClickOnInput2=(event) => 
      {
        const target = event.target;
        const value = target.value;
        const name = target.name ;
        const errorStyle = `3px solid #de1212`;
        const VerifiedStyle = `2px solid #3b866a`;
        const reMessage = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{25,}$/;
  
  
  
        console.log(name)
        if(value.length>=10 )
          {
              
         
            this.setState({
              HasErrorMessage: VerifiedStyle
            });
          
          } 
          else
          {
            if(reMessage.test(value) == false )
            {
             
              this.setState({
                HasErrorMessage: errorStyle
              });
            
            } 
          }
  
  
  
  
  
        this.setState({
          [name]: value
        });
      }
  
      //input email
      handleClickOnInput3=(event) => 
      {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const errorStyle = `3px solid #de1212`;
        const VerifiedStyle = `2px solid #3b866a`;
        const reMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
        console.log(name)
        
        if(reMail.test(value) === true)
        {
  
          this.setState({
  
            HasErrorEmail: VerifiedStyle
  
          });
  
          console.log(reMail.test(value))
          console.log('mail OK')
        }
        else
        { 
          
            this.setState({
              HasErrorEmail: errorStyle
            });
            console.log(reMail.test(value))
            console.log('mail KO')
        }
  
  
        this.setState({
          [name]: value
        });
      }

      handleClickOnSwitchForm=(event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name ;
        // event.preventDefault();
        console.log('The link was clicked.');
        console.log(target);
  
       
        
        
      
  
        this.setState({
          [name]: value
        });
        
        
      }
     
  
      handleBlur = (event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name ;
       
  
        this.setState({
          HasErrorUsername: ``,
          HasErrorMessage: `` ,
          HasErrorEmail: `` ,
        });
        this.setState({
          [name]: value
        });
      }
      onErrored=(value)=>{
        this.setState({
          RecaptchaAlert: `Erreur de connexion`,
          
        });
      }
      OnExpired=(value)=>{
        this.setState({
          CaptchaValue: ``,
          RecaptchaAlert: `Captcha expiré , veuillez recommencer`,
          
        });
      }
      onChange=(value)=> {
        console.log("Captcha value:", value);
        this.setState({
          CaptchaValue: value,
          RecaptchaAlert: ``,
          
        });
      }
      handleChange = (event) => {
  
        const target = event.target;
        const value = target.value;
        const name = target.name ;
        const errorStyle = `3px solid #de1212`;
        const VerifiedStyle = `2px solid #3b866a`;
        const reMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const reUser = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]{2,16}$/;
        const reMessage =/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]{10,160}$/;
        console.log(name,value,target)
         
        console.log("Captcha value:", value);
        
        
      
        
        
        if(name === 'username')
        {
          if(value.length <3 )
            {
              
              this.setState({
                HasErrorUsername: errorStyle
              });
  
  
            } 
          else 
            {
              
              if(value.length>=3 )
                {
                  this.setState({
  
                    HasErrorUsername: VerifiedStyle,
                    UsernameAlert: ``,
                    
                  });
                }
              
  
            }
        
          
  
        }
  
  
        if(name==='message')
        {
          
          if(value.length>=10 )
            {
    
              this.setState({
                HasErrorMessage: VerifiedStyle,
                messageAlert: ``,
              });
            
            }
             else
            {
             if(reMessage.test(value) === false )
            {
    
              this.setState({
                HasErrorMessage: errorStyle,
                MessageAlert: ``,
               
              });
    
            }
          }
        }
  
  
  
  
        if(name==='email')
        {
          if(reMail.test(value) === true){
  
            this.setState({
              HasErrorEmail: VerifiedStyle,
              EmailAlert:``
            });
          
          }
          else
          { 
            
              this.setState({
                HasErrorEmail: errorStyle,
                

              });
             
          }
        }
  
        this.setState({
          [name]: value
        });
          
        
      }
     
      handleClickOnSubmit=(event) => {
        
        const target = event.target;
        const value = target.value;
        const name = target.name ;
        const errorStyle = `3px solid #de1212`;
        const VerifiedStyle = `2px solid #3b866a`;
        const reMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        
        
        
        this.setState({
          [name]: value
        });
  
        
        if(this.state.username.length<3 )
        { 
          

          this.setState({

            UsernameAlert: `-le nom/prenom doit faire au minimum 3 caractères et au maximum 16`,
            HasErrorUsername: errorStyle
          });
          
        }
        else
        {
          
            this.setState({
              UsernameAlert: ``,
              HasErrorUsername: VerifiedStyle
            });
          
        }

      

    //
    
    
    

      if(this.state.message.length>=10 )
      { 
        

        this.setState({
          
          HasErrorMessage: VerifiedStyle,
          MessageAlert:''

        });
        
      }
      else
      {
         
          this.setState({
            MessageAlert: `-le message doit contenir entre  10  caractères au minimum et au maximum 160 caractères `,
            HasErrorMessage: errorStyle
            
          });
       
      }
    

    

   

      if(reMail.test(this.state.email)===true )
      { 

       
        this.setState({

          HasErrorEmail: VerifiedStyle

        });
        
      }
      else
      {
        this.setState({
          
          EmailAlert: `-format de l'email invalide (exemple@gmail.com)`,
          HasErrorEmail: errorStyle

        });

        
      }

      if(this.state.CaptchaValue==``)
      {

        this.setState({
          
          RecaptchaAlert: `Merci de confirmer que vous n'êtes pas un robot`,
          
        });

      }else{
        this.setState({
          
          RecaptchaAlert: ``,
          
        });

      }
      console.log(this.state.HasErrorEmail,this.state.HasErrorUsername,this.state.HasErrorMessage,this.state.RecaptchaValue)
      if(this.state.HasErrorEmail == VerifiedStyle && this.state.HasErrorUsername == VerifiedStyle && this.state.HasErrorMessage == VerifiedStyle && this.state.CaptchaValue!=``)
      {
        
        

          this.setState({
            Confirmation: `Message en cours d'envoi`,
            RecaptchaAlert:``,
            UsernameAlert: ``,
            MessageAlert: ``,
            EmailAlert:``,
            visibility:`hidden`,
            visibilityHeart:`visible`
          });
         
          console.log('envoie data de contact')
          console.log(this.state.username);
          console.log(this.state.email);
          console.log(this.state.message);
          const username = this.state.username
          const email = this.state.email
          const message = this.state.message
          const querystring = require('querystring');
          const data = querystring.stringify({ 
            
            "name": username,
            "email": email,
            "message" : message
          });
         
         
          axios({

            method: 'post',
            url: 'https://owedding.fr/admin/api/contact/admin',
            headers:{
              'JWT' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              
              
            },
            data: data,
            
              
            
            
          }).then((response) => {
           
            this.setState(
              {
             
                HasErrorMessage: ``,
                HasErrorUsername: ``,
                HasErrorMessage: ``,
                HasErrorEmail: ``,
                username:``,
                email:``,
                message :``,
                
            
              
              });
          
           
             
            if(response.data.send_message_status=='success')
            {
              
              this.setState(
                {
                  Confirmation: `Message envoyé`,             
                });
             
              setTimeout(
                function() {
                
                this.setState(
                  {
                    CaptchaValue:``,
                    Confirmation: ``,
                    visibility:`visible`,
                    visibilityHeart:`hidden`
                  });
                }
                .bind(this),
                3000
              )
             


            }else{
               
              this.setState(
                {
                  Confirmation: `Message non envoyé`,
              
                });
             
              setTimeout(
                function() {
                
                this.setState(
                  {
                    Confirmation: ``,
                    visibility:`visible`,
                    visibilityHeart:`hidden`

                  
                  });
                }
                .bind(this),
                3000
            )
            }
             

              
          })
          .catch(function (error) {
            console.log(error);
          });
        
          
          
            
        

        

       
        

       
      }

    

        
        
        
    }

      handleSubmit(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name ;
        const errorStyle = `3px solid #de1212`;
        const VerifiedStyle = `2px solid #3b866a`;
        const reMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        event.preventDefault();
        
  
  
        this.setState({
          [name]: value
        });
        
          
              if(this.state.username.length<3 )
            { 
              
  
              this.setState({
  
                UsernameAlert: `-le nom/prenom doit faire au minimum 3 caractères et au maximum 16`,
                HasErrorUsername: errorStyle
              });
              
            }
            else
            {
              
                this.setState({
                  UsernameAlert: ``,
                  HasErrorUsername: VerifiedStyle
                });
              
            }
  
          
  
        //
        
        
        
  
          if(this.state.message.length>=10 )
          { 
            console.log()
  
            this.setState({
              
              HasErrorMessage: VerifiedStyle,
              MessageAlert:''
  
            });
            
          }
          else
          {
             
              this.setState({
                MessageAlert: `-le message doit contenir entre  10  caractères au minimum et au maximum 160 caractères `,
                HasErrorMessage: errorStyle
                
              });
           
          }
        
  
        
  
       
  
          if(reMail.test(this.state.email)===true )
          { 
  
           
            this.setState({
  
              HasErrorEmail: VerifiedStyle
  
            });
            
          }
          else
          {
            this.setState({
              
              EmailAlert: `-format de l'email invalide (exemple@gmail.com)`,
              HasErrorEmail: errorStyle
  
            });
  
            
          }
  
        

        if(this.CaptchaValue==`false`){

          this.setState({
            
            RecaptchaAlert: `Merci de confirmer que vous n'êtes pas un robot`,
            
          });
        }
      
        
       
       
        if(this.state.HasErrorEmail == VerifiedStyle && this.state.HasErrorUsername == VerifiedStyle && this.state.HasErrorMessage == VerifiedStyle && this.state.CaptchaValue!=`` )
        {
        
          if(this.state.formName ==='Contact')
          {

            this.setState({
              Confirmation: `Message en cours d'envoi`,
              UsernameAlert: ``,
              MessageAlert: ``,
              EmailAlert:``,
              visibility:`hidden`,
              visibilityHeart:`visible`
            });
           
            console.log('envoie data de contact')
            console.log(this.state.username);
            console.log(this.state.email);
            console.log(this.state.message);
            const username = this.state.username
            const email = this.state.email
            const message = this.state.message
            const querystring = require('querystring');
            const data = querystring.stringify({ 
              
              "name": username,
              "email": email,
              "message" : message
            });
           
           
            axios({
  
              method: 'post',
              url: 'https://owedding.fr/admin/api/contact/admin',
              headers:{
                'JWT' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.NFCEbEEiI7zUxDU2Hj0YB71fQVT8YiQBGQWEyxWG0po',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                
                
              },
              data: data,
              
                
              
              
            }).then((response) => {
             
            //  procedure de login standard
             console.log(response.data.send_message_status)
               
              if(response.data.send_message_status=='success')
              {
                
                this.setState(
                  {
                    Confirmation: `Message envoyé`,
                    HasErrorMessage: ``,
                    HasErrorUsername: ``,
                    HasErrorMessage: ``,
                    HasErrorEmail: ``,
                    username:``,
                    email:``,
                    message :``,
                    
                
                  
                  });
               
                setTimeout(
                  function() {
                  
                  this.setState(
                    {
                      Confirmation: `Attention, la page vas être rechargée`,
                     
                     

                    
                    });
                  }
                  .bind(this),
                  3000
                )

                setTimeout(
                  function() {
                  
                    window.location.reload();
                  }
                  .bind(this),
                  5000
                )

               
              }
               
  
                    
  
                
            })
            .catch(function (error) {
              console.log(error);
            });
          
            
            
              
          }
  
          
  
         
          
  
         
        }
        
        
  
        
  
      }
      
      
      
          
        
    
      render() {
        return (
        
      
         <form onSubmit={this.handleSubmit}>
        <div id="introContact">
          <h3>Un renseignement ?</h3>
          <h3>Une question ?</h3>
          <h3>Un bug ?</h3>
          <p>Nous sommes là pour vous aider.</p>
        </div>

        <div id="login"> 
        
        <form  style={{ 
        }}
        action="" id="login-form" method="post" autoComplete="off">
          <div id="form-title">{this.state.formName=`Contact`}</div>
          <div class="login-input">
            <div class="field">
              <label id="label-username"
                class="field-label"
                for="field-username"
              >
                nom/prenom
              </label>
            
              <input
              
                

                class="field-input"
                id="field-username"
                name="username"
                type="text"
                style={{  
                  border : this.state.HasErrorUsername,
                
              }}
                value={this.state.username}
                onChange={this.handleChange}
                onClick ={this.handleClickOnInput1}
                onBlur ={this.handleBlur}
                placeholder="nom/prenom"
              />
          
            </div>
            <div class="field">
                        <label id="label-username"
                          class="field-label"
                          for="field-username"
                        >
                          email
                        </label>
                        <input
                          class="field-input"
                          id="field-username"
                          name="email"
                
                          style={{  
                            border : this.state.HasErrorEmail,
                          
                        }}
                          type="text"
                          value={this.state.email}
                          onChange={this.handleChange}
                          onClick ={this.handleClickOnInput3}
                          onBlur ={this.handleBlur}
                          placeholder="email"
                        />
                      
                      </div>
            <div class="field">
              <label id="label-message"
                class="field-label"
                for="label-message"
              >
                Message
              </label>
              
              <textarea
                class="field-input"
                id="field-message"
                name="message"
                type="textarea"
                style={{ 

                  border : this.state.HasErrorMessage,
                  
                }}
                value={this.state.message}
                onBlur ={this.handleBlur}
                onChange={this.handleChange}
                onClick ={this.handleClickOnInput2}
                placeholder="Veuillez nous laisser votre message ..."
              > ...</textarea>
              <p className="condition">*Entre 10 et 160 caractères</p>
            
            </div>
          </div>
          <div id="recaptcha">
          <ReCAPTCHA
            sitekey="6LeIa7wUAAAAAHBZkkITG25iHKGO2_BsRHZW8hke"
            onChange={this.onChange}
            onExpired={this.OnExpired}
            onErrored={this.onErrored}
          />
          </div>
          <button onClick ={this.handleClickOnSubmit} style={{ visibility:this.state.visibility }} id="login-submit">Envoyer</button>

          <div id="errors">
                    <p>{this.state.UsernameAlert}</p>
                    <p>{this.state.MessageAlert}</p>
                    <p>{this.state.EmailAlert}</p>
                    <p>{this.state.RecaptchaAlert}</p>
                    
             
          </div>
          
           <div id="confirmation-message">
           <div  style={{ visibility:this.state.visibilityHeart }} class="lds-heart"><div></div></div>
           <p>{this.state.Confirmation}</p>
           </div>
          
      </form>


      </div>
          
          </form>
        
        
     
        
         
    );
  }

    
}
       


export default Contact;



   