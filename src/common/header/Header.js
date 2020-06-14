import React, {Component} from  'react';
import '../header/Header.css';
{
    // Header class component which return heading "Recipe Finder" 
}
class Header extends Component{
    render(){
        return(
            <div >
                <header className="header">
                    Recipe Finder
                </header>
            </div>
        )
    }
}
export default Header;