import React, {Component} from  'react';
import './Recipe.css';
import Header from '../../common/header/Header'
import Search from '../../common/search/Search'
import Typography from '@material-ui/core/Typography'
class Recipe extends Component{
    constructor(){
        super();
        this.state = {
            dishDetail: [{}]
        }
    }
    componentWillMount(){
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function(){
            if(this.readyState === 4){
                console.log(JSON.parse(this.responseText));
                that.setState({dishDetail : JSON.parse(this.responseText).meals[0]});
                console.log(that.state.dishDetail)
            }
        })

        xhr.open("GET","https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/search.php?s="+this.props.dish);
        xhr.setRequestHeader("Cache-Cotrol", "no-cache");
        xhr.send(data);
    }
    nameClickHandler = (url) => {
        window.location = url;
    }
    render(){
        return(
                <div className='recipe'>
                    <Header />
                    <Search searchDish = "true" />
                    <div className="details">
                        <div className='headding'>
                            <span className='mealName' onClick={() => this.nameClickHandler(this.state.dishDetail.strSource)}>{this.state.dishDetail.strMeal}</span> 
                            <button>Like</button>
                        </div>
                        <div className='container'>
                            <div className="left">
                                <img src={this.state.dishDetail.strMealThumb}  className='dishImage'/>
                            </div>
                            <div className="right">
                                <Typography>
                                    <span className='bold' >Category of the meal - </span>{this.state.dishDetail.strCategory} 
                                </Typography>
                                <Typography>
                                    <span className='bold' >Area of the meal - </span>{this.state.dishDetail.strArea} 
                                </Typography><br></br>
                                <Typography>
                                    <span className='bold' >ingredients</span>
                                </Typography>
                                <div className='ingredients'>
                                    {this.props.dish}
                                </div><br />
                                <div className='recipeInstructions'>
                                    <Typography>
                                        <span className='bold' >Recipes</span>
                                    </Typography>
                                    <p className='instructions'>
                                        {this.state.dishDetail.strInstructions}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Recipe;