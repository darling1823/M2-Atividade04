function message(){
    console.log('Hello World!')
}
message();

function name(nome){
    console.log(`Olá, meu nome é ${nome}`)
}
name('Gabriel');

function profile(nome, idade, estiloMusical){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e gosto de ouvir ${estiloMusical}.`)
}
profile('Gabriel', '18', 'indie')

function taste(filme, música){
    console.log(`Eu gosto do filme ${filme} e adoro a música ${música}!`)
}
taste('Parasita', 'Hungry Heart')

function triple(x){
    return x*3
}
console.log(triple(6))