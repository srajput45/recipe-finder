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
            dish : "" ,//this variable store the dish name,
            dataFound: 0, // It change to 1 when API has any data.
            dishDetail: [{}] // It is use to store the data which we get from the API.
        }
    }
    dishHandler = (e) =>{
        this.setState({dish: e.target.value}); // setting the dish name.
    }
    recipeHandler = () => {
        console.log(this.state.dish);
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function(){
            if(this.readyState === 4 && this.status===200 ){
                console.log('ready');
                if(JSON.parse(this.responseText).meals != null){
                    that.setState({dishDetail : JSON.parse(this.responseText).meals[0], dataFound: 1}); // Setting the response data in dishDetail and set dataFound to 1.
                }
            }
        })
        xhr.open("GET",'https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/search.php?s='+this.state.dish, true);
        //Used https://cors-anywhere.herokuapp.com/ to remove the CORS error.
        xhr.setRequestHeader("Cache-Cotrol", "no-cache");
        xhr.send(data);
        console.log(this.state.dataFound)
        console.log(this.state.dishDetail)
        ReactDOM.render(<Recipe  dish = {this.state.dish} dishDetail={this.state.dishDetail} dataFound={this.state.dataFound} />, document.getElementById('root')); // Render to the Recipe page after clicking the ingredient button

        

           /*fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+this.state.dish)
            .then(res => res.json())
            .then((data) => {  
                this.setState({
                    dishDetail : data.meals[0],
                    dataFound : 1
                }) 
                
            })
            .catch((e) => console.log(e))
            .then(console.log(this.state.dataFound))
            .then(ReactDOM.render(<Recipe  dish = {this.state.dish} dishDetail={this.state.dishDetail} dataFound={this.state.dataFound} />, document.getElementById('root')))
            */
    }
    render(){
        return(
            <div>
                <div className='search'>
                    <input type="text" className="searchBar" dish={this.state.dish} onChange={this.dishHandler}  placeholder="Enter the Name of the Dish" />
                    <button onClick={this.recipeHandler}>Get Ingredients</button>
                </div>
            </div>
        )
    }
}
export default Search;