import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route
}
    from "react-router-dom"

//Obs: Para importar componentes específicos de uma tecnologia, escolha o componente específico, caso mais de 1
//      utilize a vírgula para seoará-los

import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProduto/ListarProduto"
import ListarCategoria from "../pages/ListarCategoria/ListarCategoria"
import NovoProduto from "../pages/NovoProduto/NovoProduto"

// BrowserRouter : Navegação utilizando a tag html <a></a> com href "Sempre recarrega a página"
// HashRouter: Navegaçãp utilizando o componente <Link></Link> do react-router-dom "Recarrega só o necessário"


const AppRoutes = () => {


    return (
        <HashRouter>
            <Routes>
             <Route
                    path="/"
                    element={<HomeFuncionario />}
                />

                <Route
                    path="/home"
                    element={<HomeFuncionario />}
                />

                <Route
                    path="/produtos"
                    element={<ListarProduto />}
                />

                <Route
                    path="/categorias"
                    element={<ListarCategoria />}
                />

                <Route
                    path="/produtos/novo"
                    element={<NovoProduto />}
                />


            </Routes>
        </HashRouter>
    )
}

export default AppRoutes