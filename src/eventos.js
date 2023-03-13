var produtos = document.querySelectorAll('.itens')
var listaP = Array.from(produtos)
var info = document.querySelectorAll('.info')
var listI = Array.from(info)
var botao = document.querySelectorAll('.compra')
var listB = Array.from(botao)
var carrinho = document.querySelector('.carrinho')

var tot = 0

for (var x = 0; x < listaP.length; x++){
    listaP[x].addEventListener('mouseenter' && 'mousemove', function (e){
        var i = listaP.indexOf(this)
        listI[i].style.display='flex'
    })
}

for(let elem in listI){
    listI[elem].addEventListener('mouseout', ocutar =>{
        listI[elem].style.display='none'
        botao[elem].style.backgroundColor = '#db53cc'
    })
}

for(let elemB in listB){
    listB[elemB].addEventListener('click', compra => {
        botao[elemB].style.backgroundColor = '#ac419f'
        var qt = document.getElementById('qt_C')
        tot++
        qt.innerText=tot
        console.log(qt)
    })
}

carrinho.addEventListener('click', listaItens => {
    alert('Aqui está os itens comprado...')
})


