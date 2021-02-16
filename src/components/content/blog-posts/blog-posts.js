import React from 'react'
import "./blog-posts.scss"
import {useTranslation} from "gatsby-plugin-react-i18next" //Link


const BlogPostsComponent = () => {
    
    const {t} = useTranslation();

    return (
    <div className="container padded">
        <div>
            <p className="blog-title">{t('blog.blog-title')}</p>
        </div>
        <div className="row">
            <div className="col-md-4">
                <p className="post-title">{t('blog.post1-title')}</p>
                <hr/>
                <p className="post-text">{t('blog.post1-text')}</p>
                <p className="show-more">{t('blog.show-more')}
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3203 0.947266L17.3203 7.20823M17.3203 7.20823L12.3203 12.9473M17.3203 7.20823H0.320312" stroke="#EC6B6B" stroke-width="2"/>
                    </svg>
                </p>
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