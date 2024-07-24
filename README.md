# OPEN MDF-e

NodeJS package para MDF-e (NF-e, NFC-e, CT-e, consulta de dados, etc..)

### Requisitos

- NodeJS v18+

### Instalação

```bash
# Instalação via NPM ainda não disponível
$ npm install @acesnofleirbag/open-mdfe
```

### Especificação

A especificação implementada encontra-se na pasta `/specs`

### Exemplos De Uso

Para exemplos de uso veja os casos de testes na pasta `/tests`

> IMPORTANTE: A ordem como as tags são informadas afeta o sistema da SEFAZ. 
> Utilize <https://www.sefaz.rs.gov.br/nfe/nfe-val.aspx> para realizar a validação do schema 

### Para obter o certificado digital (e-CNPJ A1)

[CertSign](https://www.certisign.com.br/)

### Notas Para Uso Do Certificado

Para realizar uso do certificado em ambiente Linux é necessário realizar alguns passos:

> Caso os passos descritos não forem realizados o seguinte erro pode ser encontrado: UNABLE TO GET LOCAL ISSUER CERTIFICATE

```bash
# 1. Faça download da cadeia mais atualizada de autoridades certificadoras:
# Site oficial (NFe Fazenda) > Documentos > Diversos > Cadeia de certificados

# 2. Converta o arquivo PKCS7 para PEM com o seguinte comando:
$ openssl pkcs7 -print_certs -in icp-brasil.p7b -out icp-brasil.crt

# 3. Mova o arquivo icp-brasil.crt para o caminho /usr/local/share/ca-certificates/
$ sudo mv ./icp-brasil.crt /usr/local/share/ca-certificates

# 4. Atualize o repositório local de certficados com o seguinte comando:
$ sudo update-ca-certificates
```

