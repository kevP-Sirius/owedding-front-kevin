import React from 'react';
import './dropzone.scss';
import DashNav from 'src/containers/DashNav';
import PropTypes from 'prop-types';
import LoadingForUpdateFile from 'src/components/LoadingForUpdateFile';

// == Composant
const Dropzone = ({ username, token, uploadFile, loading }) => {
  const handleDragEnter = () => (e) => {
    console.log('dragEnter:ok')
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('drop_file_zone').style.border = '2px solid #0B85A1'; 
  };

  const handleDragLeave = () => (e) => {
    console.log('dragLeave:ok');
    document.getElementById('drop_file_zone').style.border = '#999 5px dashed';   
  };

  const handleDragOver = () => (e) => {
    console.log('dragOver:ok');
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDrop = () => (e) => {
    document.getElementById('drop_file_zone').style.border ='#999 5px dashed';
    console.log('drop:ok');
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
    for (let i = 0; i < files.length; i++) 
    {
      console.log(files[i].type==="image/png" || files[i].type==="image/jpeg"||files[i].type==="image/jpg");
      if(files[i].type==="image/png" ||files[i].type==="image/jpeg"||files[i].type==="image/jpg"){
        console.log(files[i].type);
        const fd = new FormData();
        fd.append('file', files[i]);
        fd.append('username', username);
        fd.append('token', token);
        console.log(files[i]);
        console.log(fd);
        uploadFile(fd);
        
      }else{
        alert('type non pris en charge(png,jpeg,jgp autorisé uniquement)')
      }
     
    }    
  };

  return (
    <div id="Upload">
      <div id="nav-left">
        <DashNav />
      </div>
      <div id="Board">
        <div onDrop={handleDrop()} onDragEnter={handleDragEnter()} onDragOver={handleDragOver()} onDragLeave={handleDragLeave()} id="drop_file_zone" >
          <div id="drag_upload_file">
            <div>{loading ? <LoadingForUpdateFile /> : 'Faite glisser vos fichiers' } </div>
           
          </div>
        </div> 
    {/* div de fermedure de Board*/}  
      </div>

    {/* div de fermedure de Upload */}
    </div>
   
     
  );
}; 
Dropzone.propTypes = {

  uploadFile: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired, 
    
};
// == Export
export default Dropzone;
