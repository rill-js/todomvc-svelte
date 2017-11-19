import './style.css'

import Router from 'rill'
import page from '@rill/page'
import renderer from '@rill/svelte'
import homePage from './home.html'
import errorPage from './500.html'
import missingPage from './404.html'

export default new Router()
  .get(page
    .html({ lang: 'en' })
    .meta({ charset: 'utf-8' })
    .meta({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' })
    .title('Rill/Svelte Todo-MVC')
    .meta({ name: 'description', content: 'Todo MVC app using Rill and Svelte.' })
    .link({ rel: 'stylesheet', href: '/index.css' })
    .script({ src: '/polyfill.js', async: true })
    .script({ src: '/index.js', async: true })
  )
  .get(renderer())
  .get('/500', ({ req, res, locals }) => {
    locals.message = req.query.message
    res.status = 500
    res.body = errorPage
  })
  .get('/404', ({ res }) => {
    res.status = 404
    res.body = missingPage
  })
  .get('/:filter(all|pending|completed)?', ({ req, res, session, locals }) => {
    locals.filter = req.params.filter || 'all'
    locals.todos = session.get('todos') || []
    res.body = homePage
  })
