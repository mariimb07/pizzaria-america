import React, {useState, useEffect} from "react"
import api from "../../services/api"

import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"


const ListarProduto = () => {

   
// Explicação useStates
// const [nome da variável, nome da função para alterar o valor da variável] = useState(valor inicial da variável)
// Obs: o nome da função SEMPRE começa com a palavra "set"
// Exemplo: Quero declarar uma variável número cujo valor inicial em 0
// const[numero, setNumero] = useState(0)

// Explicação useEffect : Um hook utilizado para executar códigos que ficam fora do controle direto da renderizaçao da página
//                        chamados de "efeitos colaterais"
// Exemplo: buscar dados de uma API, configurar cronômetros, fazer algo quando o usuário aperta uma tecla
// Obs: [] manter vazio, quando você quiser que o seu código rode exatamente uma única vez, logo após o componente aparecer na tela
//      pela primeira vez, resumindo "Execute isso quando a página carregar e depois ignore", não importa o que mude na tela!


  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
    api
      .get("/produtos")
      .then((response)=>{
        // deu certo :)
      console.log(response.data.data)
      setProdutos(response.data.data)
      })
      .catch((error)=>{
        // deu ruim :(
      console.error(`Erro ao buscar a lista de produtos. ", ${error}`)
      })

  }, [])




  //Lista temporária de produtos

 /*   
  const arrayProdutos = [
        {
            id: 1,
            nome: "Pizza de Calabresa",
            precoVenda: 59.90,
            descricao: "Piza de calabresa com bastante cebola"
        },
         {
            id: 2,
            nome: "Pizza de Mussarela",
            precoVenda: 69.90,
            descricao: "Pizza de mussarela com tomates frescos"
        },
         {
            id: 3,
            nome: "Pizza de Frango",
            precoVenda: 63.80,
            descricao: "Pizza de frango com catupiry"
        }

    ]
*/
   
   
   
   
    return (
         <div className="container">
            <MenuFuncionario/>
        
        <div className="table-responsive"> 
        <table className="table table-bordered table-striped table-hover"> 
          <thead className="table-sucess"> 
            <tr> 
              <th>Nome</th> 
              <th>Preço</th> 
              <th>Descrição</th> 
              <th>Ações</th> {/* Nova coluna de Ações */} 
            </tr> 
          </thead> 
          <tbody>

            {produtos.map((produto)=> (

                 <tr> 
                <td style={{ fontSize: "13px" }}> {produto.nome}</td> 
                <td style={{ fontSize: "13px" }}> 
                        {
                            new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(produto.precoVenda)
                        }
                </td> 
                <td style={{ fontSize: "13px" }}></td> 
                <td className="text-center fs-6" style={{ width: "100px" }}> 
                  {/* Botão de Editar */} 
                  <button 
                    className="btn btn-sm btn-primary me-2"> 
                    <i className="fas fa-pencil-alt"></i>{" "} 
                    {/* Ícone de editar */} 
                  </button> 
 
                  {/* Botão de Excluir */} 
                  <button 
                    className="btn btn-sm btn-danger"> 
                    <i className="fas fa-trash-alt"></i>{" "} 
                    {/* Ícone de excluir */} 
                  </button> 
                </td> 
              </tr> 

            ))}

            
             
          </tbody> 
        </table> 
      </div> 
            
        </div>
    )
}

export default ListarProduto