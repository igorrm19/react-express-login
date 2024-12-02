# Imagem para node

from node:18

# Diretorio de trabalho

workdir /usr/src/app/back-end

# Copiar arquivos do projeto

copy package*.json ./

# Instalar dependencias

run npm install

# Copiar restante do projeto

copy . .

# Porta que a aplicação usa

expose 3000

#comando para iniciar aplicação

cmd ["npm", "start"]
