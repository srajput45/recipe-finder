import React, {Component} from  'react';
import './Recipe.css';
import Header from '../../common/header/Header'
import Search from '../../common/search/Search'
import meals from '../../common/pasta'
import Typography from '@material-ui/core/Typography'
class Recipe extends Component{
    
    render(){
        return(
                <div className='recipe'>
                    <Header />
                    <Search searchDish = "true" />
                    <div className="details">
                        <div className='headding'>
                            <span className='mealName'>{meals.strMeal}</span> 
                            <button>Like</button>
                        </div>
                        <div className='container'>
                            <div className="left">
                                <img src={meals.strMealThumb}  className='dishImage'/>
                            </div>
                            <div className="right">
                                <Typography>
                                    <span className='bold' >Category of the meal - </span>{meals.strCategory} 
                                </Typography>
                                <Typography>
                                    <span className='bold' >Area of the meal - </span>{meals.strArea} 
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
                                        {meals.strInstructions}
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