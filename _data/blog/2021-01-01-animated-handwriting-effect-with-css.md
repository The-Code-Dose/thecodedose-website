---
template: BlogPost
path: /blog/animated-handwriting-effect-with-css
date: 2021-01-01T10:31:54.690Z
title: Animated Handwriting Effect with CSS
tags:
  - html
  - css
  - javascript
  - animation
  - web design
  - web development
  - frontend
  - svg
metaDescription: ''
---
If you want to create a handwriting animation with CSS and SVG, please keep on reading. Below is the Codesandbox for the example used in this post, you can fork and play sround with it!

<iframe src="https://codesandbox.io/embed/beautiful-kalam-6zhe0?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="beautiful-kalam-6zhe0"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>\
Let's get started 🎉🎉🎉

# \
✨Creating the SVG✨

\
1. Write down the word you want to animate on a piece of paper and click a photo of it.\
2. import the image in Figma. File > Place Image.\
3. Use the pen tool and use your image as a guide to create the path for you word.\
4. After creating the path you can delete the image.\
5. Add stroke width to all the paths you have. I have two paths - the base word and the dash of the letter 't'\
6. Group all the vectors in a single selection and export it as SVG.\
\
✨Animation✨\
1. Copy and paste the SVG code inside your HTML code.\
2. Add a unique class to every path. O have two paths, so I have two different classes - signature\_\_base and signature\_\_dash\
3. To the signature__base class, experiment and figure out a value for property stroke-dasharray such that the entire word is written in a. single dash with no space in between.\
4. I tried different values - 8, 80, 800, 8000. Finally figured 8000 was good enough for me.\
5. Add an animation to it which makes the stroke-dashoffset go from 8000 (this should be equal to the stroke-dasharray value) to 0.\
6. Add the same animation to all your paths' classes.\
7. Now, we want to sync the animations such that the dash is drawn after the base word is drawn\
8. To achieve that, I set the animation for my base word to finish by 80% of the time i.e. it is drawn from 0% of 4s to 80% of 4s.\
9. Next, set the animation of the second path, the dash path to start after 80% of 4s and finish by 100% of 4s.\
Done 🎉🎉🎉
