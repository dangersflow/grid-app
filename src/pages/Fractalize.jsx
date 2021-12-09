import React from "react";
import { useLocation } from "react-router";
import GridNav from "../components/Grid";

class Fractalize extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;

    console.log(this.state);
    console.log("the GRID has made it here", this.props);
  }
  render() {
    return (
      <div>
        <GridNav grid={this.props.gridArray} />
      </div>
    );
  }
}

function FractalizeState() {
  const { state } = useLocation();
  return <Fractalize state={state} />;
}

export default FractalizeState;
