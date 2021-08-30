# for issuse report

if import any of these lines will cause static file loading slow in serve mode

```js
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
```

## why & workaround

When a request come in, esbuild in serve mode will build and cache the result in 250ms.
If package or app too large (loading time > 250ms), will cause multiple rebuild when loading the page (even just a static file).
So, switch to watch mode, and serve file by another http server could solve it.


## install & test & build

* install: `npm install`
* build: `npm run build`
* develop (serve mode): `npm run start-slow`
* develop (watch mode): `npm run start`
