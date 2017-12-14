# 2. OneTab用于打包工作状态

Date: 2017-12-14

## Status

STATUS：proposed/accepted/done/deprecated/superseded

2017-12-14 proposed

## Context

现在用的是Chrome浏览器，OneTab作为Tab管理插件，被我当作收藏夹Inbox用了，几百条记录混杂在一起，查找都不方便
OneTab的优势是把当前打开的Tab存成一个列表，并且能迅速的恢复，所以非常适合作为工作环境的保存和恢复

## Decision

- 只保持必须保持开启的Tab为开启状态
  - 关闭就状态失效的页面，比如游戏
  - 20分钟内会使用的页面
- 控制条目在50条以内

## Consequences

- 需要明确收藏夹的使用规范
- 保持OneTab页面整洁