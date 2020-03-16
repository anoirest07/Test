pipeline {
  agent any
    stages {
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
      stage('Ansible') {              
            steps {         
                script{
                   sh "ansible-playbook /etc/ansible/project-CRMGP/playbook.yml ${RCD_VERSION} ${RCD_PILOTE_VERSION} ${RCD_APIS} ${BAD3_INSTANCE} ${PTF} ${Salle} ${DEPL_VERSION} ${DEPL_MODE} ${EVOL_SUFFIX} ${BASE_SUFFIX} ${DOLLARU_SCRIPTS} ${NGINX_CONF} ${MEM_LIMIT} ${INCLUDE_AUDIT_LCRI}"
                }
            }
        }
        //stage('Build') {              
          //  steps {         
            //    script{
              //     sh "./script_file.sh ${RCD_VERSION} ${RCD_PILOTE_VERSION} ${RCD_APIS} ${BAD3_INSTANCE} ${PTF} ${Salle} ${DEPL_VERSION} ${DEPL_MODE} ${EVOL_SUFFIX} ${BASE_SUFFIX} ${DOLLARU_SCRIPTS} ${NGINX_CONF} ${MEM_LIMIT} ${INCLUDE_AUDIT_LCRI}"
                //}
            //}
        //}
    }
}

