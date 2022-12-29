import { BrowserRouter, Routes, Route} from 'react-router-dom'
import FormProdutos from './components/FormProdutos'
import ListaProdutos from './components/ListaProdutos'

export default function App(){
     return(
          <BrowserRouter>
               <Routes>
                    <Route path='/' element={<ListaProdutos/>}/>
                    <Route path='/incluir' element={<FormProdutos/>}/>
                    <Route path='/editar/:id' element={<FormProdutos/>}/>
               </Routes>
          </BrowserRouter>
     )
}