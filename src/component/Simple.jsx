import React from 'react';
import SimpleChart from "./SimpleChart";

export default class Chart extends React.Component {
  render(){
    return (
      <div>
        <h1>Simple Chart</h1>
        <div id={"canvas"}/>
        <SimpleChart
          data={[6, 4, 3, 8, 11, 12]}
          width={600}
          height={400}
        />
      </div>
    );
  }
}
