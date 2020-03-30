import React, { Component } from 'react'
import classes from './Upload.module.css';
import {connect} from 'react-redux';
import {uploadDocument} from '../../actions/index';
import FadeIn from 'react-fade-in';
import { ToastContainer, toast } from 'react-toastify';

let reader = new FileReader();
class Upload extends Component {

  state={
    disabled: true,
    files: null,
    uploaded:false,
  }

  onClickHandler = e => {
    console.log('Upload ', this.state.files);
    // let data = new FormData()
    // this.state.files.map(file =>{
      // data.append('file', file)
    // });
    // data.append('file', this.state.selectedFile)
    // self.props.uploadDocument(files[0].name, text);
    this.props.uploadDocument(this.state.fileName, this.state.data);
    this.setState({disabled:true, uploaded:true})
  }

  onChangeHandler = e => {
    let {files} = e.target;
    let err = [];
    
    const types = ['text/plain']
    for(let i = 0; i<files.length; i++) {
        if (types.every(type => files[i].type !== type)) {
        err[i] = files[i].type+' is not a supported format\n';
      }
    };
    if(!err.length && files.length){
      this.setState({disabled:false, files: files});
      // let reader = new FileReader();
      let self = this;
      reader.onload = function() {
        let text = reader.result;
        // console.log('Reader', reader.result.substring(0, 200));
        // console.log('Reader ', 'name',files[0].name , text.split('\n').join(' ').trim().split(' '));
        let separators = [' ', '\\+', '\\(', '\\\)','\\*', '/', ':', '\\\?', '\n'];
        // console.log('Reader ', 'name',files[0].name , text.split('\n'));
        // console.log('Reader ', 'name',files[0].name , text.split('\n').join(' '));
        text = text.split(new RegExp(separators.join('|')));
        text = text.filter(el => el!='');
        self.setState({fileName:files[0].name, data:text });
        // self.props.uploadDocument(files[0].name, text);
        // console.log('Reader ', 'name',files[0].name , text);
      };
      
      reader.onerror = function(event) {
        console.log('error')
        reader.abort();
      };
      reader.readAsText(files[0]);
    } else{
      this.setState({disabled:true, error:err});
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className={classes.Upload}>
        <input className = {classes.file} type='file' onChange={this.onChangeHandler}/>
         <button type="button" 
            onClick ={this.onClickHandler}
            className={`${classes.button} btn btn-primary`} 
            disabled={this.state.disabled}>Upload</button>
          {this.state.uploaded && <FadeIn delay={100} >
            <div className={classes.success}>File uploaded successfully </div>
          </FadeIn>}
      </div>
    );
  }
}

export default connect(null, {uploadDocument})(Upload);