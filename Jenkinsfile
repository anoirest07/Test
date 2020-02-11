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
          script{
              def props = readJSON text: '{ "key": "value" }'
              def jsonString = writeJSON text: '{"Name : ${Name}","apis: ${apis}","version: ${version}","status: ${status}"}'
              def jsonObj = writeJSON text: jsonString.toString() 
          }
            }
      }     
  }
}
