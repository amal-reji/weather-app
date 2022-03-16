pipeline {
  agent any

    stages{
        stage("git-clone"){
            steps{
                echo "checking out from git repo"
                git "https://github.com/amal-reji/weather-app.git"
            }
        }
        stage("build"){
            steps{
                echo 'Compiling result app..'
                sh 'apt-get install nodejs'
                sh 'npm install'
                sh 'node src/app'
            }
        }
    }     
}