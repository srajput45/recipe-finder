import React, {Component} from  'react';
import './home.css';
import Header from '../../common/header/Header'
import Search from '../../common/search/Search'

class Home extends Component{
    render(){
        return(
            <div className='home'>
                <Header />
                <Search />
                <div className='text'>
                    Type a Dish Name to Search for it's Ingridient
                </div>
            </div>
        )
    }
}
export default Home;