import groovy.json.JsonOutput
import groovy.json.JsonBuilder
import groovy.json.*
pipeline {
  agent any
  stages {
      //stage('Restore') {
            //steps {
               // sh 'npm install'
            //}
        //}    
      stage('Build') {              
        steps {
              sh 'npm run-script build'
          script{
              def props = readJSON text: '{ "key": "value" }'
              def jsonString = readJSON text: '{"name": "${name}"}'
            echo "name":"${name}"
              //def jsonObj = readJSON text: jsonString.toString()
              echo jsonString.toString()
              //def json = new groovy.json.JsonBuilder()
             // json "element1": jsonString
              //def file = new File("$WORKSPACE/fichier1.json")
              //file.write(groovy.json.JsonOutput.prettyPrint(json.toString()))
              writeJSON(file:'fichier1.json',json:jsonString)
          }
            }
      }     
  }
}
