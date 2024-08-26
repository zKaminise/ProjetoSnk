CREATE TABLE CATEGORIA (
    ID SERIAL PRIMARY KEY,
    NOME VARCHAR(100) NOT NULL
);


CREATE TABLE CAMISA (
    ID SERIAL PRIMARY KEY,
    TITLE VARCHAR(100) NOT NULL,
    IMAGE VARCHAR(255) NOT NULL,
    PRICE INT,
    CATEGORIA_ID INT,
    CONSTRAINT FK_CATEGORIA FOREIGN KEY (CATEGORIA_ID) REFERENCES CATEGORIA(ID)
);

INSERT INTO CATEGORIA(ID,NOME) VALUES (1, 'Times Brasileirão')
INSERT INTO CATEGORIA(ID,NOME) VALUES (2, 'Times da Champions League')
INSERT INTO CATEGORIA(ID,NOME) VALUES (3, 'Times Brasileirão Serie B')
INSERT INTO CATEGORIA(ID,NOME) VALUES (4, 'Times Brasileirão Serie C')

INSERT INTO CAMISA(ID,TITLE,IMAGE,PRICE,CATEGORIA_ID) VALUES (45, 'Camiseta Flamengo', 'https://webshop.vteximg.com.br/arquivos/ids/206818-0-0/M_0103_00100606802.jpg?v=638276345726200000', 5, 1)
INSERT INTO CAMISA(ID,TITLE,IMAGE,PRICE,CATEGORIA_ID) VALUES (45, 'Camiseta Cruzeiro', 'https://static.cruzeiro.com.br/produtos/camisa-cruzeiro-i-2425-sn-torcedor-adidas-masculina/10/FB9-4316-310/FB9-4316-310_zoom1.jpg?ts=1710173015?ims=400x', 1500, 1)
INSERT INTO CAMISA(ID,TITLE,IMAGE,PRICE,CATEGORIA_ID) VALUES (45, 'Camiseta Real Madrid', 'https://a-static.mlcdn.com.br/450x450/camisa-real-madrid-home-22-23-s-n-torcedor-adidas-masculina/netshoes/3zp-7305-014-09/4755bee413ca5472f4a2ac54b8b873de.jpeg', 240, 2)


SELECT * FROM CAMISA
SELECT * FROM CATEGORIA