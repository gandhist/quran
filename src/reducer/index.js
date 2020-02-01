import { combineReducers } from "redux";

const listSurat=(list=[], action)=>{
    if (action.type === "AMBIL_SURAH") {
        return action.data
    }
    return list
}

const ambilSurah=(surah=null, action)=>{
    if(action.type === 'BACA_SURAH'){
        return action.data
    }
    return surah
}

export default combineReducers({
    daftarSurah : listSurat,
    ambilSurah : ambilSurah
})