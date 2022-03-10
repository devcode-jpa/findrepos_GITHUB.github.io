import React, { useState, useContext } from "react";

import client from "../../services/client";
import { context } from "../../context";
import {
  HeaderSection,
  HeaderTitle,
  HeaderInputContainer,
  HeaderInput,
  HeaderSearchButton,
} from "./styles";

const Header = () => {
  const ctext = useContext(context);
  const [searchedValue, setSearchedValue] = useState("");
  const count = 50;

  async function getUserData() {
    try {
      const response = await client.get(`/${searchedValue}`);
      const repos = await client.get(
        `/${searchedValue}/repos?per_page=${count}`
      );
      ctext.setUserData(response.data);
      ctext.setRepos(repos.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>Pesquisa Repositórios - GITHUB (Organizações)</HeaderTitle>

      <div>
        <div class="text-center">
        <button
          type="button"
          class="btn btn-success"
          data-toggle="modal"
          data-target="#ModalLongoExemplo"
        >
          Sobre o Desenvolvedor
        </button>
        </div>
        <div
          class="modal fade"
          id="ModalLongoExemplo"
          tabindex="-1"
          role="dialog"
          aria-labelledby="TituloModalLongoExemplo"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="TituloModalLongoExemplo">
                  Sobre o Desenvolvedor
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Fechar"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <strong>
                Nome: Jezimiel Marcondes de Lima Cavalcanti
                <br />
                Idade: 54 anos
                <br />
                Estado Civil: Casado
                <br />
                e-mail: jpamarcondes.edu@gmail.com
                <br />
                Cidade/Estado: Petrolina/PE
                <br />
                <br />
                </strong>
                Conhecimentos na área de Informática:
                <br />
                <br />
                # Bacharelando do curso de Sitemas de Informação;
                <br />
                # Aluno FullStack da Escola de Tecnologia Blue EdTech;
                <br />
                # Aluno cursos tecnologia da Escola Online Treinaweb;
                <br />
                <br />
                  O objetivo de pleitear essa oportunidade, faz parte do início
                  de um processo de transição de carreira. Somando a esse passo,
                  destacam-se os investimentos no conhecimentos em tecnologia,
                  mais especificamente, na área de Desenvolvimento de Softwares.
                  <br />
                  <br />
                  Vale evidenciar que a frase abaixo, retirada da HISTÓRIA DA
                  LETT, potencializou o desejo de estar num ambiente e entre pessoas
                  profissionais estimuladas em serem melhor a cada dia.
                  <br />
                  <br />
                  <strong>
                  "Nunca estamos contentes com resultados medianos. Aqui,
                  buscamos sempre a excelência e superação, somos auto-críticos
                  e focamos em usar feedbacks para traçar ações para evoluirmos
                  como profissionais e como pessoas."
                  <br />
                  <br />
                  Lugar certo e hora certa, para um profissional em transição de carreira!
                  </strong>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeaderInputContainer>
        <HeaderInput
          value={searchedValue}
          onChange={(e) => setSearchedValue(e.target.value)}
        />

        <HeaderSearchButton onClick={getUserData}>
          <span>Buscar</span>
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  );
};

export default Header;
