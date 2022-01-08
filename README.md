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
  - [ ] docker-composeでpostgressとnestjs設定
  - [ ] env.ファイル等
- [ ] ユーザーCRUD機能作成
- [ ]  awsでnest.jsをfargateにデプロイ
    - [ ]  デプロイ環境設定
      - [ ]  nginxやDBのmigration
    - [ ] ECRにpush
    - [ ]  VPCなども設定
    - [ ]  RDS
    - [ ]  Route
    - [ ] パラメータストアなど
- [ ]  github actionsで自動デプロイ
- [ ]  redis設定
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
