function Pessoa ({nome, idade, profissao, foto}){
    return(
        <div>
            <img src="https://via.placeholder.com/150" alt=" Foto do Usuário"/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa