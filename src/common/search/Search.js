import React, {Component} from  'react';
import ReactDOM from 'react-dom';
import './Search.css';
import Recipe from '../../pages/recipe/Recipe'
{
    // Search class component which send dish name as a props to Recipe.js page. 
}
class Search extends Component{
    constructor(){
        super();
        this.state = {
            dish : "" //this variable store the dish name
        }
    }
    dishHandler = (e) =>{
        e.persist();
        this.setState({dish: e.target.value}); // setting te dish name.
    }
    recipeHandler = () => {
        ReactDOM.render(<Recipe  dish = {this.state.dish} />, document.getElementById('root')); // Render to the Recipe page after clicking the ingredient button
    }
    render(){
        return(
            <div>
                <div className='search'>
                    <input type="text" className="searchBar" dish={this.state.dish} onChange={this.dishHandler}  placeholder="Enter the Name of the Dish" />
                    <button onClick={() => this.recipeHandler()}>Get Ingredients</button>
                </div>
            </div>
        )
    }
}
export default Search;