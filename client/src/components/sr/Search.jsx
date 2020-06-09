import React from 'react';

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
    //console.log(search)
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

    <div className="search">
      <form onSubmit={this.submitSearch}>
        <input type="text" placeholder="Search For Summoner.." value={this.state.value} onChange={this.handleInputChange}/>
        <input type="submit" value="Submit"/>
      </form>

    </div>
    )

  }




}




export default Search ;