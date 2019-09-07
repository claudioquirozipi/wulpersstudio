import React from 'react';


//Components
import BlogCQ from '../../components/blog/blogCQ';
import NavCQ from '../../components/nav';
import img from './img/img1.jpg';

function Blog3() {
    return(
        <>
        <NavCQ imgAlt="wulpers" imgUrl="/" 
            bgNav="#75BAF3"
                links={[
                    {text: "Blog", url:"/blog"}
                ]}
            />
        <BlogCQ titleH1="Entrada 3">
            <img src={img} alt=""/>
            <h2>hola</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, qui illum. Pariatur quod corporis ab earum quaerat maiores nostrum tempore ut libero, cupiditate reiciendis quam quis? Laboriosam soluta quasi itaque maxime? Architecto adipisci odit, debitis sequi tempore aspernatur aut esse porro quidem! Ab sint hic, perspiciatis ratione quasi maxime mollitia totam inventore, ea fugit laudantium, nisi asperiores. Corporis saepe, eum distinctio dolore unde tenetur esse. Enim officia porro, alias, laborum suscipit at dolore obcaecati, error rerum ea consequuntur voluptas saepe! Ad neque eveniet molestias sunt. Tempora sit distinctio perspiciatis blanditiis autem esse in harum doloribus omnis, aliquid tempore. Ratione obcaecati assumenda consectetur corrupti nemo itaque odio illum commodi odit quasi architecto, suscipit ipsum accusamus recusandae incidunt, voluptatum placeat vitae vero cum repellendus excepturi molestiae. Cumque facere facilis aliquam fugit asperiores totam eveniet dolor eius, iste officiis enim distinctio nobis dolore alias. Adipisci beatae unde maxime impedit harum dolores pariatur, nam, ex non obcaecati, ea repudiandae quisquam voluptate esse suscipit aut nisi dicta quas at nemo atque mollitia nesciunt. Sint quaerat repudiandae velit. Maiores explicabo asperiores deleniti aut veritatis perferendis, saepe voluptas, sapiente officia cupiditate nulla adipisci aliquam quisquam tempora nisi? Eveniet molestiae aperiam itaque placeat, quos facere accusantium voluptatibus debitis?</p>
        </BlogCQ>

        </>
    )
}

export default Blog3;