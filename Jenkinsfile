pipeline {
  agent any

  tools{
    nodejs 'NodeJS 12'
  }


    stages{
        stage(git-clone){
            steps{
                echo "checking out from git repo"
                git "https://github.com/amal-reji/weather-app.git"
            }
        }
        stage(build){
            steps{
                echo 'Compiling result app..'
                sh 'npm install'
                sh 'node src/app'
            }
        }
    }     
}