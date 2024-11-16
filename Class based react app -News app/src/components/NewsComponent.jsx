import React, { Component } from 'react'

export default class NewsComponent extends Component {

    render() {
        let {title, description, imgurl} = this.props;
        return (
            <>
                <div className="card" style={{width: "25rem"}}>
                    <img src={imgurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>

            </>
        )
    }
}
