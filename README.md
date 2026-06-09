# Masai - 品牌设计 & 艺术创作

这是一个现代化的品牌设计师作品集网站，展示设计作品、探索实验和服务领域。

## 🎨 网站特性

- **响应式设计**: 完美适配所有设备尺寸
- **平滑动画**: 页面滚动时的动画效果
- **现代UI**: 简洁而专业的设计风格
- **易于编辑**: 所有文本和内容都可轻松修改

## 📁 文件结构

```
Masai.github.io-/
├── index.html        # 主页面
├── script.js         # JavaScript交互脚本
└── README.md        # 本文件
```

## ✏️ 如何编辑内容

### 修改文本内容
1. 打开 `index.html` 文件
2. 找到要修改的文本部分
3. 直接编辑HTML中的文本

### 常见编辑位置：

**导航菜单** - 搜索 `<ul class="nav-menu">` 
**品牌作品** - 搜索 `<section id="portfolio">`
**探索作品** - 搜索 `<section id="explore">`
**服务领域** - 搜索 `<section id="experience">`
**联系信息** - 搜索 `<footer id="contact">`

### 替换占位符图片

目前所有图片使用渐变色占位符，如需使用真实图片：

1. 将图片文件放在 `images/` 文件夹中
2. 找到对应的 `<div class="portfolio-image">` 或 `<div class="explore-image">`
3. 替换为: `<img src="images/your-image.jpg" alt="描述">`

**示例：**
```html
<!-- 替换前 -->
<div class="portfolio-image">项目图片 #1</div>

<!-- 替换后 -->
<img src="images/project-1.jpg" alt="2026马跃新程景观设计" class="portfolio-image">
```

## 🎯 主要编辑修改

已完成的修改：
- ✅ 所有 "Achuan" 改为 "Masai"
- ✅ 中文 "阿川" 改为 "马赛"  
- ✅ 电话号码改为 17681880663
- ✅ 完整的HTML/CSS/JS结构

## 🔧 自定义样式

所有样式都在 `<style>` 标签中，可直接修改：

- **主题色**: 搜索 `#667eea` 和 `#764ba2` 进行修改
- **字体**: 修改 `font-family` 属性
- **间距**: 调整 `padding` 和 `margin` 值
- **响应式**: 修改 `@media` 查询中的数值

## 📞 联系信息

- **电话**: +86 176-8188-0663
- **小红书**: Masai影像实验室
- **公众号**: Masai

## 🚀 部署

此网站已部署在 GitHub Pages，任何对主分支的推送都会自动更新线上版本。

## 📝 许可

© 2024 Masai. All rights reserved.

---

**需要帮助?** 在issue中描述你的需求！