import React, {Component} from 'react';
import './MultiDonut.css';


class MultiDonut extends Component {

    render() {

        const firstStyle = {
            "--percentage": "80",
            "--fill": "#0669AD"
          };
        
        const secondStyle = {
            "--percentage": "60",
            "--fill": "#E62A39"
        };

        const thirdStyle = {
            "--percentage": "30",
            "--fill": "#FEDA3E"
        };

        


        return(
            <div className="multi-graph margin">
            JavaScript
            <div className="graph" data-name="JQuery" style={firstStyle}/>
            <div className="graph" data-name="Angular" style={secondStyle}/>
            <div className="graph" data-name="React" style={thirdStyle}/>
            </div>
        )
    }


}


export default MultiDonut;