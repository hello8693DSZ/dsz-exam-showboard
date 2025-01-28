# 手动编写json配置文件教程<br>
## 新建文件 `exam_config.json` ，模板如下

> [!warning]
>
> 请确保 `exam_config.json` 文件编码为 `UTF-8`，换行符为 `LF`，按照`json`文件格式填写。**（不然可能会出一些神奇的 Bug）**
>
> 不确定？可以使用 [VSCode](https://code.visualstudio.com/) 打开、编辑文件，右下角显示编码格式和换行方式，点击即可更改。

```json
{
  "examName": "考试名称",
  "message": "信息",
  "room": "考场号",
  "examInfos": [
    {
      "name": "科目",
      "start": "2024-12-01T07:00:00",
      "end": "2024-12-01T08:00:00"
    },
    {
      "name": "科目/科目",
      "start": "2024-12-01T09:00:00",
      "end": "2024-12-01T10:00:00"
    }
  ]
}
```

> [!tip]
>
> `message` 与 `room` 内容必填（可填空格隐藏），`examInfos` 至少需要一条数据。
>
> 如果有两个以"/"分隔的科目可以自动转化为双行显示