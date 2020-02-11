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
              echo "apis: ${apis}"
              echo "version: ${version}"
              echo "status: ${status}"
          script{
              def props = readJSON text: '{"name":"Test20"}'
              def jsonObj = readJSON text: jsonString
          }
            }
      }     
  }
}
