pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/camildw/teste-ebac-ui.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar Testes') {
            steps {
                bat '''NO_COLOR = 1
                bat 'start /b npm start'
                npm test'''
            }
        }
    }
}
