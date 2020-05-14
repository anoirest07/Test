pipeline {
  agent any
    stages {
    //  stage('Ansible') {              
       //     steps {         
         //       script{
          //        sh "ansible-playbook project-CRMGP/playbook.yml -i project-CRMGP/inventory/Server_host.yml -e RCD_VERSION=\"${RCD_VERSION}\" -e RCD_PILOTE_VERSION=\"${RCD_PILOTE_VERSION}\" -e RCD_APIS=\"${RCD_APIS}\" -e BAD3_INSTANCE=\"${BAD3_INSTANCE}\" -e PTF=\"${PTF}\" -e Salle=\"${Salle}\" -e DEPL_VERSION=\"${DEPL_VERSION}\" -e DEPL_MODE=\"${DEPL_MODE}\" -e EVOL_SUFFIX=\"${EVOL_SUFFIX}\" -e BASE_SUFFIX=\"${BASE_SUFFIX}\" -e DOLLARU_SCRIPTS=\"${DOLLARU_SCRIPTS}\" -e NGINX_CONF=\"${NGINX_CONF}\" -e MEM_LIMIT=\"${MEM_LIMIT}\" -e INCLUDE_AUDIT_LCRI=\"${INCLUDE_AUDIT_LCRI}\"  "  
          //      }
         //   }
     //   }
        //stage('Build') {              
          //  steps {         
            //    script{
              //     sh "./script_file.sh ${RCD_VERSION} ${RCD_PILOTE_VERSION} ${RCD_APIS} ${BAD3_INSTANCE} ${PTF} ${Salle} ${DEPL_VERSION} ${DEPL_MODE} ${EVOL_SUFFIX} ${BASE_SUFFIX} ${DOLLARU_SCRIPTS} ${NGINX_CONF} ${MEM_LIMIT} ${INCLUDE_AUDIT_LCRI}"
                //}
            //}
        //}           
      stage('replace espace par virgule'){
        steps{
                        def description = ""
                        def DESCRIPTION = "${DESCRIPTION}"
                        description = DESCRIPTION.replaceAll(~/ /, ",")
                        echo description
        }
      }
              stage('Starting CRMGP job') {              
           steps {         
                script{
                   build job: 'CRMGP', parameters: [[$class: 'StringParameterValue', name: 'RCD_VERSION', value: "${RCD_VERSION}"],[$class: 'StringParameterValue', name: 'RCD_PILOTE_VERSION', value: "${RCD_PILOTE_VERSION}"],[$class: 'StringParameterValue', name: 'DOCKER_CONF', value: "${DOCKER_CONF}"],[$class: 'StringParameterValue', name: 'RCD_APIS', value: "${RCD_APIS}"],[$class: 'StringParameterValue', name: 'BAD3_INSTANCE', value: "${BAD3_INSTANCE}"],[$class: 'StringParameterValue', name: 'PTF', value: "${PTF}"],[$class: 'StringParameterValue', name: 'Salle', value: "${Salle}"],[$class: 'StringParameterValue', name: 'DEPL_VERSION', value: "${DEPL_VERSION}"],[$class: 'StringParameterValue', name: 'DEPL_MODE', value: "${DEPL_MODE}"],[$class: 'StringParameterValue', name: 'EVOL_SUFFIX', value: "${EVOL_SUFFIX}"],[$class: 'StringParameterValue', name: 'BASE_SUFFIX', value: "${BASE_SUFFIX}"],[$class: 'StringParameterValue', name: 'DOLLARU_SCRIPTS', value: "${DOLLARU_SCRIPTS}"],[$class: 'StringParameterValue', name: 'NGINX_CONF', value: "${NGINX_CONF}"],[$class: 'StringParameterValue', name: 'MEM_LIMIT', value: "${MEM_LIMIT}"],[$class: 'StringParameterValue', name: 'DESCRIPTION', value: description],[$class: 'BooleanParameterValue' , name: 'INCLUDE_AUDIT_LCRI', value: "${INCLUDE_AUDIT_LCRI}"],[$class: 'BooleanParameterValue' , name: 'REBUILD_APP', value: "false"],[$class: 'BooleanParameterValue' , name: 'REBUILD_CONF_FILE', value: "true"]]
                }
            }
        }
    }
}

