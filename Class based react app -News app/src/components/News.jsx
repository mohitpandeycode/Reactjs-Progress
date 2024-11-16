import React, { Component } from 'react'
import NewsComponent from './NewsComponent'

export default class News extends Component {
    render() {
        return (
            <div className='my-4'>
                <h1 className='mx-5'>News Here - Today Highlights</h1>
                <div className='container my-4'>
                    <div className="row">
                        <div className="col-md-4">
                            <NewsComponent title={"My Title"} description={"My Desc"} imgurl={"https://media.zenfs.com/en/reuters-finance.com/8f6d50af3356bf6c9bfec7278d44dcea"} />
                        </div>
                        <div className="col-md-4">
                            <NewsComponent title={"My Title"} description={"My Desc"} />
                        </div>
                        <div className="col-md-4">
                            <NewsComponent title={"My Title"} description={"My Desc"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
