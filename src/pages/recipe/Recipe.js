import React, {Component} from  'react';
import './Recipe.css';
import Header from '../../common/header/Header'
import Search from '../../common/search/Search'
import Typography from '@material-ui/core/Typography'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
class Recipe extends Component{
    constructor(){
        super();
        this.state = {
            dataFound: 0, // It change to 1 when API has any data.
            dishDetail: [{}], // It is use to store the data which we get from the API.
            color : 'black' // It is use to set the colour of the Heart. 
        }
    }
    componentWillMount(){
        //Making the http request.
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function(){
            if(this.readyState === 4){
                if(JSON.parse(this.responseText).meals != null){
                    that.setState({dishDetail : JSON.parse(this.responseText).meals[0], dataFound: 1}); // Setting the response data in dishDetail and set dataFound to 1.
                }
            }
        })
        xhr.open("GET","https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/search.php?s="+this.props.dish);
        xhr.setRequestHeader("Cache-Cotrol", "no-cache");
        xhr.send(data);
    }
    nameClickHandler = (url) => {
        //It will go to the main recipe page.
        window.location = url;
    }
    likeClickHandler = () => {
        //It will change the color of Heart border when we click it.
        if(this.state.color === 'black'){
            this.setState({color : 'red'})
        }else{
            this.setState({color : 'black'})
        }
    }
    render(){
        return(
                <div className='recipe'>
                    <Header />
                    <Search />
                    {
                        this.state.dataFound === 1 ? // If the data found is 1 it will show the dish details.
                            (<div className="details">
                            <div className='headding'>
                                <span className='mealName' onClick={() => this.nameClickHandler(this.state.dishDetail.strSource)}>{this.state.dishDetail.strMeal}</span>
                                <div className='like'>
                                    {/* Like functionality */}
                                    <FavoriteBorderOutlinedIcon
                                            className={this.state.color}
                                            onClick={() => this.likeClickHandler()}
                                    />
                                </div>
                            </div>
                            <div className='container'>
                                <div className="left">{/* to Show thw image */}
                                    <img src={this.state.dishDetail.strMealThumb} alt='Dish thumbnail' className='dishImage'/>
                                </div>
                                <div className="right">{/* to show the other details */}
                                    <Typography>
                                        <span className='bold' >Category of the meal - </span>{this.state.dishDetail.strCategory} 
                                    </Typography>
                                    <Typography>
                                        <span className='bold' >Area of the meal - </span>{this.state.dishDetail.strArea} 
                                    </Typography><br></br>
                                    <Typography>
                                        <span className='bold' >Ingredients</span>
                                    </Typography>
                                    <div className='ingredients'>{/* List of ingredient and their quantity */}
                                        <div className='ingName'>
                                            <ul>
                                                {Object.keys(this.state.dishDetail).map((attr) => {
                                                    return (attr.includes("strIngredient")) && (this.state.dishDetail[attr])
                                                    &&   (this.state.dishDetail[attr] !== "")
                                                    && <li key = {attr}>{this.state.dishDetail[attr]}</li>
                                                })}
                                            </ul>
                                        </div>
                                        <div className='ingQuant'>
                                            <ul>
                                                {Object.keys(this.state.dishDetail).map((attr) => {
                                                    return (attr.includes("strMeasure")) && (this.state.dishDetail[attr])
                                                    &&   (this.state.dishDetail[attr] !== "")
                                                    && <li key = {attr}>{this.state.dishDetail[attr]}</li>
                                                })}
                                            </ul>
                                        </div>
                                    </div><br />
                                    <div className='recipeInstructions'>{/* Recipe of the dish */}
                                        <Typography>
                                            <span className='bold' >Recipes</span>
                                        </Typography>
                                        <p className='instructions'>
                                            {this.state.dishDetail.strInstructions}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>):(<div className='text'>No Data has been received</div>) //This message is shown when the API get fail or has any error.
                    }    
                </div>
        )
    }
}
export default Recipe;