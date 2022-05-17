# vuepress-plugin-baidu-seo

> Baidu Seo plugin for vuepress v1.x

## Install

``` bash
$ yarn add -D vuepress-plugin-baidu-seo

#or

$ npm install -D vuepress-plugin-baidu-seo
```

## Usage

```js
module.exports = {
  plugins: [
    ['vuepress-plugin-baidu-seo', {
      ignoreLocal: true,
      hm: 'xxxxxxx'
    }]
  ]
}
```

## Options

### Baidu Tongji

#### hm

- Type: `string`
- Default: `undefined`
- Description: the code of baidu tongji

#### ignoreLocal

- Type: `boolean`
- Default: `false`
- Description: ignore `127.0.0.1` and `localhost` access for baidu tongji