pipeline {
  agent any
    stages {
        //stage('prepare'){
            //steps {
                //script {
                    //echo "-- Clean workspace before doing anything : "
                    //cleanWs notFailBuild: true
                //}
            //}
        //}
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
                  //sh './test.sh ${params}'https://github.com/login
                   sh "./script_file.sh ${RCD_VERSION} ${RCD_PILOTE_VERSION} ${RCD_APIS} ${BAD3_INSTANCE} ${PTF} ${Salle} ${DEPL_VERSION} ${DEPL_MODE} ${EVOL_SUFFIX} ${BASE_SUFFIX} ${DOLLARU_SCRIPTS} ${NGINX_CONF} ${MEM_LIMIT} ${INCLUDE_AUDIT_LCRI}"
                }
            }
        }
    }
}

