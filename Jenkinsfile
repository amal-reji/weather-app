 
pipeline {
  agent{
      docker {
        dockerfile true
        label 'docker'
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