import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <br/><br/><br/>
                    <h1 className="display-4"><b>DSVendas</b></h1>
                    <p className="p"><b>Analise o desempenho das suas vendas por diferentes perspectivas</b></p>
                    <hr />
                    <p className="p"><b>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</b></p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar o dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
