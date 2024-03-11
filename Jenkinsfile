def getEnvName() {
    def branch = scm.branches[0].name
    if (branch == '*/production') {
        return 'prod'
    } else {
        return 'develop'
    }
}

def envName = getEnvName()
def jobName = env.JOB_NAME
def buildNo = env.BUILD_NUMBER

def selectBuild(env) {
    if (env == 'prod') {
        sh 'docker build -t memocoll-service --build-arg NODE_ENV=production .'
    } else {
        sh 'docker build -t memocoll-service --build-arg NODE_ENV=development .'
    }
}

def selectDeploy(env) {
    if (env == 'prod') {
        sh 'docker run --name memocoll-service -e NODE_ENV=production -p 3300:3300 memocoll-service'
    } else {
        sh 'docker run --name memocoll-service -e NODE_ENV=development -p 3300:3300 memocoll-service'
    }
}


pipeline {
    agent none

    stages {
        stage('Init'){
            agent any
            steps {
                echo "Init ... ${envName}"
                echo '******************************'
            }
        }
        stage('Build images') {
            agent any
            steps {
                echo "Build images ... ${envName}"
                selectBuild(envName)
                echo '******************************'
            }
        }
        stage('Deployment') {
            agent any
            steps {
                echo "Deployment  ... ${envName}"
                selectDeploy(envName)
                echo '******************************'
            }
        }
    }
}
