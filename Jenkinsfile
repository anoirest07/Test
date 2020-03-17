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
                  sh "ansible-playbook project-CRMGP/playbook.yml -i projet-CRMGP/inventory/Server_host.yml  -e RCD_VERSION=\"${RCD_VERSION}\" -e RCD_PILOTE_VERSION=\"${RCD_PILOTE_VERSION}\" -e RCD_APIS=\"${RCD_APIS}\" -e BAD3_INSTANCE=\"${BAD3_INSTANCE}\" -e PTF=\"${PTF}\" -e Salle=\"${Salle}\" -e DEPL_VERSION=\"${DEPL_VERSION}\" -e EVOL_SUFFIX=\"${EVOL_SUFFIX}\" -e BASE_SUFFIX=\"${BASE_SUFFIX}\" -e DOLLARU_SCRIPTS=\"${DOLLARU_SCRIPTS}\" -e NGINX_CONF=\"${NGINX_CONF}\" -e MEM_LIMIT=\"${MEM_LIMIT}\" -e INCLUDE_AUDIT_LCRI=\"${INCLUDE_AUDIT_LCRI}\"  "  
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

