const form = document.querySelector('#forms-ts')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)


function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    //const today = '13/01'
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert('Dia já incluso')
        return
    }

    alert('Adicionado com Sucesso')
    nlwSetup.addDay(today)
}

function save(){
   localStorage.setItem('NLWSite@habits', JSON.stringify(nlwSetup.data)) // passando para String


}

const data = JSON.parse(localStorage.getItem('NLWSite@habits')) || {} // transformando em objeto novamente
nlwSetup.setData(data)
nlwSetup.load()


/*
const data = {
    run: ['01-01', '01-02', '01-06', '01-07', '01-08', '01-09', '01-10','01-11','01-12','01-13','01-14',],
}*/


