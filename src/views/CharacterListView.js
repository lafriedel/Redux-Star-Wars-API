import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("CDM in CharListView", this.props);
    this.props.fetchChars();
  }

  render() {
    console.log("render CharListView props ", this.props);
    return (
      <div>
      {this.props.isFetching && (<p>Loading...</p>)}
      {this.props.characters && (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      )}
      </div>
    );

  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  isFetching: state.isFetching
})

export default connect(mapStateToProps,
  {
   fetchChars
  }
)(CharacterListView);
