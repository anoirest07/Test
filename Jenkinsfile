pipeline {
  agent any
    stages {
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
                    sh " echo '[{\"name\":\"${name}\",\"apis\":\"[${apis}]\",\"version\":\"${version}\",\"status\":\"${status}\"}]' > file.json"
                }
            }
        }
    }
}

