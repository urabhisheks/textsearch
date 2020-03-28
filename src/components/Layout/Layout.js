import React, { Component } from 'react'
import classes from './Layout.module.css';
import {connect} from 'react-redux';

let disabled = true;
let strLen;
class Layout extends Component {

  state={
    searchTerm:'',
    display:false,
    disabled:true,
    results: null,
  }

  handleChange =e => {
    strLen = e.target.value.length;
    if(strLen >=3){
      disabled = false
    }
    this.setState({searchTerm:e.target.value, disabled});
  }

  onClickHandler = e => {
    
    let {data} = this.props;
    let keys = Object.keys(data);
    let temp = [];
    let individualStr = this.state.searchTerm.split(' ');
    individualStr.map(str => {
      temp = temp.concat(keys.filter(key => key.includes(str)));
    })
    keys = temp;
    
    let result =[];
    keys.map(key => {
      result.push(data[key]);
    });
    console.log('keys ', keys);
    console.log('keys ', result);
    this.setState({disabled:true, display:true, results:Object.keys(result)? result:null});
  }
  render() {
    let noResults  = (<div className={classes.Noresult}>No Results Found!!</div>);
    let results = null;
    let resultKey;
    let filename;
    console.log('Results ', this.state.results);
    if(this.state.results){
      results =this.state.results.map((result, index) => { 
        console.log('result ', result, Object.keys(result)[0])
        resultKey = this.state.searchTerm.split(' ')[index];
        filename = Object.keys(result.filename)[0];
        console.log('Index: ',result.filename[filename])
          return (<div className={classes.result} key={index}>
            <div><strong>Found:     </strong> {resultKey}</div>
            <div><strong>Filename:  </strong>{filename}</div>
            <div><strong>Frequency: </strong>{result.count}</div>
            <div><strong>Index:     </strong>{result.filename[filename].join(', ')}</div>
        </div>)}
      )
    }
    console.log('Data ', this.props.data);
    return (
      <div className={classes.Layout}>
        <div>
          <input 
            className={classes.Input} 
            placeholder='Enter Search Term'
            type='text' onChange={this.handleChange}  value={this.state.searchTerm}/>
        </div>
        <div className={classes.Button}>
          <button type="button" 
              onClick ={this.onClickHandler}
              className={`${classes.button} btn btn-primary`} 
              disabled={this.state.disabled}>Search</button>
        </div>
        { this.state.display && <hr className={classes.Ruler}/>}
        {this.state.display && <div>
          {!this.state.results && noResults}
        </div>}
        {results}
      </div>
    );
  }
}

const mapStateToProps = ({document}) => ({
  data: document.data
});

export default connect(mapStateToProps)(Layout);