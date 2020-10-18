const express = require('express')
const app = express.Router()

app.get('/wp-json/wp/v2/posts', (req, res, next) => {
  res.status(200)
  res.json([
      {
          'title': 'テスト記事です。',
          'body': 'test desu. test desu.'
      },
      {
          'title': 'テスト記事その２',
          'body': 'テストの記事の本文です。'
      },
  ])
})

module.exports = app