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
              def jsonString = readJSON text: '{"Name" : "${Name}","apis": "${apis}","version": "${version}","status": "${status}"}'
              //def jsonObj = readJSON text: jsonString.toString()
              def json = new groovy.json.JsonBuilder()
              json "element1": jsonString
              def file = new File("$WORKSPACE/fichier1.json")
              file.write(groovy.json.JsonOutput.prettyPrint(json.toString()))
          }
            }
      }     
  }
}
