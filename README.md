Desafio Sankhya Developer

Criei um Sistema de Anúncio de Camisetas de Time.

BackEnd foi feito em Java e Spring<br>
FrontEnd em React com TypeScript<br>
DataBase PostgreSQL<br>
Integração com Servidor de Aplicação WildFly 33

Inicialmente criei o Banco de Dados com 2 Tabelas, sendo elas Camisa e Categoria.

No Java inicialmente eu criei as classes Camisa e Categoria, nelas determinei a entidade JPA (@Entity) e a Tabela no Banco de dados.
Usei a biblioteca Lombok para criar os Getters (@Getter) automaticamente, também para gerar os Construtores com e sem args (@NoArgsConstructor e @AllArgsContructor) e também usei o @EqualsAndHashCode para gerar esses metódos referetes o campo ID.
@Id e @GeneratedValude(strategy = GenerationType.IDENTITY) usei para indicar que o campo ID é a PK da Entity e que seria um IDENTITY no DataBase.
Usei o Contructor com o "CamisaRequestDTO" para criar uma instancia de "Camisa" e partir do RequestDTO que contém os dados enviados pelo usuario no FrontEnd.

Criei as classe Controllers para gerencias as requisições HTTP da tabela Camisa e Categoria.
-Inicialmente informo o @RestController para mostrar ao Spring que essa classe é um controller RESTful, então irá lidar com requisições HTTP e retornar dados em JSON
-Defini os EndPoints com o @RequestMapping, determinei eles como "camisa" e "categoria"
-No Controller do EndPoint Camisa eu determinei as requisições POST e GET. E na Categoria somente o EndPoint GET pois não teria nenhum envio de requisições através dessa classe.
-Usei o @CrossOrigin para permitir requisições de qualquer domínio para esses endpoints.
-Criei a Classe CamisaRequestDTO para melhorar a comunicação da API na Transferencia de Dados e assim o @RequestBody indica que o parametro "data" recebe a requisição HTTP e Spring transforma em JSON e o DTO recebe o JSON. Na lógica a partir da requisição que a clase CamisaRequestDTO recebe, é criado o objeto "Camisa", e é usado a classe "CamisaRepository" para salvar o objeto "Camisa" no DataBase
-Configurei também o @GetMapping para obter as informações do banco de dados, usei o "camisaRepository.findAll()" para retornar todas informações no banco de dados. E também configurei para converter o objeto "Camisa" para o "CamisaResponseDTO" usando o Java Streams API para que leve a FrontEnd somente os dados necessários a retornar, evitando vazar informações.

A Classe "CamisaResponseDTO foi criada apenas para armazenar os dados para melhor o desempenho na transferencia via API. Por isso foi usado o RECORD.
Como expliquei acima o Constructor "CamisaResponseDTO" vindo da Entity "Camisa" é usando no método getAll() do Controller para converter a entidade Camisa para Data Transfer Objects(DTO) de Respontas.

A Classe Record "CamiseRequestDTO" foi criada somente para Criar e Atualizar dados da tabela "Camisa", sem expor dados desnecessários do DataBase.
