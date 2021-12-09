import React from "react";
import Square from "./Square";
import "./Grid.css";
import { useNavigate } from "react-router";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      y: 10,
      gridArray: [],
    };

    this.gridArray = [];
    this.rowArray = [];

    if (this.props.grid !== undefined) {
      this.setState({
        gridArray: this.props.grid,
      });
      this.gridArray = this.props.grid;
    } else {
      for (let x = 0; x < this.state.x; x++) {
        for (let y = 0; y < this.state.y; y++) {
          this.rowArray.push(<Square />);
        }
        this.gridArray.push(this.rowArray);
        this.rowArray = [];
      }
    }

    this.style = {
      gridTemplateColumns: `repeat(${this.state.x}, 50px)`,
      gridTemplateRows: `repeat(${this.state.y}, 50px)`,
      display: "grid",
      backgroundColor: "#2f3136",
      overflow: "auto",
      padding: "10px",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = (e) => {
    e.target.style.backgroundColor = "red";
  };

  handleXChange = (e) => {
    this.setState({ x: parseInt(e.target.value) });
  };

  handleYChange = (e) => {
    this.setState({ y: parseInt(e.target.value) });
  };

  handleChange = (e) => {
    console.log(this.state);

    this.style = {
      gridTemplateColumns: `repeat(${this.state.x}, 50px)`,
      gridTemplateRows: `repeat(${this.state.y}, 50px)`,
      display: "grid",
      backgroundColor: "#2f3136",
      overflow: "auto",
      padding: "10px",
    };

    let tempArray = [];
    let tempRowArray = [];

    for (let x = 0; x < this.state.x; x++) {
      for (let y = 0; y < this.state.y; y++) {
        tempRowArray.push(<Square />);
      }
      tempArray.push(tempRowArray);
      tempRowArray = [];
    }

    this.gridArray = tempArray;

    console.log(this.gridArray);

    this.forceUpdate();
  };

  handleFractal = () => {
    console.log("fractalize");
    //first try to mirror the grid rightways
    console.log(this.state.gridArray);
    console.log(this.gridArray);
    this.props.navigate("/fractal", {
      state: this.gridArray,
    });
  };

  render() {
    return (
      <div className="gridAppContainer">
        <div className="options">
          <label htmlFor="xVal">X Value</label>
          <input
            type="text"
            name="x"
            value={this.state.x}
            onChange={this.handleXChange}
          />
          <label htmlFor="yVal">Y Value</label>
          <input
            type="text"
            name="y"
            value={this.state.y}
            onChange={this.handleYChange}
          />
          <button onClick={this.handleChange}>Submit</button>
          <button onClick={this.handleFractal}>Fractalize</button>
        </div>
        <div className="grid-container" style={this.style}>
          {this.gridArray}
        </div>
      </div>
    );
  }
}

function GridNav(props) {
  const navigate = useNavigate();
  return <Grid {...props} navigate={navigate} />;
}

export default GridNav;
