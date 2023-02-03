---
template: BlogPost
path: /blog/the-beginners-guide-to-setting-up-a-gatsby-blog-in-under-an-hour
date: 2020-11-23T19:07:47.304Z
title: The Beginners Guide to setting up a Gatsby Blog in under an hour
tags:
  - gatsby
  - react
  - javascript
  - blog
  - netlify
metaDescription: >-
  Today we will be creating a blog with Gatsby and Netlify CMS and deploying it
  on Netlify. For the purposes of this blog, we will be using a Gatsby starter
  site (demo) rather than building it from scratch.
thumbnail: /assets/oct_28.jpg
draft: false
author: Urvashi
---
Today we will be creating a blog with Gatsby and deploying it on Netlify. For the purposes of this blog, we will be using a Gatsby starter site ([demo](https://confident-ritchie-123a6d.netlify.app/)) rather than building it from scratch.

![Dark mode](/assets/confident-ritchie-123a6d.netlify.png)

![Light mode](/assets/confident-ritchie-123a6d.netlify_2.png)

Gatsby Starter Peach template has the following features—

1. SEO
2. Category Tags
3. Tag pages
4. Dark/Light modes

If you want to create a blog that looks like this in under an hour, keep reading!

# Prerequisites

1. npm / yarn
2. git / github
3. React (not needed if you want to use the template as it is)

# Let's get started

1. **Create a new repository on GitHub and clone it locally.**

```shell
git clone  https://github.com/your-username/your-blog
cd your-blog
```

2. **Install the gatsby CLI**

```shell
npm install -g gatsby-cli
```

3. **Create a new site using the starter site into app directory**

```shell
gatsby new app https://github.com/ihsavru/gatsby-starter-peach
```

4. **Move the contents of the app directory to the root directory.**

```shell
mv app/* .
rm -rf app
```

# Development

Run the development server.

```bash
gatsby develop
```

You can make any changes you want and it will be reflected on [](http://localhost:8000/)<http://localhost:8000/>

Open ***site-meta-data.json*** and edit the fields accordingly. You might have to restart your development server to see these changes being reflected. (You can skip these changes and edit later using Netlify CMS after deploying)

Next open ***static/admin/config.yml*** and change *`ihsavru/gatsby-starter-peach`* to your repo.

Don't forget to create a `.gitignore` file.

Add the following to it—

```bash
node_modules
public
.cache
.DS_Store
```

After you are done, commit your changes and push it to GitHub.

```shell
git add .
git commit -m "your commit message here"
git push
```

# Deployment

1. Create an account on [Netlify](https://app.netlify.com/)
2. After logging in, go to Sites
3. Now click on "New Site from git"
4. Complete the following steps - Connect to GitHub, select your repository and deploy site!
5. Set build command to `gatsby build` and publish directory to `public`

![create a new site steps](/assets/Screenshot 2020-11-23 at 10.16.38 PM.png)

A random url will be generated where your site will be deployed.

Once the build status is completed, you can visit your site at the same url which will look something like this - [](https://confident-ritchie-123a6d.netlify.app/)<https://confident-ritchie-123a6d.netlify.app>

# Connect with Netlify CMS

1. Go to GitHub > Settings > Developer Settings or [go to this url](https://github.com/settings/developers).
2. Click on "New OAuth App"
3. Enter the details as below
4. Set the Authorization callback URL to [](https://api.netlify.com/auth/done)<https://api.netlify.com/auth/done> and register the application

![New OAuth App](/assets/Screenshot 2020-11-23 at 11.20.25 PM.png)

5. After that click on "Generate a new client secret" and copy it
6. Go to [apps.netlify.org](http://apps.netlify.org) and go to your site
7. Go to Site Settings > Access Control
8. Under OAuth section, click on "Install Provider"
9. Select GitHub and copy and paste your client secret as well as your client ID and click on install

# Create Posts

1. Go to your deployed Netlify site and go to the Admin page - [](https://confident-ritchie-123a6d.netlify.app/admin)https://your-site.netlify.app/admin
2. Log in using GitHub.
3. Now you can edit your blogs as well as your site metadata from here itself!
4. You can delete the sample blogs that come with the template and add your own.

**Start creating!**

Thanks for reading! If you come across any bugs, [please raise an issue here](https://github.com/ihsavru/gatsby-starter-peach). Or you can write me an email - [vurvashi11@gmail.com](mailto:vurvashi11@gmail.com)
