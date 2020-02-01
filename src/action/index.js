import API from '../axios/api'

export const ambilDataPost=  ()=>{

    return async function (dispatch){
        const data = await API.get('data.json')

        dispatch({          
                type : 'AMBIL_SURAH',
                data : data
        })
        
    }
    
}

export const ambilDataSurah= (idsurah)=>{
    return async function(dispatch){
        const response = await API.get(`surat/${idsurah}.json`)
        dispatch({
            type : 'BACA_SURAH',
            data : response.data
        })
    }
}

// async await akan menunggu process pengambilan data sampai selesai
// jika process sudah selesai maka data yang di terima adalah data json plain object
// jika dalam prosess pengambilan maka data akan berisi function