pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/shamal87/new-project
                    ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                sh '''
                    cp -r new-project/* /var/www/html
                    ls -l /var/www/html
                '''
                    
            }
        }
        
    }
}
