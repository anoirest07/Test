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
              //def jsonString = readJSON text : '{ "name": "'+"${name}"+'","apis": "'+"${apis}"+'","version": "'+"${version}"+'","status": "'+"${status}"+'"}'
              //echo jsonString.toString()
              //writeJSON(file:'fichier1.json',json:jsonString)
              //v1 = "${name}"
              //echo v1.toString()
            //def jsonDictionary = readJSON text : '{ "name": "'+"${name}"+'","apis": "'+"${apis}"+'","version": "'+"${version}"+'","status": "'+"${status}"+'"}'
            //echo jsonDictionary.toString()  
            //writeJSON(file:'fichier1.json',json:jsonDictionary)
            sh'echo "name:"$1'
                          
          }
            }
      }     
  }
}
