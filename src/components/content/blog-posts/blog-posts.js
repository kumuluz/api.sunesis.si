import React from 'react'
import "./blog-posts.scss"
import {useTranslation} from "gatsby-plugin-react-i18next" //Link


const BlogPostsComponent = () => {
    
    const {t} = useTranslation();

    return (
    <div className="container">
        <div>
            <p>{t('blog.blog-title')}</p>
        </div>
        <div className="row">
            <div className="col-md-4">
                <p>{t('blog.post1-title')}</p>
            </div>
            <div className="col-md-4">
                <p>{t('blog.post1-title')}</p>
            </div>
            <div className="col-md-4">
                <p>{t('blog.post1-title')}</p>
            </div>
        </div>
    </div>
    )
}

export default BlogPostsComponent;