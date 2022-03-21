 
pipeline {
  agent{
      dockerfile {
            filename 'dockerfile'
            dir 'build'
            label 'docker-node'
        }
  }
  stages{
      stage('Example'){
          steps{
              echo 'Docker'
          }
      }
  }     
}