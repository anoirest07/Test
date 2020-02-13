
pipeline {
  agent any
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
