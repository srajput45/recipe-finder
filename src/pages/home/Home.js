import React, {Component} from  'react';
import './Home.css';
import Header from '../../common/header/Header'
import Search from '../../common/search/Search'

class Home extends Component{
    render(){
        return(
            <div className='home'>
                <Header /> {/* This will display the heading */}
                <Search /> {/* This will display the Search bar */}
                <div className='text'> {/* Text before making the API call */}
                    Type a Dish Name to Search for it's Ingridient 
                </div>
            </div>
        )
    }
}
export default Home;