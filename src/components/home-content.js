import React, { Component } from 'react';


class HomeContent extends Component {
    render() {
        return (
            <div className="home-content">
                <div id="upper-text"><h1>Recent Posts</h1></div>
                <div className="home-content__recent-article">
                    <div className="home-content__recent-article__img">
                        <img src="../photos/article1.jpg"></img>
                        <div className="home-content__recent-article__category">
                            <p id="p">Fun</p>
                        </div>
                    </div>
                    <div className="home-content__recent-article__text">
                        <div className="home-content__recent-article__text__title"><p>Some Title</p></div>
                        <div className="home-content__recent-article__text__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="home-content__recent-article__text__btn">
                            <a href="/newpost">Read more</a>
                        </div>
                       

                    </div>
                        
                </div>

                <div className="home-content__recent-article">
                    <div className="home-content__recent-article__img">
                        <img src="../photos/article2.jpg"></img>
                        <div className="home-content__recent-article__category">
                            <p id="p">Beauty</p>
                        </div>
                    </div>
                    
                    <div className="home-content__recent-article__text">
                        <div className="home-content__recent-article__text__title"><p>Some Title</p></div>
                        <div className="home-content__recent-article__text__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="home-content__recent-article__text__btn">
                            <a href="/newpost">Read more</a>
                        </div>
                    </div>

                </div>

                <div className="home-content__recent-article">
                    <div className="home-content__recent-article__img">
                        <img src="../photos/article3.jpg"></img>
                        <div className="home-content__recent-article__category">
                            <p id="p">Friendship</p>
                        </div>
                    </div>
                    
                    <div className="home-content__recent-article__text">
                        <div className="home-content__recent-article__text__title"><p>Some Title</p></div>
                        <div className="home-content__recent-article__text__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="home-content__recent-article__text__btn">
                            <a href="/newpost">Read more</a>
                        </div>
                    </div>
                </div>

                <div className="home-content__recent-article">
                    <div className="home-content__recent-article__img">
                        <img src="../photos/article5.jpg"></img>
                        <div className="home-content__recent-article__category">
                            <p id="p">Pets</p>
                        </div>
                    </div>
                    
                    <div className="home-content__recent-article__text">
                        <div className="home-content__recent-article__text__title"><p>Some Title</p></div>
                        <div className="home-content__recent-article__text__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="home-content__recent-article__text__btn">
                            <a href="/newpost">Read more</a>
                        </div>
                    </div>
                </div>

                <div className="home-content__about">
                    <div className="home-content__about__img" >
                        <img src="../photos/about-img4.jpg"></img>
                    </div>
                   
                    <div className="home-content__about__text">
                        <div className="home-content__about__text__title"><p>My Story</p></div>
                        <div className="home-content__about__text__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="home-content__about__text__btn">
                            <a href="/about"> About me</a>
                         </div>

                    </div>
                </div>

            </div>







        );

    }

}

export default HomeContent;