# aws-xray-demo

1.在API Gateway对应项目的[阶段]中选择[日志/跟踪]，勾选[启动x-ray跟踪]
2.在Lambda对应的函数中的[调试和错误处理]，勾选[启用活动跟踪]
3.运行代码
4.在X-Ray中选择[Service Map]或者[Traces]，注意aws有延迟，在运行代码后可能需要等待1-5分钟x-ray才会有数据出现
