const form = document.querySelector('#forms-ts')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-01', '01-02', '01-06', '01-07'],
}

nlwSetup.setData(data)
nlwSetup.load()