import groovy.json.JsonOutput
pipeline {
  agent any
  stages {
      stage('Restore') {
            steps {
                sh 'npm install'
            }
        }
      stage('Build') {
            steps {
                sh 'npm run-script build'
                echo "Name : ${Name}"
            }
      }      
  }
}
