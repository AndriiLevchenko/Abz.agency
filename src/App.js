import React, { Component } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

import Assignment from './Assignment/Assignment';
import Manmobile from './Manmobile/Manmobile';
import Relationships from './Relationships/Relationships';
import Requirement from './Requirement/Requirement';
import Users from './Users/Users';
import Registration from './Registration/Registration';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';


class App extends Component {  

        //открыто-закрыто мобильное меню навигации
        state={
            isOpenMomileMenu: false, 
            timeValue: 122222
        }

        //изменяет состояние для открывания/закрывания мобильного меню навигации
        appearMobileMenu =()=>{ 
            this.setState({isOpenMobileMenu: !this.state.isOpenMobileMenu});
        }
       


    render() {
        const cls=[]
        // добавляет класс для открывания-закрывания мобильного меню навигации
        if(this.state.isOpenMobileMenu){cls.push('Navigation')}
        if(!this.state.isOpenMobileMenu){cls.push('Navigation close')}
    return (
        <div>
            <div align='center'>
                {/*  меню навигации в Header */}
                <div className='navigation'> 
                    <div className='navbar__brand'>
                        <a href='#anchorassignment'>
                            <img src='logo/logo.svg' alt='logo'/>
                        </a>     
                    </div>
                    <nav className='navbar__header'>
                        <Navigation numberMenu='5'/>
                    </nav>
                    {/* по клику откр/закр мобильное меню навигации  */}
                    <div className='navbar__bars'>
                        <button onClick={this.appearMobileMenu}><img src='icons/line-menu.svg' alt='Navigation'/></button>
                    </div>               
                    <div className='navbar__superstar'>
                        <div className='navbar__superstar-button'>
                            {/* переход на карточку Superstar(первая из всех) компонента Users */}
                            <button onClick={()=> this.refs.child.showSuperstar()}><a href='#anchorsuperstar'><img src='icons/upload.png' alt='uploading' /></a></button>
                        </div>
                        <div className='navbar__superstar-img'>
                             <img src='imgs/superstar.jpg' alt='superstar' />
                        </div>
                        <div className='navbar__superstar-text'>
                            <p>Superstar</p>
                            <p><span>Superstar@gmail.com</span></p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            {/* absolute мобильное меню навигации  */}
           
                <nav className={cls}>
                    <div className='navbar__superstar-img'>
                         <img src='imgs/superstar.jpg' alt='superstar'/>
                    </div>
                    <div className='navbar__superstar-text'>
                        <p >Superstar</p>
                        <p><span>Superstar@gmail.com</span></p>
                    </div>    
                    <Navigation numberMenu='6'/>
                </nav> 
     

            {/* Якоря для перехода на них из меню навигации, компоненты разделов */}
                <ScrollableAnchor id={'anchorassignment'}>
                    <div></div>
                </ScrollableAnchor> 
            <Assignment/> 
                <ScrollableAnchor id={'anchormanmobile'}>
                    <div></div>
                </ScrollableAnchor> 
            <Manmobile/>
                <ScrollableAnchor id={'anchorrelationships'}>
                    <div></div>
                </ScrollableAnchor> 
            <Relationships/>
                <ScrollableAnchor id={'anchorrequirement'}>
                    <div></div>
                </ScrollableAnchor>
            <Requirement/>
                <ScrollableAnchor id={'anchorusers'}>
                    <div></div>
                </ScrollableAnchor>
            <Users ref='child'/>
                <ScrollableAnchor id={'anchorregistration'}>
                    <div></div>
                </ScrollableAnchor>
            <Registration/>    
            <Footer/>
        </div>           
    );
    }
}
export default App;

