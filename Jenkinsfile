
pipeline {
  agent any
  stages {
      //stage('Restore') {
            //steps {
               // sh 'npm install'
            //}
        //}
      stage('prepare'){
      steps {
        script {
          echo "-- Clean workspace before doing anything : "
          cleanWs notFailBuild: true
        }
      }
    }
      stage('Pull') {
      steps{
        script{
          checkout([$class: 'GitSCM', branches: [[name: '*/master']],
                     userRemoteConfigs: [[
                        credentialsId: 'jenkinsmaster',
                        url: 'https://github.com/anoirest07/Test.git']]])
        }
      }
    }
      stage('Build') {              
        steps {
              //sh 'npm run-script build'
          script{
              sh " echo name:${params.name},apis:${params.apis} ,version:${params.version},status:${params.status} > fichier.txt"
                          
          }
            }
      }     
  }
}
