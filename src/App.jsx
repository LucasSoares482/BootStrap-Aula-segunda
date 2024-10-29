import Menu from '../src/components/Menu';

function App() {
  return (
    // fix os elementos na tela do usuario
    // container
    <div className="justfy-content-center">
      {/* cria colunas e organizar os elementos */}
      <div className="row">
        {/* conteudos com cores de fundo (bg) e texto clareado para contraste */}
        <div className="col-3 bg-primary text-light text-center">
          Teste Bootstrap
        </div>
        <div className="col-3 bg-danger text-light text-center">Texto 1</div>
        <div className="col-3 bg-dark text-light text-center">Texto 2</div>
        <div className="col-3 bg-success text-light text-center">Texto 3</div>
      </div>
      <Menu />
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}
export default App;
