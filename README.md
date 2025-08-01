# Arch Radar

A simple example of Enterprise Architecture Radar
(based on Zalando Tech Radar).

A working example can be found at https://archinomicon.github.io/arch-radar/.

## Usage

1. include `d3.js` and `radar.js`:

```html
<script src="d3.v7.min.js"></script>
<script src="radar.js"></script>
```

2. insert an empty `svg` tag:

```html
<svg id="radar"></svg>
```

3. configure the radar visualization:

```js
radar_visualization({
  repo_url: 'https://github.com/archinomicon/arch-radar',
  svg_id: 'radar',
  width: 1450,
  height: 1000,
  scale: 1.0,
  colors: {
    background: '#fff',
    grid: '#bbb',
    inactive: '#ddd',
  },
  // Some font families might lead to font size issues
  // Arial, Helvetica, or Source Sans Pro seem to work well though
  font_family: 'Arial, Helvetica',
  title: 'Arch Radar',
  quadrants: [
    { name: 'Bottom Right' },
    { name: 'Bottom Left' },
    { name: 'Top Left' },
    { name: 'Top Right' },
  ],
  rings: [
    { name: 'INNER', color: '#5ba300' },
    { name: 'SECOND', color: '#009eb0' },
    { name: 'THIRD', color: '#c7ba00' },
    { name: 'OUTER', color: '#e09b96' },
  ],
  print_layout: true,
  links_in_new_tabs: true,
  entries: [
    {
      label: 'Some Entry',
      quadrant: 3, // 0,1,2,3 (counting clockwise, starting from bottom right)
      ring: 2, // 0,1,2,3 (starting from inside)
      moved: -1, // -1 = moved out (triangle pointing down)
      //  0 = not moved (circle)
      //  1 = moved in  (triangle pointing up)
      //  2 = new       (star)
    },
    // ...
  ],
});
```

Entries are positioned automatically so that they don't overlap. The "scale" parameter can help
in adjusting the size of the radar.

## Deployment

Arch Radar is a static page, so it can be deployed using any hosting provider of your choice offering static page hosting.

## Local Development

1. install dependencies with npm:

```
npm i
```

2. start local dev server:

```
npm start
```

3. your default browser should automatically open and show the url

```
http://localhost:3000/
```

## License

```
The MIT License (MIT)

Copyright (c) 2017-2025 Zalando SE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
