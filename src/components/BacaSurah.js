import React, {Component} from 'react'
import {connect} from 'react-redux'

import {ambilDataSurah} from '../action'
import parse from 'html-react-parser';


class BacaSurah extends Component {

    componentDidMount(){
        const idsurah = this.props.match.params.idsurah
        this.props.ambilDataSurah(idsurah)
    }

    renderSurah(){
        const surah = this.props.ambilSurah
        // console.log(surah)
        if(!surah) {
            return (
                <div className="alert alert-danger" role="alert">
                    Please wait, Loading.....
                </div>
                )
        }

        return surah.map((ayat, index)=>{
            
            return (
                <div key={index}>
                    <h3 align='right'>{ayat.ar}</h3>
                    {/* <p align='right'>{awal}</p> */}
                    <p align='left'>{parse(ayat.tr)}</p>
                    <p align='left'>{ayat.id}</p>
                    <hr />
                </div>
            )
        })
    }


    render()
    {
        return (
            <div className='container'>
                <br />
                    {this.renderSurah()}

                    <span>
                    Made with <i className="fa fa-heart pulse"></i> By <a href="https://www.niowcode.id">Gandhi</a>
                    </span>
            </div>
        )
    }

}

const stateToProps=(state)=>{
    return {
        ambilSurah  : state.ambilSurah
    }
}

export default connect(stateToProps, {ambilDataSurah})(BacaSurah)