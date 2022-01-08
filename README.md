# nestjs-fargate

## 実現したいこと
- nestjsをECS(fargate)でデプロイする

[要件]
- DBが使える
- Routeでドメインが割り当てられている
- github actionsで自動デプロイできる

## TODO

- [ ]  githubに、nestjs-deployリポジトリとReadMeつくる
- [ ] dockerFile作成
- [ ]  awsでnest.jsをfargateにデプロイ
    - [ ] ECRにpush
    - [ ]  VPCなども設定
    - [ ]  RDS
    - [ ]  Route
    - [ ] パラメータストアなど
- [ ]  github actionsで自動デプロイ
- [ ]  quequeとcronをEC2で動かす
- [ ] reactフォルダ作成して、amplifyでデプロイ
- [ ] api通信出来るとこまで


## 学びたいこと

- VPCやサブネット
- IPアドレス
- Route
- RDS
- linux
- fargateのtaskdefinition
- Docker
- EC2
- 環境変数の設定方法
- github actions