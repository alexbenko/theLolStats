import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  handleInputChange(search){
    console.log(search)
    //this.props.handleSearchChange(search.target.value);
    this.setState({
      search: search.target.value,
    })
  }

  submitSearch(event){
    event.preventDefault();

    this.props.handleSearchChange(this.state.search);

  }

  render(){
    return (

    <div className="search" style={{paddingBottom:"7em",paddingLeft:"35%"}}>


        <InputGroup className="text-center" style={{width:"40%"}}>
          <FormControl

            value={this.state.value}
            onChange={this.handleInputChange}
            placeholder="Search For A Summoner..."
            aria-label="Search For A Summoner..."
            aria-describedby="basic-addon2"
            />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.submitSearch}>Search</Button>
          </InputGroup.Append>
        </InputGroup>




    </div>
    )

  }




}

/*
 <form onSubmit={this.submitSearch}>
        <input type="text" placeholder="Search For Summoner.." value={this.state.value} onChange={this.handleInputChange}/>
        <input type="submit" value="Submit"/>
      </form>
*/


export default Search ;