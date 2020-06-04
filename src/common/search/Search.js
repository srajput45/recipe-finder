import React, {Component} from  'react';
import './Search.css';

class Search extends Component{
    render(){
        return(
            <div>
                <div className='search'>
                    <input type="text" placeholder="Enter the Name of the Dish" />
                    <button>Get Ingridients</button>
                </div>
            </div>
        )
    }
}
export default Search;