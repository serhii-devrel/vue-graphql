pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('unit test') {
            steps {
                echo 'Testing...'
                sh 'npm run test:unit'
            }
        }

        stage('lint') {
            steps {
                echo 'Linting...'
                sh 'npm run lint'
            }
        }
    }
}
