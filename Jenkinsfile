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
                            //credentialsId: 'jenkinsmaster',
                            url: 'https://github.com/anoirest07/Test.git']]])
                }
            }
        }
        stage('Build') {              
            steps {
              //sh 'npm run-script build'
                script{
                    //sh " echo '[{\"name\":\"${name}\",\"apis\":\"[${apis}]\",\"version\":\"${version}\",\"status\":\"${status}\"}]' > file.json"
                    //sh "cat <<EOF > file4.json \n [{\"name\":\"${name}\",\"apis\":\"[${apis}]\",\"version\":\"${version}\",\"status\":\"${status}\"}] "
                    //sh "cat <<EOF > ${env.WORKSPACE}/src/assets/file4.json \n [{\"name\":\"${name}\",\"apis\":\"${apis}\",\"version\":\"${version}\",\"status\":\"${status}\"}] "
                    //sh "echo '${params.apis}'"
                  sh './test.sh ${params}'
                }
            }
        }
    }
}

