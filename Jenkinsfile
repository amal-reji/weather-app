node{
  agent{
      docker{
          image 'node12-docker'
      }
  }

    stages{
        stage("git-clone"){
            steps{
                echo "checking out from git repo"
                git branch: 'main', credentialsId: 'ddc0f9cc-9a97-4351-9624-94a265a4fc19', url: 'https://github.com/amal-reji/weather-app.git'
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