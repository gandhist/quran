import React, {Component} from 'react'
import { connect } from "react-redux";
import { ambilDataPost } from "../action";
import parse from 'html-react-parser';
import {Link} from 'react-router-dom'

class ListSurah extends Component{

    componentDidMount(){
        this.props.ambilDataPost()
    }
    
    renderList() {
        // console.log(this.props)
        const listsurah = this.props.daftarSurah.data
        if(!listsurah){
            return (
                <div className="alert alert-danger" role="alert">
                    Please wait, Loading.....
                </div>
                )
        }
        return listsurah.map(surah=>{
            return (
                <div key={surah.nomor}>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{surah.nomor} . {surah.nama}  {surah.asma}   </h5>
                        <h6 className="card-subtitle mb-2 text-muted">{surah.arti} <small> ({surah.ayat} Ayat) </small></h6>
                        <p className="card-text">{parse(surah.keterangan)}</p>
                        <a href={surah.audio} className="card-link">Download Murrotal</a>
                        <Link to={`/surah/${surah.nomor}`} className="card-link">Baca Surah</Link>
                    </div>
                </div>
                <br/>
                </div>
            )
        })
    }

    render()
    {
        // console.log(listsurah)
        return (
        <div className="container">
            {this.renderList()}
            <span>
                    Made with <i className="fa fa-heart pulse"></i> By <a href="https://www.niowcode.id" >Gandhi</a>
            </span>
        </div>
        )
    }
}

const stateToProps=(state)=>{
    // console.log(state)
    return {
        daftarSurah : state.daftarSurah
    }
}


export default connect(stateToProps, {ambilDataPost})(ListSurah)