node('master') {
       stage('PULLING CHANGES') {
		  checkout([$class: 'GitSCM', 
		  branches: [[name: '*/dev']], 
		  doGenerateSubmoduleConfigurations: false, 
		  extensions: [], 
		  submoduleCfg: [],
		  userRemoteConfigs: [[credentialsId: 'github', url: 'https://github.com/kisokolab/market.git']]])
	   }

        stage('INSTALLING DEPENDENCIES THE APP') {
				sh '''
				echo "INSTALLING PACKAGES"
				sudo yarn
				'''
		}

        stage('BUILDING THE APP') {
				sh '''
				echo "BUILDING THE APP"
				sudo yarn build
				'''
		}

        stage('SERVE THE APPLICATION') {
				sh '''
				echo "SERVE THE APPLICATION"
				'''
		}
}

