import React, {Component} from 'react';

export default class DummyList extends Component{

    displayData = ()=>{
       
        var list = this.props.dummyData.map(item=>{
          return  <li key={item}>{item}</li> 
        });
        return (<ul>
            {list}
        </ul>);
    }

    render(){
        return (
            <div>
                {this.props.dummyData.length > 0 ?this.displayData():<h1>Loading Dummy Data</h1>}
            </div>
        )
    }
}