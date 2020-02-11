import React, {Component} from 'react';
import './Donut.css';


class Donut extends Component {

    render() {

        const firstStyle = {
            "--percentage": "80",
            "--fill": "#FF3D00"
          };
        
        const secondStyle = {
            "--percentage": "90",
            "--fill": "#039BE5"
        };


        return(
            <div>
                 <div class="semi-donut margin"  style={firstStyle}>
                    Java
                </div>
                <div class="semi-donut margin" style={secondStyle}>
                    Postgres
                </div>
            </div>
        )
    }


}


export default Donut;