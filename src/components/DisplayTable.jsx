import React, { Component } from "react";
import PropTypes from "prop-types";
import Column from "./Column";

export class DisplayTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getData = async () => {
    // get data from API
    // fetch as promise
    // or fetch with async wait
    // return data
    const response = await fetch(
      "https://api.github.com/repos/facebook/react/stats/commit_activity"
    );
    const data = await response.json();

    console.log("data : ", data);
    return data;
  };

  // Usually should use state managment... this is for this instance only
  componentDidMount(props) {
    this.getData().then(response => {
      this.setState({ data: response });
    });
  }

  static propTypes = {};

  renderWeeks = () => {
    const { data } = this.state;
    if (data.length <= 0) {
      return "";
    }

    const weeks = data.map(week => {
      return <Column week={week} />;
    });

    return weeks;
  };

  render() {
    const { data } = this.state;
    return <div class="allWeeks">{this.renderWeeks()}</div>;
  }
}

export default DisplayTable;
