import React, {Component} from 'react';

export default class Author extends Component{
    displayAuthors = ()=>{
      
        var list = this.props.authors.map(item=>{
          return  <li key={item.id}>
            <ul >
            {Object.keys(item).map((key,index)=>{
                    return <li style={{display:'inline-block',marginLeft:'15px',width:'200px'}} key={index}>{item[key]?item[key]:'-'}</li>
                })
            }
            </ul>
          </li> 
        });
        return (<ul>
            {list}
        </ul>)
    }
    render(){
       
        return (
            <div>
                {this.props.authors.length > 0 ?this.displayAuthors():<h1>Loading Authors</h1>}
            </div>
        )
    }
}