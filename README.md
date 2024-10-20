# atividade-poo-ifpi-2024.2
Atividade extra de POO

Aluno: Márcio Fabrício Leitão Oliveira de Sousa

Turma: POO – 2024.2

1. Explique com suas palavras a diferença entre uma classe e um objeto e como esses dois conceitos se relacionam. Além disso, apresente um exemplo do mundo real para cada um (por exemplo, usando a classe Carro e instâncias como Fusca e Civic).

R = A classe é uma espécie de generalização do objeto, ela é uma estrutura que vai servir de base, de molde para os objetos seguirem. Já o objeto é a representação de algo do mundo real, que pode ser físico ou conceitual. A classe é o todo e os objetos suas variações e especificações, dessa forma eles estabelecem suas relações.

Exemplo:

* Classe – Planta.

* Instâncias – Brófita, Pteridófita, Gimnosperma, Angiosperma.



2. De forma breve, conceitue atributos e métodos. Pesquise e exemplifique um objeto ou classe que possuam atributos e métodos.

R= Atributo é o elemento de uma classe, responsável por definir sua estrutura de dados. O conjunto destes será responsável por representar suas características e farão parte dos objetos criados a partir da classe.
Método é uma porção de código (sub-rotina) que é disponibilizada pela classe. Este é executado quando é feita uma requisição a ele. Um método serve para identificar quais serviços, ações, que a classe oferece. Eles são responsáveis por definir e realizar um determinado comportamento.  

* Exemplo: Personagem de jogo

    * Atributos: Tipo de personagem, pontos de vida, dano, habilidades, nível.

    * Métodos: atacar(), defender(), curar(), andar(), correr(), parar().



3. A abstração visa focar no que é importante para um sistema. Você concorda que um atributo de uma pessoa pode ser importante ou não dependendo do contexto do sistema? Enumere na tabela abaixo contextos/sistemas distintos em que os atributos abaixo seriam relevantes:

Atributo |	Sistema em que não é importante |	Sistema em que é moderadamente importante	| Sistema em que é essencial
-------- | -------------------------------- | ----------------------------------------- | --------------------------
CPF | Redes sociais | Site de compras |	Sistema do CADúnico |
Histórico de saúde | Sistema de pagamento online |	Sistema de seguros |	Sistema de hospital
Quantidade de seguidores |	Sistena de plano de saúde |	Sistema de pontuação por seguidores | Redes sociais
Habilidade destra |	Serviço de streaming |	Sistema de escola de música |	Local que fabrica equipamentos de EPI
Endereço |	Sistema de jogos online |	Sistema de lojas |	Sistemas que fazem entregas
Saldo em conta |	Aplicativo de relacionamento |	Sistema de plataforma de pagamentos |	Sistema de banco


4. Considerando os objetos Pessoa e Conta:

a. Seria interessante em um sistema bancário um objeto "conta" possuir uma "pessoa" como um atributo interno representando o titular da conta? 

R= Sim, pois facilita o acesso as informações do titular, além de uma conta estar associada a um titular.

b. Olhando no sentido inverso, seria interessante uma pessoa possuir mais de uma conta como atributo? Que elemento da programação estruturada melhor representaria o conjunto de contas de uma pessoa? 

R= Sim, seria interessante pois uma pessoa pode ter mais de uma conta. A lista é o elemento que melhor representaria um conjunto de contas é a lista.


5. Identifique pelo menos 5 objetos de um sistema de controle acadêmico. Ex: aluno. Professor, disciplina, turma, coordenador, sala.

R= Além dos mencionadas no enunciado, lista-se: nota, avaliação, horário, calendário acadêmico, matrícula, histórico escolar, dentre outros.


6. Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais características (atributos) e comportamentos (métodos) que eles poderiam ter.

R= Jogo de badminton.

Atributos
 
* Tipo de partida

* Placar

* Árbitro

* Jogador 01

* Jogador 02

* Nível do jogador 01

* Nível do jogador 02

* Sets

* Local

* Tipo de raquete

* Tipo de peteca

* Quadra

Métodos
 
* Tipo de partida
  
* Iniciar partida

* Pausar partida

* Finalizar partida

* Calcular placar

* Anunciar vencedor

* Anunciar perdedor

* Sacar 

* Atacar

* Defender


7. Considerando o exemplo da classe Retângulo dos slides, implemente um método adicional chamado que calcule o perímetro do retângulo. Teste os métodos do retângulo.

R= https://github.com/marciofleitao030609/atividade-poo-ifpi-2024.2/blob/main/q7_perimetro_retangulo.ts

8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor ao raio e exiba a área e o perímetro chamando os dois métodos definidos.

R= https://github.com/marciofleitao030609/atividade-poo-ifpi-2024.2/blob/main/q8_circulo.ts


9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e valorDebitos. Crie um método chamado calcularSaldo() que retorna/calcula a diferença entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois atributos e exiba o resultado do método calcularSaldo().

R= https://github.com/marciofleitao030609/atividade-poo-ifpi-2024.2/blob/main/q9_financeira.ts


10. Represente as classes das questões 8 e 9 no formato UML. Pesquise uma ferramenta como draw.io ou PlantUML

R= 

UML da questão 08

![diagrama_circulo](https://github.com/user-attachments/assets/9392b8f9-bfc3-480f-b3a7-474f5560eba6)


UML da questão 09

![diagrama_financeiro](https://github.com/user-attachments/assets/c32bdc64-c311-4a36-954a-dec3b329ff1c)
