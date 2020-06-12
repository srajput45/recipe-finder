import React, {Component} from  'react';
import ReactDOM from 'react-dom';
import './Search.css';
import Recipe from '../../pages/recipe/Recipe'

class Search extends Component{
    constructor(){
        super();
        this.state = {
            dish : ""
        }
    }
    dishHandler = (e) =>{
        this.setState({dish: e.target.value});
    }
    recipeHandler = () => {
        ReactDOM.render(<Recipe  dish = {this.state.dish} />, document.getElementById('root'));
    }
    render(){
        return(
            <div>
                <div className='search'>
                    {
                        this.props.searchDish === 'true' ? <input className="searchBar" type="text" dish={this.state.dish} onChange={this.dishHandler} value={this.state.dish} /> : 
                        <input type="text" className="searchBar" dish={this.state.dish} onChange={this.dishHandler}  placeholder="Enter the Name of the Dish" />
                    }
                    
                    {
                        //<input type="text" className="searchBar" dish={this.state.dish} onChange={this.dishHandler}  placeholder="Enter the Name of the Dish" />
                    }
                    <button onClick={() => this.recipeHandler()}>Get Ingredients</button>
                </div>
            </div>
        )
    }
}
export default Search;