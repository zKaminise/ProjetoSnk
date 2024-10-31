Desafio Sankhya Developer

Criei um Sistema CRUD.

BackEnd foi feito em Java e Spring<br>
FrontEnd em React com TypeScript<br>
DataBase PostgreSQL<br>
Integração com Servidor de Aplicação WildFly 33

No Java inicialmente eu criei as classes Camisa e Categoria, nelas configurei como (@Entity) e a Tabela no Banco de dados.

Na Classe Camisa inicialmente defini o campo ID como PK da tabela, e configurei ele como IDENTITY. Logo após configurei os campos da tabela Camisa no Banco de Dados.
Configurei o @ManyToOne e o @JoinColumn demonstrando que a coluna CATEGORIA_ID se relaciona com a Tabela Camisa determinando o campo como uma FK.
Passei um Constructor sem argumentos e um com argumentos. E também gerei os Getters and setters
Defini o método setCategoria para definir a Categoria da "Camisa" e o getCategoria para pegar essa categoria informada.

Na Classe Categoria, inicialmente defini o campo ID como PK da tabela, e configurei ele como IDENTITY. Logo após configurei os campos da tabela Camisa no Banco de Dados.
E logo após criei o Contructor e gerei os Getters and Setters

Criei as classe Controllers para gerencias as requisições HTTP da tabela Camisa e Categoria.
-Inicialmente informo o @RestController para mostrar ao Spring que essa classe é um controller RESTful, então irá lidar com requisições HTTP e retornar dados em JSON
-Defini os EndPoints com o @RequestMapping, determinei eles como "camisa" e "categoria"
-No Controller do EndPoint Camisa eu determinei as requisições POST e GET. E na Categoria somente o EndPoint GET pois não teria nenhum envio de requisições através dessa classe.
-Usei o @CrossOrigin para permitir requisições do domínio em que meu FrontEnd está hospedado.
-Criei a Classe CamisaRequestDTO para melhorar a comunicação da API na Transferencia de Dados e assim o @RequestBody indica que o parametro "data" recebe a requisição HTTP e Spring transforma em JSON e o DTO recebe o JSON. Na lógica a partir da requisição que a clase CamisaRequestDTO recebe, é criado o objeto "Camisa", e é usado a classe "CamisaRepository" para salvar o objeto "Camisa" no DataBase
-Configurei o IllegalArgumentException para quando o categoria_id no RequestDTO for nulo. 
-Foi configurado também o findById para pegar o ID da Categoria, e caso não encontre rodar a RunTimeException para que não crie uma "Camisa" com uma "Categoria" inexistente.
-Criei o camisaData = new Camisa, configurei o camisaRepository.save(camisaData) para salvar a nova "camisa" no Banco de Dados. Usei o método save fornecido pelo Spring para inserir ou até atualizar uma tabela no Banco de Dados.
-Configurei também os métodos getAll() e findAll() para retornar todos itens do Banco de Dados no formato configurado "CamisaResponseDTO" e o findAll() para retornar todos dados da tabela Camisa no Banco de Dados.
-Usei o Java Streams para converter o retorno de "Camisa" em uma lista de "CamisaResponseDTO", usei o .steam().map(CamisaResponseDTO::new).toList() onde nisso é criado um "fluxo" de acordo com o reotrno de "camisa", e para cada retorno cria um novo "CamisaResponseDTO" e após é pego esse resultado do .map() e criado uma nova lista no List<CamisaResponseDTO>

Criei a Classe CamisaResponseDTO como uma boa Prática para saída de dados via API, uma maneira mais segura e rápida.
-Nessa classe primeiro foi configurado os atributos da tabela "Camisa"
-Após criei o Constructor CamisaResponseDTO, onde cada atributo dessa classe é preenchido correspondente a Classe Entity "Camisa". Para o campo Categoria_ID é verificado se é diferente de NULL, caso sim é atribuido o ID da Categoria ao Categoria_ID. Se não leva o NullPointerException configurado anteriormente.
-Após gerei os Getters and Setters.

"CamiseRequestDTO" é um Record  que foi criada também como uma boa prática para receber dados da API, e assim receber as requisições HTTP  e receber no BackEnd. É uma boa pratica usar o Record pois assim você define somente os campos de dados e o Java cria automaticamente o Constructor e métodos de Getters.

As classes Repository são criadas para fornecer métodos CRUD, por isso é usado o extends JpaRepository, pois o JpaRepository já fornece os métodos CRUD usados anteriomente como findAll(), findById(), save() etc. 
É informado os Entity que os Repositorys vão manipular e o Long indicando a PK ID das classes.

Para o FrontEnd usei o React junto com TypeScript

Foi criado um FrontEnd basico, nele utilizei "Hooks" para gerenciamentos do "useState" e "useEffects"<br>
Usei a Biblioteca "Axios" para a comunicação com o BackEnd, através das Requisições HTTP, nesse projeto utilizei somente o "axios.get" e "axios.post" para Buscar as Informações do Banco de Dados e também inseri-las.<br>
Para Estilizar o Projeto de maneira que fique visualmente mais atrativo ao usuario utilizei o React Bootstrap na criação do Modal e dos Cards.
