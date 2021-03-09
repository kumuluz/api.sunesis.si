import React from 'react'
import "./blog-posts.scss"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { BLOG_URL } from "../../../../static/links.js"

const BlogPostsComponent = () => {

    const { t } = useTranslation();

    return (
        <div className="content-container padded blog-background">
            <div className="padding-div" />
            <div>
                <p className="font-content-title-bold">{t('blog.blog-title')}</p>
            </div>
            <div className="padding-div" />
            <div className="row">
                <div className="col-md-4 blog-column">
                    <p className="font-subtitle-blue">{t('blog.post1-title')}</p>
                    <hr />
                    <p className="font-content-text blog-column-text">{t('blog.post1-text')}</p>
                    <p className="font-content-text show-more">
                        <a href={BLOG_URL} target="_blank" rel="noreferrer noopener">
                            {t('blog.show-more')}
                            &nbsp;
                            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3203 0.947266L17.3203 7.20823M17.3203 7.20823L12.3203 12.9473M17.3203 7.20823H0.320312" stroke="#EC6B6B" strokeWidth="2" />
                            </svg>
                        </a>
                    </p>
                </div>
                <div className="col-md-4 blog-column">
                    <p className="font-subtitle-blue">{t('blog.post1-title')}</p>
                    <hr />
                    <p className="font-content-text blog-column-text">{t('blog.post1-text')}</p>
                    <p className="font-content-text show-more">
                        <a href={BLOG_URL} target="_blank" rel="noreferrer noopener">
                            {t('blog.show-more')}
                            &nbsp;
                            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3203 0.947266L17.3203 7.20823M17.3203 7.20823L12.3203 12.9473M17.3203 7.20823H0.320312" stroke="#EC6B6B" strokeWidth="2" />
                            </svg>
                        </a>
                    </p>
                </div>
                <div className="col-md-4 blog-column">
                    <p className="font-subtitle-blue blog-column-text">{t('blog.post1-title')}</p>
                    <hr />
                    <p className="font-content-text">{t('blog.post1-text')}</p>
                    <p className="font-content-text show-more">
                        <a href={BLOG_URL} target="_blank" rel="noreferrer noopener">
                            {t('blog.show-more')}
                            &nbsp;
                            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3203 0.947266L17.3203 7.20823M17.3203 7.20823L12.3203 12.9473M17.3203 7.20823H0.320312" stroke="#EC6B6B" strokeWidth="2" />
                            </svg>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogPostsComponent;
