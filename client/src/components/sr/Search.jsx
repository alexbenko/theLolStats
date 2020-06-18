import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleInputChange(search){

    this.setState({
      search: search.target.value,
    });
  }

  submitSearch(event){
    //event.preventDefault();

    this.props.handleSearchChange(this.state.search);
    this.clearSearch();
  }

  clearSearch(){
    this.setState({
      search: ""
    })
  }



  render(){
    return (

    <div className="search" style={{paddingBottom:"2em",paddingLeft:"38%",paddingRight:"25%",display:"flex",flexDirection:"row"}}>
        <input style={{width:"50%"}}type="text" value={this.state.search}  placeholder="Search For A Summoner..."onChange={this.handleInputChange}/>
        <Button onClick={this.submitSearch} color="secondary" variant="contained">Search</Button>
    </div>
    )

  }




}

export default Search ;