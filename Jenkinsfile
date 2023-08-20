pipeline {
    agent any
    stages {
        stage('Production Development') {
            // when {
            //     branch "main"
            // }
            steps {
                sshPublisher(
                    continueOnError: false, failOnError: true,
                    publishers: [
                        sshPublisherDesc(
                            configName: "test",
                            verbose: true,
                            transfers: [
                                sshTransfer(
                                    sourceFiles: "**/*",
                                    remoteDirectory: "test1",
                                    execCommand: "cd test1 && npm i"
                                ),
                                sshTransfer(
                                    sourceFiles: "**/*",
                                    remoteDirectory: "test1",
                                    execCommand: "cd test1 && npm run build"
                                ),
                                sshTransfer(
                                    sourceFiles: "**/*",
                                    remoteDirectory: "test1",
                                    execCommand: "cd test1 && npm start"
                                ),
                            ]
                        )
                    ]
                )
            }
        }
    }
}